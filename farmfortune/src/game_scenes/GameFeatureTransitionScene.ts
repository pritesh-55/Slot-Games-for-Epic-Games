module DO.RendererScenes.Game {
    import ResponseResult = DO.Common.Server.ResponseResult;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;
    export class GameFeatureTransitionScene extends FeatureTransitionScene {

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }
        protected updateComponentData(){
            if (ResponseResult.current.isBrokenGameSate()) {
                Events.coreEvents.emit(SoundManager.EVENT_SET_MUTE, true);
            }
            DO.Core.Time.juggler.setTimeout(function () {
                DO.Core.Renderer.SceneManager.closeOverlay();
                this.onFinish &&  this.onFinish();
            }.bind(this), 1000);
        }
    }
}