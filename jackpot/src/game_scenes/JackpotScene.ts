module DO.RendererScenes.Game {

    import Scene = DO.Core.Renderer.Scene;
    import SoundManager = DO.Core.SoundManager;
    import Environment = DO.Core.Environment;
    import Currency = DO.Common.Currency;
    import StandardText = DO.Core.Renderer.UI.StandardText;

    export class JackpotScene extends Scene {

        private _mainMovieLayer: PIXI.Container;
        private grandMeter: StandardText;
        private majorMeter: StandardText;
        private miniMeter: StandardText;
        private minorMeter: StandardText;
        private prevJackpotValues:any;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onCreate(): void {
            super.onCreate();

            if (Environment.isDesktop()) {
                SoundManager.globalSounds.stopMusic();
            }

            this._mainMovieLayer = new PIXI.Container();
            this.addChild(this._mainMovieLayer);

            this._layout.triggerFX("scene_start");
            this.visible = false;

            this.grandMeter = <StandardText> this._layout.getComponent("diamond_meter_value");
            this.majorMeter = <StandardText> this._layout.getComponent("gold_meter_value");
            this.minorMeter = <StandardText> this._layout.getComponent("silver_meter_value");
            this.miniMeter = <StandardText> this._layout.getComponent("bronze_meter_value");
            this.prevJackpotValues = {
                "grand": 0.00,
                "major": 0.00,
                "minor": 0.00,
                "mini": 0.00
            };
            this.grandMeter.setText("");
            this.majorMeter.setText("");
            this.minorMeter.setText("");
            this.miniMeter.setText("");

            window.addEventListener('handleJackpotMessage', this.handleJackpotMessage.bind(this), false);

            setTimeout(() => {
                this.onResize();
                this.visible = true;
                this.jackpotMeterUpdate(this.prevJackpotValues);
            }, 100);
        }

        protected onDestroy(){
            super.onDestroy();
            window.removeEventListener("update_jackpot_values");
            window.removeEventListener("show_jackpot_win");

        }

        private handleJackpotMessage(event: any) {
            if (!event || !event.detail) {
                return false;
            }

            try {
                const data = JSON.parse(event.detail);
                switch (data.type) {
                    case "update_jackpot_values":
                        this.jackpotMeterUpdate(data.jackpot);
                        break;
                    case "show_jackpot_win":
                        this.showJackpotWin(data.jackpot);
                        break;
                }
            } catch (e) {
                return false;
            }
        }

        protected jackpotMeterUpdate(jackpotValue: any):void {

            let grandRollup: any = {win: this.prevJackpotValues.grand};
            let majorRollup: any = {win: this.prevJackpotValues.major};
            let minorRollup: any = {win: this.prevJackpotValues.minor};
            let miniRollup: any = {win: this.prevJackpotValues.mini};

            TweenLite.to(grandRollup, 0.5,
                {
                    win: jackpotValue.grand,
                    ease: Cubic.easeOut,
                    onUpdate: () => {
                        this.grandMeter.setText(Currency.format(grandRollup.win));
                    },
                    onComplete: () => {
                        this.grandMeter.setText(Currency.format(jackpotValue.grand));
                    }
                });

            TweenLite.to(majorRollup, 0.5,
                {
                    win: jackpotValue.major,
                    ease: Cubic.easeOut,
                    onUpdate: () => {
                        this.majorMeter.setText(Currency.format(majorRollup.win));
                    },
                    onComplete: () => {
                        this.majorMeter.setText(Currency.format(jackpotValue.major));
                    }
                });

            TweenLite.to(minorRollup, 0.5,
                {
                    win: jackpotValue.minor,
                    ease: Cubic.easeOut,
                    onUpdate: () => {
                        this.minorMeter.setText(Currency.format(minorRollup.win));
                    },
                    onComplete: () => {
                        this.minorMeter.setText(Currency.format(jackpotValue.minor));
                    }
                });

            TweenLite.to(miniRollup, 0.5,
                {
                    win: jackpotValue.mini,
                    ease: Cubic.easeOut,
                    onUpdate: () => {
                        this.miniMeter.setText(Currency.format(miniRollup.win));
                    },
                    onComplete: () => {
                        this.miniMeter.setText(Currency.format(jackpotValue.mini));
                    }
                });

            this.prevJackpotValues = jackpotValue;
        }

        private showJackpotWin(jackpotData: any){

        }
    }
}