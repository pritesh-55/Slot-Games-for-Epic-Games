module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;

    export class GameBaseScene extends BaseScene {
        private modeIndex = 0;
        private modeType = 0;
        private bg_add_mode: MovieClipWrapper;
        protected _isLeftHanded: boolean;
        private logoX: number;
        private logoY: number;
        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected addForce(){
            $("#force_select").remove();
            $("body").append('<select style="z-index: 1000000; color:black; position:fixed; top:21px;" class="cheat_style">'+ '<option class="inputBlock"><input id="myText" style="position: fixed;z-index: 1000000">' + '<div class="button" id="addCheat" style="position: fixed;z-index: 1000000;color: yellowgreen;top: -5px;left: 174px;width: 25px;height: 35px;text-align: center;line-height: 35px;-webkit-user-select: none;-moz-user-select: none;user-select: none;cursor: pointer;">▶</div>' + '</option>'+ '</select>');
            $("body").append('<select style="z-index: 1000000; color:black; position:absolute;top:21px;" id="force_select" class="cheat_style">'+
                '<option value="none">---------  Apply cheat  --------</option>'+
                '<option value="21,21,13,20,14">001. Free Game</option>'+
                '</select>');
            $("#force_select").change(function(): void{
                if ($(this).val() != "none") {
                    ApplicationBase.instance.emit(GameEvents.SET_FORCE_VALUES, $(this).val());
                } else {
                    ApplicationBase.instance.emit(GameEvents.SET_FORCE_VALUES, null);
                }
            });
            $("#addCheat").on('click', function (e) {
                ApplicationBase.instance.emit(GameEvents.SET_FORCE_VALUES, document.getElementById("myText")["value"]);
                document.getElementById("myText")["value"]
            });
        }


        protected updateComponentData() {
            super.updateComponentData();

            if(Environment.isDesktop() ){
                this.bg_add_mode = <MovieClipWrapper>this._layout.getComponent("bg_add_mode1");
            }
            DO.Common.ApplicationBase.instance.on(
                DO.Slots.SettingsPages.SettingsEvents.ON_LEFT_HANDED_MODE, (isLeftHanded: boolean) =>{
                    this._isLeftHanded = isLeftHanded;
                    this.onResize();
                });

        }

        protected playSceneAnimation(): void {
            super.playSceneAnimation();
            if(Environment.isDesktop() ){
                this.modeIndex++;
                if(this.modeIndex == 4){
                    this.modeIndex = 0;

                    if(this.modeType == 0){
                        this.modeType++;
                        DO.Core.Renderer.UI.FX.fadeOut(this.bg_add_mode,0,2);
                    } else {
                        this.modeType = 0;
                        DO.Core.Renderer.UI.FX.fadeIn(this.bg_add_mode,0,2);
                    }
                }
            }
        }

        protected onResize(): void {
            super.onResize();

            if (!Environment.isDesktop() && Environment.isLandscape()) {
                const bannerComponent = this._layout.getComponent("banner");
                const bannerPosition = bannerComponent.position;

                this.logoX = bannerPosition.x;
                this.logoY = bannerPosition.y;

                if (this._isLeftHanded) {
                    bannerPosition.x = this.logoX + 0;
                }

                bannerPosition.y = this.logoY;
            }
        }

        // protected updateComponentData() {
        //     super.updateComponentData();
        //     if (!Environment.isMobile()) {
        //         this.BGAnimation();
        //     }
        // }

        // protected BGAnimation(): void {
        //     var bg_add_mode1 = this._layout.getComponent("bg_add_mode1");
        //     DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode1,0,2);
        //     DO.Core.Time.juggler.setTimeout(function () {
        //         DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode1,0,1);
        //         DO.Core.Time.juggler.setTimeout(function () {
        //             this.BGAnimation();
        //         }.bind(this),2000);
        //     }.bind(this),2000);
        // }
    }
}