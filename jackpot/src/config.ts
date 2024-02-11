module DO {
    import Environment = DO.Core.Environment;

    export function getConfig(): any {
        return {
            server: {
                isSocket: false,
                url: Environment.launchVariables.serverUrl,
                history_url: Environment.launchVariables.historyUrl,
                class: "DO.Common.Server.Vortex.VortexConnection"
            },

            assets_manifests: [
                "./assets/renderer/jackpot/manifest.json"
            ],

            fonts: [
                "Saddlebag",
                "Roboto-Bold",
                "immortal",
                "Berlin-Sans-FB-Demi-Bold",
                "Arial-Rounded-MT-Regular"
            ],

            html_pages: [
                {
                    id: "main",
                    html: "../common/assets/ui_2/html/main.html",
                    module: "DO.HTMLPageClasses.Main",
                    variants_css: {
                        default: "../common/assets/ui_2/html/main-default.css",
                        mobile: {
                            landscape: "../common/assets/ui_2/html/main-mobile-landscape.css",
                            portrait: "../common/assets/ui_2/html/main-mobile-portrait.css"
                        }
                    }
                },
                {
                    id: "game_over",
                    html: "../common/assets/ui_2/html/game-over.html",
                    module: "DO.HTMLPageClasses.GameOver",
                    variants_css: {
                        default: "../common/assets/ui_2/html/game-over.css",
                        mobile: {
                            landscape: null,
                            portrait: null
                        }
                    }
                }
            ],

            scenes: {
                BASE: {
                    layout_id: "layout_jackpot",
                    module: "DO.RendererScenes.Game.JackpotScene",
                    asset_manifest: "./assets/renderer/jackpot/manifest.json"
                }
            }
        }
    }

    export function getDefaultSettings(): any {
        return {
            "width": 1920,
            "height": 1080,
            "gameId": 1,
            "gameCode": "",
            "serverUrl": "",
            "language": "en",
            "platformId": 1,
            "operatorCode": "epic",
            "brandCode": "epic",
            "currency": "USD",
            "useGrouping": true,
            "prefixCurrency": "$",
            "suffixCurrency": "",
            "currencyDecimalPlaces": 2,
            "music": "1",
            "sfx": "1",
            "mobileFPS": 30,
            "desktopFPS": 30,
            "languages": [
                "en"
            ],
            "jackpotValues":{
                "grand": 1000.00,
                "major": 500.00,
                "minor": 200.00,
                "mini": 100.00
            }
        };
    }
}