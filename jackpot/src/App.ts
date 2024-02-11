module DO {
    import ApplicationBase = DO.Common.ApplicationBase;
    import Queue = DO.Core.Utils.Queue;
    import Environment = DO.Core.Environment;
    import Events = DO.Core.Events;
    import GameEvents = DO.Common.GameEvents;
    import Server = DO.Common.Server;
    import Lang = DO.Core.Lang;
    import HTML = DO.Core.HTML;
    import AssetManager = DO.Core.AssetManager;
    import Currency = DO.Common.Currency;
    import SceneData = DO.Core.Renderer.SceneManager.SceneData;
    import Scene = DO.Core.Renderer.Scene;

    export class App extends ApplicationBase {

        constructor() {
            super(DO.getDefaultSettings());
        }

        protected onAppInit(gameConfig: any, addEventHandlers: Function): void {
            gameConfig = DO.getConfig();
            Environment.gameConfig = gameConfig;
            DO.Core.Events.coreEvents.on(Events.ON_APP_RESIZE, this.onAppResize);
            DO.Core.Events.coreEvents.on(Events.ON_APP_LOSE_FOCUS, this.onAppLoseFocus);
            DO.Core.Events.coreEvents.on(Events.ON_APP_GET_FOCUS, this.onAppGetFocus);
            DO.Core.Events.coreEvents.on(Events.ON_APP_EXIT, this.onAppExit);

            let load = false;
            let queue: Queue = new DO.Core.Utils.Queue();

            queue.add((callback) => {
                Lang.loadDictionary(Environment.launchVariables.language, callback);
            });

            queue.add((callback) => {
                $("body").append("<div id='game_wrapper'></div>");
                callback();
            });

            queue.add((callback) => {
                window["WebFont"].load({custom: { families: gameConfig.fonts}});
                callback();
            });

            queue.add((callback) => {
                Environment.setVariant([Environment.DEVICE_MOBILE, Environment.DEVICE_DESKTOP], Environment.launchVariables.variant);
                callback();
            });

            queue.add((callback) => {
                HTML.getPageManager("MAIN").loadPages(
                    gameConfig.html_pages,
                    function (progress: number, pageId: string) {
                    },
                    function () {
                        callback();
                    }
                );
            });

            queue.add((callback) => {
                DO.Core.Renderer.SceneManager.init(gameConfig.scenes);
                callback();
            });

            let manifests: string[] = gameConfig.assets_manifests;
            for(let i = 0; i < manifests.length; i++){
                let file = manifests[i];
                queue.add(function (callback): void {
                    let assets: AssetManager = AssetManager.get(file);
                    assets.load(file, function (): void {
                        if (!load && i == manifests.length -1) {
                            load = true;
                            callback();
                        }else{
                            callback();
                        }
                    }, (progress: number) => {

                    });
                });
            }

            queue.start(()=>{
                this.onServerInitResponse();
            });
        }

        protected onServerInitResponse(): void{
            Currency.currencyCode = Environment.launchVariables.currency;
            Currency.currencyDecimalPlaces = Environment.defaultSettings.currencyDecimalPlaces;
            Currency.localeId = Environment.launchVariables.language;
            Currency.useGrouping = Environment.defaultSettings.useGrouping;
            Lang.scanDOM();
            this.changeGameScene();
        }

        protected changeGameScene(): void {

            let sceneData: SceneData = DO.Core.Renderer.SceneManager.getSceneData(Server.BASE);
            DO.Core.Time.juggler.setTimeout(() => {
                $("#remove_after_load").css("display", "none");
                DO.Core.Renderer.SceneManager.showScene(sceneData.id, {data: {}},
                    (scene: Scene, isSceneChanged: boolean) => {
                        ApplicationBase.instance.emit(GameEvents.ON_GAME_READY);
                        HTML.getPageManager("MAIN").showPage("main");
                    }
                );
            }, 500);
        }
    }
}
