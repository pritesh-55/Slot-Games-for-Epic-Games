module DO.RendererScenes.Game {

    import Environment = DO.Core.Environment;

    export class GameFreeSpinsScene extends FreeSpinsScene {

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
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
                // this.bg_add_mode = <MovieClipWrapper>this._layout.getComponent("glow_add_mode");
                this.BGAnimation();
            }
        }

        protected BGAnimation(): void {
            var bg_add_mode1 = this._layout.getComponent("moon_with_star_add_mode");
            DO.Core.Renderer.UI.FX.fadeOut(bg_add_mode1,0,1);
            DO.Core.Time.juggler.setTimeout(function () {
                DO.Core.Renderer.UI.FX.fadeIn(bg_add_mode1,0,1);
                DO.Core.Time.juggler.setTimeout(function () {
                    this.BGAnimation();
                }.bind(this),4000);
            }.bind(this),4000);
        }


    }
}