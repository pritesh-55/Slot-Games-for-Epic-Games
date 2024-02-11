module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    import Reel = DO.Slots.Reel;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;


    export class GameBaseScene extends BaseScene {
        private modeIndex = 0;
        private modeType = 0;
        private flying_birds: MovieClipWrapper;
        private birdOriginalPosition1: PIXI.Point;
        // private cloud: MovieClipWrapper;
        // private cloudPosition1: PIXI.Point;
        private soundON: boolean;
        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);


        }
        protected addForce(){
            $("#force_select").remove();
            $("body").append('<select style="z-index: 1000000; color:black; position:fixed; top:21px;" class="cheat_style">'+ '<option class="inputBlock"><input id="myText" style="position: fixed;z-index: 1000000">' + '<div class="button" id="addCheat" style="position: fixed;z-index: 1000000;color: yellowgreen;top: -5px;left: 174px;width: 25px;height: 35px;text-align: center;line-height: 35px;-webkit-user-select: none;-moz-user-select: none;user-select: none;cursor: pointer;">▶</div>' + '</option>'+ '</select>');
            $("body").append('<select style="z-index: 1000000; color:black; position:absolute;top:21px;" id="force_select" class="cheat_style">'+
                '<option value="none">---------  Apply cheat  --------</option>'+
                '<option value="21,21,21,21,21">002. Free Game</option>' +
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

            if(Environment.isDesktop()){
                this.startRotation();
                this.cloudAnimation();
                this.birdAnimation();
                // this.flying_birds = <MovieClipWrapper>this._layout.getComponent("flying_birds");
                // this.birdOriginalPosition1 = new PIXI.Point(this.flying_birds.position.x, this.flying_birds.position.y);
                // this.cloud = <MovieClipWrapper>this._layout.getComponent("clouds");
                // this.cloudPosition1 = new PIXI.Point(this.cloud.position.x, this.cloud.position.y);
            }
        }

        protected playSceneAnimation(): void {
            super.playSceneAnimation();
            if(Environment.isDesktop() ){
                this.modeIndex++;
                if(this.modeIndex == 4){
                    this.modeIndex = 0;
                    let bg_add_mode = <DO.Core.Renderer.UI.MovieClipWrapper>this._layout.getComponent("bg_front_add_mode");
                    if(this.modeType == 0){
                        this.modeType++;
                        DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
                    } else {
                        this.modeType = 0;
                        DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,2);
                    }
                }
                else if(this.modeIndex == 2){
                    // this.flying_birds.visible=true;
                    // // this.flying_birds.rotation = -0.1;
                    // TweenLite.to(this.flying_birds.position, 25, { x: 2000, y: this.birdOriginalPosition1.y, ease: Linear.easeNone }),
                    //     TweenLite.to( this.flying_birds.scale, 20, {
                    //         x: 1, y: 1, ease: Linear.easeNone, onComplete: ()=> {
                    //             this.flying_birds.position.x = this.birdOriginalPosition1.x;
                    //             // this.flying_birds.rotation = 0;
                    //             this.flying_birds.visible=false;
                    //         }
                    //     } )
                }
            }

        }

        protected startRotation() {
            const blade = this._layout.getComponent("rotor_blade");
            // TweenMax.to(blade, 30, { rotation: '+=8', ease: Power1.easeInOut, repeat:-1 });
            TweenMax.to(blade, 900,{
                rotation: '+=360',
                ease: Linear.easeNone,
                repeat: -1,
                duration: 900,
                transformOrigin: 'center center',
            });
        }

        private cloudAnimation():void {
                let bird = this._layout.getComponent("clouds");
                let originalPosition: PIXI.Point = new PIXI.Point(bird.position.x, bird.position.y);
                let time = new TimelineLite({onComplete:function() { this.restart(true);} });
                DO.Core.Time.juggler.setTimeout(function() {
                    time.add( TweenLite.to( bird.scale, 10, { x: 1, y: 1, ease: Linear.easeNone, } ) );
                    time.add( [
                        TweenLite.to(bird.position, 80, { x: 3000, y: originalPosition.y, ease: Linear.easeNone }),
                        TweenLite.to( bird.scale, 80, {
                            x: 1, y: 1, ease: Linear.easeNone, onComplete: function ()
                            {
                                bird.position.x = originalPosition.x;
                                bird.position.y = originalPosition.y;
                            }
                        } ),
                    ] );
                },4000);
        }

        private birdAnimation():void {
            let bird = this._layout.getComponent("flying_birds");
            let originalPosition: PIXI.Point = new PIXI.Point(bird.position.x, bird.position.y);
            let time = new TimelineLite({onComplete:function() { this.restart(true);} });
            DO.Core.Time.juggler.setTimeout(function() {
                time.add( TweenLite.to( bird.scale, 10, { x: 1, y: 1, ease: Linear.easeNone, } ) );
                time.add( [
                    TweenLite.to(bird.position, 65, { x: 2000, y: originalPosition.y, ease: Linear.easeNone }),
                    TweenLite.to( bird.scale, 65, {
                        x: 1, y: 1, ease: Linear.easeNone, onComplete: function ()
                        {
                            bird.position.x = originalPosition.x;
                            bird.position.y = originalPosition.y;
                        }
                    } ),
                ] );
            },6000);
        }

        // protected onSpinStart(): void {
        //     super.onSpinStart();
        //     this._layout.getComponent("basegame_reel_spin").visible = true;
        // }

        // protected onReelDropped(reel: Reel, wasInterrupt: boolean): void {
        //     super.onReelDropped(reel, wasInterrupt);
        //     this._layout.getComponent("basegame_reel_spin").visible = false;
        // }
        
        // protected addBGAnimation(): void {
        //     const bg_add_mode = this._layout.getComponent("bg_add_mode");
        //     DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
        //     DO.Core.Time.juggler.setTimeout(() =>{
        //         DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,2);
        //         DO.Core.Time.juggler.setTimeout(() =>{
        //             this.addBGAnimation();
        //         },5000);
        //     },5000);
        // }

        // let flying_birds = this._layout.getComponent("flying_birds");
        // let originalPosition1: PIXI.Point = new PIXI.Point(flying_birds.position.x,flying_birds.position.y);
        // let tl = new TimelineLite({onComplete:function() {
        //         this.restart(true);
        //     }});
        // DO.Core.Time.juggler.setTimeout(function(){
        //     tl.to(flying_birds.position, 10, {x:-25,y:flying_birds.position.y,ease: Linear.easeNone,onComplete : function () {
        //             flying_birds.position = originalPosition1;
        //         }})},1000);
    }
}