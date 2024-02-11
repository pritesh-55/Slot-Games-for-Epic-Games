module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;

    export class GameBaseScene extends BaseScene {
        private modeIndex = 0;
        private modeType = 0;
        private flying_birds: MovieClipWrapper;
        private birdOriginalPosition1: PIXI.Point;
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
                '<option value="35,6,14,7,0,4">001. Free Game</option>' +
                '<option value="80,6,14,8,9,4">002. Bonus</option>' +
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

            if (Environment.isLandscape() || Environment.isDesktop()) {
                this._layout.getComponent("fishingrod").visible = true;
            } else {
                this._layout.getComponent("fishingrod").visible = false;
            }
        }

        protected updateComponentData() {
            super.updateComponentData();

            if(Environment.isDesktop() ){
                this.flying_birds = <MovieClipWrapper>this._layout.getComponent("bird");
                this.birdOriginalPosition1 = new PIXI.Point(this.flying_birds.position.x, this.flying_birds.position.y);
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

                    // if(this.modeType == 0){
                    //     this.modeType++;
                    //     DO.Core.Renderer.UI.FX.fadeOut(this.bg_add_mode,0,2);
                    //     DO.Core.Renderer.UI.FX.fadeIn(this.front_add_mode,0,2);
                    // } else {
                    //     this.modeType = 0;
                    //     DO.Core.Renderer.UI.FX.fadeOut(this.front_add_mode ,0,2);
                    //     DO.Core.Renderer.UI.FX.fadeIn(this.bg_add_mode,0,2);
                    // }
                }
                else if(this.modeIndex == 2){
                    this.flying_birds.visible=true;
                    this.flying_birds.rotation = -0.1;
                    TweenLite.to(this.flying_birds.position, 7, { x: 200, y: -150, ease: Linear.easeNone }),
                        TweenLite.to( this.flying_birds.scale, 7, {
                            x: 1, y: 1, ease: Linear.easeNone, onComplete: ()=> {
                                this.flying_birds.position.x = this.birdOriginalPosition1.x;
                                this.flying_birds.position.y = this.birdOriginalPosition1.y;
                                this.flying_birds.rotation = 0;
                                this.flying_birds.visible=false;
                            }
                        } )
                    // this.flying_birds.visible=true;
                    // TweenLite.to(this.flying_birds.position, 10, {
                    //     x: -25,
                    //     y: this.flying_birds.position.y,
                    //     ease: Linear.easeNone,
                    //     onComplete : () => {
                    //         this.flying_birds.visible=false;
                    //         this.flying_birds.position = this.birdOriginalPosition1;
                    //     }
                    // });
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
                    bannerPosition.x = this.logoX + 1520;
                }

                bannerPosition.y = this.logoY;
            }
        }

    }
}
