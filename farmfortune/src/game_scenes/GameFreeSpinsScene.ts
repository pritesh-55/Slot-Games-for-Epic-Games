module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import GameEvents = DO.Common.GameEvents;
    import Server = DO.Common.Server;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;

    export class GameFreeSpinsScene extends FreeSpinsScene {
        private modeIndex = 0;
        private modeType = 0;
        private stopTween: boolean = false;
        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected updateComponentData(){
            super.updateComponentData();

            if (ResponseResult.current.isBrokenGameSate()) {
                Events.coreEvents.emit(SoundManager.EVENT_SET_MUTE, true);
            }
            if(Environment.isDesktop()){
                this.startRotation();
            }
        }
        protected onGameReady(): void {
            super.onGameReady();

            if(Environment.isDesktop()&& !this.stopTween){
                let next =  <PIXI.Container>this._layout.getComponent("free_spins_win");
                TweenLite.to(next, 0.5, {
                    y: next.y - next.width,
                    ease: Linear.easeIn,
                    delay: 0.2,
                    onStart: function () {
                        next.visible = true;
                    }
                });
                let multiplier =  <PIXI.Container>this._layout.getComponent("multiplier");
                TweenLite.to(multiplier, 0.5, {
                    y: multiplier.y - multiplier.width,
                    ease: Linear.easeIn,
                    delay: 0.2,
                    onStart: function () {
                        multiplier.visible = true;
                    }
                });
            }
        }


        protected playSceneAnimation(): void {
            super.playSceneAnimation();
            if(Environment.isDesktop() ){
                this.modeIndex++;
                if(this.modeIndex == 4){
                    this.modeIndex = 0;
                    let bg_add_mode = <DO.Core.Renderer.UI.MovieClipWrapper>this._layout.getComponent("freespins_bg_add_mode");
                    let stars_add_mode = <DO.Core.Renderer.UI.MovieClipWrapper>this._layout.getComponent("stars_add_mode");
                    if(this.modeType == 0){
                        this.modeType++;
                        DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
                        DO.Core.Renderer.UI.FX.fadeIn(stars_add_mode,0,2);
                    } else {
                        this.modeType = 0;
                        DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,2);
                        DO.Core.Renderer.UI.FX.fadeOut(stars_add_mode,0,2);
                    }
                }
                else if(this.modeIndex == 2){

                    if(this.modeType == 0){
                        this.modeType++;

                    } else {
                        this.modeType = 0;

                    }
                }
            }

        }

        protected startRotation() {
            const blade = this._layout.getComponent("rotor_blade_free");
            TweenMax.to(blade, 120,{
                rotation: '+=360',
                ease: Linear.easeNone,
                repeat: -1,
                duration: 120,
                transformOrigin: 'center center',
            });
        }

        protected onResultsReady():void {
            super.onResultsReady();
            if(this._layout.getComponent("multiplier_count") && ResponseResult.current.getMultiplier()){
                this._layout.setComponentText("multiplier_count", "X" +ResponseResult.current.getMultiplier());
            }
        }
        protected onDestroy(): void {
            if(Environment.isDesktop()){
                this.stopTween = true;
                let next =  <PIXI.Container>this._layout.getComponent("free_spins_win");
                let nextY = next.y;
                TweenLite.to(next, 0.5, {
                    y: nextY + next.width,
                    ease: Linear.easeIn,
                    delay: 0.2,
                    onComplete: function () {
                        next.visible = false;
                    }
                });

                let multiplier =  <PIXI.Container>this._layout.getComponent("multiplier");
                TweenLite.to(multiplier, 0.5, {
                    y: multiplier.y + multiplier.width,
                    ease: Linear.easeIn,
                    delay: 0.2,
                    onComplete: () => {
                        multiplier.visible = false;
                        super.onDestroy();
                    }
                });
            }

        }
    }
}
