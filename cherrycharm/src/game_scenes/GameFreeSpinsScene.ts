module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;
    import ApplicationBase = DO.Common.ApplicationBase;
    import GameEvents = DO.Common.GameEvents;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;
    export class GameFreeSpinsScene extends FreeSpinsScene {

        private modeIndex = 0;
        private modeType = 0;
        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected updateComponentData() {
            super.updateComponentData();
            if (ResponseResult.current.isBrokenGameSate()) {
                Events.coreEvents.emit(SoundManager.EVENT_SET_MUTE, true);
            }
        }

        protected playSceneAnimation(): void {
            super.playSceneAnimation();
            if(Environment.isDesktop() ){
                this.modeIndex++;
                if(this.modeIndex == 4){
                    this.modeIndex = 0;
                    let bg_add_mode = <DO.Core.Renderer.UI.Image>this._layout.getComponent("free_spins_bg_glow");
                    if(this.modeType == 0){
                        this.modeType++;
                        DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode,0,2);
                    } else {
                        this.modeType = 0;
                        DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode,0,2);
                    }
                }
            }

        }
        
    }
}