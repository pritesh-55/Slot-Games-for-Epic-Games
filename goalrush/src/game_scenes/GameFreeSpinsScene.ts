module DO.RendererScenes.Game {
    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    export class GameFreeSpinsScene extends FreeSpinsScene {

        private modeIndex = 0;
        private modeType = 0;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected addForce(){
            $("#force_select").remove();
            $("body").append('<select style="z-index: 1000000; color:black; position:fixed; top:21px;" class="cheat_style">'+ '<option class="inputBlock"><input id="myText" style="position: fixed;z-index: 1000000">' + '<div class="button" id="addCheat" style="position: fixed;z-index: 1000000;color: yellowgreen;top: -5px;left: 174px;width: 25px;height: 35px;text-align: center;line-height: 35px;-webkit-user-select: none;-moz-user-select: none;user-select: none;cursor: pointer;">▶</div>' + '</option>'+ '</select>');
            $("body").append('<select style="z-index: 1000000; color:black; position:absolute;top:21px;" id="force_select" class="cheat_style">'+
                '<option value="none">---------  Apply cheat  --------</option>'+
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

        protected updateComponentData() {
            super.updateComponentData();

            if(Environment.isDesktop() ){
                this.BGAnimation();
            }
        }

        protected BGAnimation(): void {
            var bg_add_mode1 = this._layout.getComponent("free_spins_bg_glow");
            DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode1,0,1);
            DO.Core.Time.juggler.setTimeout(function () {
                DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode1,0,1);
                DO.Core.Time.juggler.setTimeout(function () {
                    this.BGAnimation();
                }.bind(this),500);
            }.bind(this),500);
        }


        // protected playSceneAnimation(): void {
        //     super.playSceneAnimation();
        //     if(Environment.isDesktop() ){
        //         this.modeIndex++;
        //         if(this.modeIndex == 4){
        //             this.modeIndex = 0;
        //             // let bg_add_mode = <DO.Core.Renderer.UI.Image>this._layout.getComponent("free_spins_bg_glow");
        //             //
        //             // if(this.modeType == 0){
        //             //     this.modeType++;
        //             //     DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
        //             // } else {
        //             //     this.modeType = 0;
        //             //     DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,2);
        //             // }
        //         }
        //         if(this.modeIndex == 2){
        //             const fireworks1 = <DO.Core.Renderer.UI.MovieClipWrapper> this._layout.getComponent("fireworks");
        //             fireworks1.visible = true;
        //             fireworks1.clip.gotoAndPlay(0);
        //             fireworks1.clip.onComplete = () =>{
        //                 fireworks1.visible = false;
        //             }
        //         }
        //         else if(this.modeIndex == 3){
        //             const fireworks2 = <DO.Core.Renderer.UI.MovieClipWrapper> this._layout.getComponent("fireworks2");
        //             fireworks2.visible = true;
        //             fireworks2.clip.gotoAndPlay(0);
        //             fireworks2.clip.onComplete = () =>{
        //                 fireworks2.visible = false;
        //             }
        //         }
        //     }
        // }

    }
}