module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;

    export class GameBaseScene extends BaseScene {

        private modeIndex = 0;
        private modeType = 0;
        private flying_birds: MovieClipWrapper;
        private birdOriginalPosition1: PIXI.Point;
        private flying_birds2: MovieClipWrapper;
        private birdOriginalPosition2: PIXI.Point;
        private flying_birds3: MovieClipWrapper;
        private birdOriginalPosition3: PIXI.Point;
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
                    bannerPosition.x = this.logoX + 1565;
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

            if(Environment.isDesktop() ){
                this.flying_birds = <MovieClipWrapper>this._layout.getComponent("bird");
                this.birdOriginalPosition1 = new PIXI.Point(this.flying_birds.position.x, this.flying_birds.position.y);
                this.flying_birds2 = <MovieClipWrapper>this._layout.getComponent("bird2");
                this.birdOriginalPosition2 = new PIXI.Point(this.flying_birds2.position.x, this.flying_birds2.position.y);
                this.flying_birds3 = <MovieClipWrapper>this._layout.getComponent("bird3");
                this.birdOriginalPosition3 = new PIXI.Point(this.flying_birds3.position.x, this.flying_birds3.position.y);
            }
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

        protected playSceneAnimation(): void {
            super.playSceneAnimation();
            if(Environment.isDesktop() ){
                this.modeIndex++;
                if(this.modeIndex == 4){
                    this.modeIndex = 0;
                    // let bg_add_mode = <DO.Core.Renderer.UI.Image>this._layout.getComponent("base_bg_glow");
                    //
                    // if(this.modeType == 0){
                    //     this.modeType++;
                    //     DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
                    // } else {
                    //     this.modeType = 0;
                    //     DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,2);
                    // }
                }
                else if(this.modeIndex == 2){
                    this.flying_birds.visible=true;
                    this.flying_birds.rotation = -0.1;
                    TweenLite.to(this.flying_birds.position, 4, { x: 0, y: 490, ease: Linear.easeNone }),
                        TweenLite.to( this.flying_birds.scale, 4, {
                            x: 1, y: 1, ease: Linear.easeNone, onComplete: ()=> {
                                this.flying_birds.position.x = this.birdOriginalPosition1.x;
                                this.flying_birds.position.y = this.birdOriginalPosition1.y;
                                this.flying_birds.rotation = 0;
                                this.flying_birds.visible=false;
                            }
                        } )
                    this.flying_birds2.visible=true;
                    this.flying_birds2.rotation = -0.1;
                    TweenLite.to(this.flying_birds2.position, 8, { x: 2100, y: 100, ease: Linear.easeNone }),
                        TweenLite.to( this.flying_birds2.scale, 8, {
                            x: 1, y: 1, ease: Linear.easeNone, onComplete: ()=> {
                                this.flying_birds2.position.x = this.birdOriginalPosition2.x;
                                this.flying_birds2.position.y = this.birdOriginalPosition2.y;
                                this.flying_birds2.rotation = 0;
                                this.flying_birds2.visible=false;
                            }
                        } )
                    setTimeout(()=>{
                        this.flying_birds3.visible=true;
                        this.flying_birds3.rotation = -0.1;
                        TweenLite.to(this.flying_birds3.position, 8, { x: 2300, y: 100, ease: Linear.easeNone }),
                            TweenLite.to( this.flying_birds3.scale, 8, {
                                x: 1, y: 1, ease: Linear.easeNone, onComplete: ()=> {
                                    this.flying_birds3.position.x = this.birdOriginalPosition3.x;
                                    this.flying_birds3.position.y = this.birdOriginalPosition3.y;
                                    this.flying_birds3.rotation = 0;
                                    this.flying_birds3.visible=false;
                                }
                            } )
                    },1000)
                    // this.flying_birds.visible=true;
                    // TweenLite.to(this.flying_birds.position, 10, {
                    //     x: -25,
                    //     y: this.flying_birds.position.y,
                    //     ease: Linear.easeNone,
                    //     onComplete : () => {
                    //         this.flying_birds.visible=false;
                    //         this.flying_birds.position = this.birdOriginalPosition1
                    //     }
                    // });
                }
            }

        }


    }
}