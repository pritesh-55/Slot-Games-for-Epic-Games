module DO.RendererScenes.Game {
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;
    import BonusOption = DO.Core.Renderer.UI.BonusOption;
    import Floating = DO.Core.Renderer.FX.Floating;

    export class GameBonusScene extends BonusScene {

        private anims:Floating[] = [];

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected playAnimationAfterPick(isWin: boolean, callback:any) {
            let transition = <MovieClipWrapper>this._layout.getComponent("meter_splash");
            transition.visible = true;
            transition.clip.loop = false;
            transition.clip.gotoAndPlay(0);
            transition.clip.onComplete = () =>{
                transition.visible = false;
                this.anims && this.anims[this.lastPickId] && this.anims[this.lastPickId].updateState(false);
            };
        }

        protected onCreate(): void {
            super.onCreate();
            this.anims = [];
            for (let id = 1; id <= this._layout.getLayoutParams().totalPickOptions; id++) {
                const pickOption:BonusOption = <BonusOption>this._layout.getComponent("pick_option_" + id);
                this.anims.push(new Floating(pickOption,true, 11, 15, 11, 15, 0, 0.5 , 0, 2, 0, 0.05));
            }
        }

        protected onDestroy(): void {
            super.onDestroy();
            for (let id = 0; id < this._layout.getLayoutParams().totalPickOptions; id++) {
                this.anims[id] && this.anims[id].updateState(false);
            }
            this.anims = [];
        }

    }

}
