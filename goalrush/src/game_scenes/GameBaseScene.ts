module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    export class GameBaseScene extends BaseScene {

        private modeIndex = 0;
        private modeType = 0;
        protected _isLeftHanded: boolean;
        private logoX: number;
        private logoY: number;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onResize(): void {
            super.onResize();
            this.setHTMLBackground("./assets/renderer/base/blur.jpg");
            if (Environment.isDesktop()) {
                $("#fullScreen").css("pointer-events", "all");
            }

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

        protected addForce(){
            $("#force_select").remove();
            $("body").append('<select style="z-index: 1000000; color:black; position:fixed; top:21px;" class="cheat_style">'+ '<option class="inputBlock"><input id="myText" style="position: fixed;z-index: 1000000">' + '<div class="button" id="addCheat" style="position: fixed;z-index: 1000000;color: yellowgreen;top: -5px;left: 174px;width: 25px;height: 35px;text-align: center;line-height: 35px;-webkit-user-select: none;-moz-user-select: none;user-select: none;cursor: pointer;">▶</div>' + '</option>'+ '</select>');
            $("body").append('<select style="z-index: 1000000; color:black; position:absolute;top:21px;" id="force_select" class="cheat_style">'+
                '<option value="none">---------  Apply cheat  --------</option>'+
                '<option value="17,2,2,17,14">001. Free Game</option>' +
                '<option value="6,18,16,13,21">002. BASE WILD MULTIPLIER</option>' +
                '<option value="10,2,4,4,2">003. FREE SPIN WILD MULTIPLIER</option>' +
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


        protected updateOnOrientationChange(): void {
            if (!this._layout) return;

            super.updateOnOrientationChange();

            if (Environment.isLandscape()) {
                this._layout.getComponent("ui_base").visible = false;
                this._layout.getComponent("background").visible = true;
                this._layout.getComponent("portrait_bg").visible = false;
            } else {
                this._layout.getComponent("ui_base").visible = false;
                this.setHTMLBackground("./assets/renderer/base/mobile/basegame_mobile_portrait.jpg");
                this._layout.getComponent("background").visible = false;
                this._layout.getComponent("portrait_bg").visible = true;
            }
        }

        protected updateComponentData() {
            super.updateComponentData();
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
                    let bg_add_mode = <DO.Core.Renderer.UI.Image>this._layout.getComponent("base_bg_glow");

                    if(this.modeType == 0){
                        this.modeType++;
                        DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
                    } else {
                        this.modeType = 0;
                        DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,2);
                    }
                }
                // else if(this.modeIndex == 2){
                //     const fireworks1 = <DO.Core.Renderer.UI.MovieClipWrapper> this._layout.getComponent("fireworks");
                //     fireworks1.visible = true;
                //     fireworks1.clip.gotoAndPlay(0);
                //     fireworks1.clip.onComplete = () =>{
                //         fireworks1.visible = false;
                //     }
                // }
                // else if(this.modeIndex == 3){
                //     const fireworks2 = <DO.Core.Renderer.UI.MovieClipWrapper> this._layout.getComponent("fireworks2");
                //     fireworks2.visible = true;
                //     fireworks2.clip.gotoAndPlay(0);
                //     fireworks2.clip.onComplete = () =>{
                //         fireworks2.visible = false;
                //     }
                // }
            }
        }

    }
}