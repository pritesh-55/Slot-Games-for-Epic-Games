module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;
    import ResponseResult = DO.Common.Server.ResponseResult;
    export class GameFreeSpinsScene extends FreeSpinsScene {

        private modeIndex = 0;
        private modeType = 0;
        private flying_birds: MovieClipWrapper;
        private birdOriginalPosition1: PIXI.Point;
        private flying_birds2: MovieClipWrapper;
        private birdOriginalPosition2: PIXI.Point;
        private flying_birds3: MovieClipWrapper;
        private birdOriginalPosition3: PIXI.Point;
        private soundON: boolean;
        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected updateComponentData() {
            super.updateComponentData();

            if (ResponseResult.current.isBrokenGameSate()) {
                Events.coreEvents.emit(SoundManager.EVENT_SET_MUTE, true);
            }
            if(Environment.isDesktop() ){
                this.flying_birds = <MovieClipWrapper>this._layout.getComponent("bird");
                this.birdOriginalPosition1 = new PIXI.Point(this.flying_birds.position.x, this.flying_birds.position.y);
                this.flying_birds2 = <MovieClipWrapper>this._layout.getComponent("bird2");
                this.birdOriginalPosition2 = new PIXI.Point(this.flying_birds2.position.x, this.flying_birds2.position.y);
                this.flying_birds3 = <MovieClipWrapper>this._layout.getComponent("bird3");
                this.birdOriginalPosition3 = new PIXI.Point(this.flying_birds3.position.x, this.flying_birds3.position.y);
            }
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
                }
            }

        }

    //     protected updateComponentData() {
    //         super.updateComponentData();
    //         if (!Environment.isMobile()) {
    //             this.BGAnimation();
	// 	        this.addBirdAnimation();
    //         }
    //     }
	// protected BGAnimation(): void {
    //         var bg_add_mode = this._layout.getComponent("free_spins_bg_glow");
    //         DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
    //         DO.Core.Time.juggler.setTimeout(function () {
    //             DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,1);
    //             DO.Core.Time.juggler.setTimeout(function () {
    //                 this.BGAnimation();
    //             }.bind(this),5000);
    //         }.bind(this),5000);
    //     }
	//
	// private addBirdAnimation():void {
    //         let bird = this._layout.getComponent("bird");
    //         let originalPosition: PIXI.Point = new PIXI.Point(bird.position.x, bird.position.y);
    //
    //         let time = new TimelineLite({onComplete:function() {
    //                 this.restart(true);
    //             }});
    //
    //         DO.Core.Time.juggler.setTimeout(function() {
    //             time.add( TweenLite.to( bird.scale, -10, { x: 1, y: 1, ease: Linear.easeNone, } ) );
    //             time.add( [
    //                 TweenLite.to(bird.position, 9, { x: 200, y: 150, ease: Linear.easeNone }),
    //
    //                 TweenLite.to( bird.scale, 9, {
    //                     x: 1, y: 1, ease: Linear.easeNone, onComplete: function ()
    //                     {
    //                         bird.position.x = originalPosition.x;
    //                         bird.position.y = originalPosition.y;
    //                         // bird.rotation = -0.3;
    //                     }
    //                 } ),
    //             ] );
    //         },1000);
    //     }
        
    }
}