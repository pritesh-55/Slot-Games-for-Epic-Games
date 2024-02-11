module DO.RendererScenes.Game {

    import ResponseResult = DO.Common.Server.ResponseResult;
    import Environment = DO.Core.Environment;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;

    export class GameFreeSpinsScene extends FreeSpinsScene {

        // private modeIndex = 0;
        // private modeType = 0;
        // private bg_add_mode: MovieClipWrapper;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }
        protected onResultsReady():void {
            super.onResultsReady();
            if(this._layout.getComponent("multiplier_count") && ResponseResult.current.getMultiplier()){
                this._layout.setComponentText("multiplier_count",  +ResponseResult.current.getMultiplier()+"X");
            }
        }

        protected updateComponentData() {
            super.updateComponentData();

            if(Environment.isDesktop() ){
               // this.bg_add_mode = <MovieClipWrapper>this._layout.getComponent("glow_add_mode");
                this.BGAnimation();
            }
        }

        protected BGAnimation(): void {
            var bg_add_mode1 = this._layout.getComponent("glow_add_mode");
            DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode1,0,1);
            DO.Core.Time.juggler.setTimeout(function () {
                DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode1,0,1);
                DO.Core.Time.juggler.setTimeout(function () {
                    this.BGAnimation();
                }.bind(this),600);
            }.bind(this),600);
        }

    }
}

// protected playSceneAnimation() {
//     let glow = <MovieClipWrapper>this._layout.getComponent("glow_add_mode");
//     glow.visible = true;
//     glow.clip.loop = false;
//     glow.clip.gotoAndPlay(0);
//     glow.clip.onComplete = () =>{
//         glow.visible = false;
//     };
// }



// protected playSceneAnimation(): void {
//     super.playSceneAnimation();
//     if(Environment.isDesktop() ){
//         this.bg_add_mode.visible=true;
//         this.modeIndex++;
//         if(this.modeIndex == 4){
//             this.modeIndex = 0;
//
//             if(this.modeType == 0){
//                 this.modeType++;
//                 DO.Core.Renderer.UI.FX.fadeOut(this.bg_add_mode,-5,2);
//             } else {
//                 this.modeType = 0;
//                 DO.Core.Renderer.UI.FX.fadeIn(this.bg_add_mode,-5,2);
//             }
//             this.bg_add_mode.visible=false;
//         }
//     }
// }