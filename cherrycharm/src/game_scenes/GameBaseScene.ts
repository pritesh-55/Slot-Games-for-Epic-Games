module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;

    export class GameBaseScene extends BaseScene {
        protected _isLeftHanded: boolean;
        private logoX: number;
        private logoY: number;
        private soundON: boolean;
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
                '<option value="20,28,22,1,8">001. Free Game</option>'+
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

            Events.coreEvents.on(SoundManager.EVENT_SET_MUTE, (isMuted: number) =>{
                Howler.mute(true);
                if (isMuted) {
                    this.soundON = false;
                    $(document).find("#button_audio").removeClass("audio_on");
                    $(document).find("#button_audio").addClass("audio_off");
                    $(document).find("#button_audio_screen").removeClass("audio_on_screen");
                    $(document).find("#button_audio_screen").addClass("audio_off_screen");
                } else {
                    this.soundON = false;
                    $(document).find("#button_audio").removeClass("audio_on");
                    $(document).find("#button_audio").addClass("audio_off");
                    $(document).find("#button_audio_screen").removeClass("audio_on_screen");
                    $(document).find("#button_audio_screen").addClass("audio_off_screen");
                }
            });
        }


    }
}