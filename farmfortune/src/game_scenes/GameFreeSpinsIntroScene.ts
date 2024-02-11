module DO.RendererScenes.Game {

    import ResponseResult = DO.Common.Server.ResponseResult;
    import SoundManager = DO.Core.SoundManager;
    import Events = DO.Core.Events;

    export class GameFreeSpinsIntroScene extends FeatureIntroScene {

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected updateComponentData(){
            super.updateComponentData();

            if (ResponseResult.current.isBrokenGameSate()) {
                Events.coreEvents.emit(SoundManager.EVENT_SET_MUTE, true);
            }
            if(this._layout.getComponent("awarded_multiplier") && ResponseResult.current.getMultiplier()){
                this._layout.setComponentText("awarded_multiplier", "WITH x" +ResponseResult.current.getMultiplier() +" MULTIPLIER");
            }
        }
    }
}