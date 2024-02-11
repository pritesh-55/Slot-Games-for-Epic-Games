module DO {
    import Environment = DO.Core.Environment;

    export function getConfig(): any {
        return {

            profile: {
                BASE: {
                    id: "BASE",
                    paytable: {
                        WW: {
                            name: "Wild",
                            oak: {
                                x3: {
                                    multiplier: 0
                                },
                                x4: {
                                    multiplier: 0
                                },
                                x5: {
                                    multiplier: 0
                                }
                            }
                        },
                        AA: {
                            name: "High-1",
                            oak: {
                                x3: {
                                    multiplier: 50
                                },
                                x4: {
                                    multiplier: 200
                                },
                                x5: {
                                    multiplier: 300
                                }
                            }
                        },
                        BB: {
                            name: "High-2",
                            oak: {
                                x3: {
                                    multiplier: 25
                                },
                                x4: {
                                    multiplier: 100
                                },
                                x5: {
                                    multiplier: 250
                                }
                            }
                        },
                        CC: {
                            name: "High-3",
                            oak: {
                                x3: {
                                    multiplier: 20
                                },
                                x4: {
                                    multiplier: 75
                                },
                                x5: {
                                    multiplier: 200
                                }
                            }
                        },
                        DD: {
                            name: "Medium-1",
                            oak: {
                                x3: {
                                    multiplier: 15
                                },
                                x4: {
                                    multiplier: 50
                                },
                                x5: {
                                    multiplier: 150
                                }
                            }
                        },
                        EE: {
                            name: "Medium-2",
                            oak: {
                                x3: {
                                    multiplier: 10
                                },
                                x4: {
                                    multiplier: 35
                                },
                                x5: {
                                    multiplier: 100
                                }
                            }
                        },
                        FF: {
                            name: "Medium-3",
                            oak: {
                                x3: {
                                    multiplier: 10
                                },
                                x4: {
                                    multiplier: 25
                                },
                                x5: {
                                    multiplier: 75
                                }
                            }
                        },
                        GG: {
                            name: "Ace",
                            oak: {
                                x3: {
                                    multiplier: 7
                                },
                                x4: {
                                    multiplier: 20
                                },
                                x5: {
                                    multiplier: 50
                                }
                            }
                        },
                        HH: {
                            name: "King",
                            oak: {
                                x3: {
                                    multiplier: 7
                                },
                                x4: {
                                    multiplier: 20
                                },
                                x5: {
                                    multiplier: 50
                                }
                            }
                        },
                        II: {
                            name: "Queen",
                            oak: {
                                x3: {
                                    multiplier: 5
                                },
                                x4: {
                                    multiplier: 15
                                },
                                x5: {
                                    multiplier: 30
                                }
                            }
                        },
                        JJ: {
                            name: "Jeck",
                            oak: {
                                x3: {
                                    multiplier: 5
                                },
                                x4: {
                                    multiplier: 15
                                },
                                x5: {
                                    multiplier: 30
                                }
                            }
                        },
                        SC: {
                            name: "SCATTER",
                            oak: {
                                x3: {
                                    "multiplier": 1
                                },
                                x4: {
                                    "multiplier": 2
                                },
                                x5: {
                                    "multiplier": 5
                                }
                            }
                        }
                    },
                    shawPayline: false,
                    paylines: [
                        [0, 0, 0, 0, 0],
                        [1, 1, 1, 1, 1],
                        [2, 2, 2, 2, 2],
                        [0, 0, 1, 2, 0],
                        [1, 1, 0, 0, 0],
                        [1, 1, 2, 2, 2],
                        [2, 2, 2, 1, 0],
                        [0, 1, 1, 1, 1],
                        [2, 1, 1, 1, 1],
                        [2, 2, 1, 1, 1],
                        [0, 0, 1, 1, 1],
                        [0, 1, 2, 1, 0],
                        [2, 1, 0, 1, 2],
                        [1, 1, 1, 0, 1],
                        [1, 1, 1, 2, 2],
                        [0, 2, 0, 2, 0],
                        [2, 0, 2, 0, 2],
                        [1, 2, 0, 2, 0],
                        [1, 0, 2, 0, 2],
                        [1, 0, 1, 0, 1]
                    ],
                    symbolMask: {
                        "x": 60,
                        "y": 55,
                        "w": 120,
                        "h": 110,
                        "color": 0x091114,
                        "alpha": 1
                    }
                },
                FREE_SPINS: {
                    id: "FREE_SPINS",
                    paytable: {
                        WW: {
                            name: "Wild",
                            oak: {
                                x3: {
                                    multiplier: 0
                                },
                                x4: {
                                    multiplier: 0
                                },
                                x5: {
                                    multiplier: 0
                                }
                            }
                        },
                        AA: {
                            name: "High-1",
                            oak: {
                                x3: {
                                    multiplier: 50
                                },
                                x4: {
                                    multiplier: 200
                                },
                                x5: {
                                    multiplier: 300
                                }
                            }
                        },
                        BB: {
                            name: "High-2",
                            oak: {
                                x3: {
                                    multiplier: 25
                                },
                                x4: {
                                    multiplier: 100
                                },
                                x5: {
                                    multiplier: 250
                                }
                            }
                        },
                        CC: {
                            name: "High-3",
                            oak: {
                                x3: {
                                    multiplier: 20
                                },
                                x4: {
                                    multiplier: 75
                                },
                                x5: {
                                    multiplier: 200
                                }
                            }
                        },
                        DD: {
                            name: "Medium-1",
                            oak: {
                                x3: {
                                    multiplier: 15
                                },
                                x4: {
                                    multiplier: 50
                                },
                                x5: {
                                    multiplier: 150
                                }
                            }
                        },
                        EE: {
                            name: "Medium-2",
                            oak: {
                                x3: {
                                    multiplier: 10
                                },
                                x4: {
                                    multiplier: 35
                                },
                                x5: {
                                    multiplier: 100
                                }
                            }
                        },
                        FF: {
                            name: "Medium-3",
                            oak: {
                                x3: {
                                    multiplier: 10
                                },
                                x4: {
                                    multiplier: 25
                                },
                                x5: {
                                    multiplier: 75
                                }
                            }
                        },
                        GG: {
                            name: "Ace",
                            oak: {
                                x3: {
                                    multiplier: 7
                                },
                                x4: {
                                    multiplier: 20
                                },
                                x5: {
                                    multiplier: 50
                                }
                            }
                        },
                        HH: {
                            name: "King",
                            oak: {
                                x3: {
                                    multiplier: 7
                                },
                                x4: {
                                    multiplier: 20
                                },
                                x5: {
                                    multiplier: 50
                                }
                            }
                        },
                        II: {
                            name: "Queen",
                            oak: {
                                x3: {
                                    multiplier: 5
                                },
                                x4: {
                                    multiplier: 15
                                },
                                x5: {
                                    multiplier: 30
                                }
                            }
                        },
                        JJ: {
                            name: "Jeck",
                            oak: {
                                x3: {
                                    multiplier: 5
                                },
                                x4: {
                                    multiplier: 15
                                },
                                x5: {
                                    multiplier: 30
                                }
                            }
                        },

                        SC: {
                            name: "SCATTER",
                            oak: {
                                x3: {
                                    "multiplier": 1
                                },
                                x4: {
                                    "multiplier": 2
                                },
                                x5: {
                                    "multiplier": 5
                                }
                            }
                        }
                    },
                    shawPayline: false,
                    paylines: [
                        [1, 1, 1, 1, 1],
                        [0, 0, 0, 0, 0],
                        [2, 2, 2, 2, 2],
                        [0, 1, 2, 1, 0],
                        [2, 1, 0, 1, 2],
                        [1, 0, 0, 0, 1],
                        [1, 2, 2, 2, 1],
                        [0, 0, 1, 2, 2],
                        [2, 2, 1, 0, 0],
                        [1, 2, 1, 0, 1],
                        [1, 0, 1, 2, 1],
                        [0, 1, 1, 1, 0],
                        [2, 1, 1, 1, 2],
                        [0, 1, 0, 1, 0],
                        [2, 1, 2, 1, 2],
                        [1, 1, 0, 1, 1],
                        [1, 1, 2, 1, 1],
                        [0, 0, 2, 0, 0],
                        [2, 2, 0, 2, 2],
                        [0, 2, 2, 2, 0],
                        [2, 0, 0, 0, 2],
                        [1, 2, 0, 2, 1],
                        [1, 0, 2, 0, 1],
                        [0, 2, 0, 2, 0],
                        [2, 0, 2, 0, 2]
                    ],
                    symbolMask: {
                        "x": 60,
                        "y": 55,
                        "w": 120,
                        "h": 110,
                        "color": 0x091114,
                        "alpha": 1
                    }
                }
            },

            server: {
                isSocket: false,
                url: Environment.launchVariables.serverUrl,
                history_url: Environment.launchVariables.historyUrl,
                class: "DO.Common.Server.Vortex.VortexConnection"
            },

            assets_manifests: [
                "./assets/renderer/splash/manifest.json",
                "./assets/renderer/base/manifest.json",
                "./assets/renderer/celebration/manifest.json",
                "./assets/renderer/free_spins/manifest.json"
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
                    id: "loader",
                    html: "./assets/html/loader.html",
                    module: "DO.HTMLPageClasses.Loader",
                    variants_css: {
                        default: "./assets/html/loader-default.css",
                        mobile: {
                            landscape: "./assets/html/loader-mobile-landscape.css",
                            portrait: "./assets/html/loader-mobile-portrait.css",
                        }
                    }
                },
                {
                    id: "error",
                    html: "../common/assets/ui_6/html/error.html",
                    module: "DO.HTMLPageClasses.Error",
                    variants_css: {
                        default: "../common/assets/ui_6/html/error-default.css",
                        mobile: {
                            landscape: null,
                            portrait: null
                        }
                    }
                },
                {
                    id: "dialog",
                    html: "../common/assets/ui_6/html/dialog.html",
                    module: "DO.HTMLPageClasses.Dialog",
                    variants_css: {
                        default: "../common/assets/ui_6/html/dialog-default.css",
                        mobile: {
                            landscape: null,
                            portrait: null
                        }
                    }
                },
                {
                    id: "main",
                    html: "../common/assets/ui_6/html/main.html",
                    module: "DO.HTMLPageClasses.Main",
                    variants_css: {
                        default: "../common/assets/ui_6/html/main-default.css",
                        mobile: {
                            landscape: "../common/assets/ui_6/html/main-mobile-landscape.css",
                            portrait: "../common/assets/ui_6/html/main-mobile-portrait.css"
                        }
                    }
                },
                {
                    id: "settings",
                    html: {
                        desktop: "./assets/html/settings-desktop.html",
                        mobile: "./assets/html/settings-mobile.html"
                    },
                    module: "DO.Slots.SettingsPages.Settings",
                    variants_css: {
                        default: "./assets/html/settings-default.css",
                        desktop: "./assets/html/settings-desktop.css",
                        mobile: {
                            landscape: "./assets/html/settings-mobile-landscape.css",
                            portrait: "./assets/html/settings-mobile-portrait.css"
                        }
                    }
                },
                {
                    id: "panel",
                    html: {
                        desktop: "../common/assets/ui_6/html/panel-desktop.html",
                        mobile: "../common/assets/ui_6/html/panel-mobile.html"
                    },
                    module: "DO.Slots.ControlPanel.ControlPanel",
                    variants_css: {
                        default: "../common/assets/ui_6/html/panel-default.css",
                        desktop: "../common/assets/ui_6/html/panel-desktop.css",
                        mobile: {
                            landscape: "../common/assets/ui_6/html/panel-mobile-landscape.css",
                            portrait: "../common/assets/ui_6/html/panel-mobile-portrait.css"
                        }
                    }
                },
                {
                    id: "game_over",
                    html: "../common/assets/ui_6/html/game-over.html",
                    module: "DO.HTMLPageClasses.GameOver",
                    variants_css: {
                        default: "../common/assets/ui_6/html/game-over.css",
                        mobile: {
                            landscape: null,
                            portrait: null
                        }
                    }
                }
            ],

            scenes: {
                SPLASH: {
                    layout_id: "layout_splash",
                    module: "DO.RendererScenes.SplashScene",
                    asset_manifest: "./assets/renderer/splash/manifest.json"
                },
                BASE: {
                    layout_id: "layout_base",
                    module: "DO.RendererScenes.Game.GameBaseScene",
                    asset_manifest: "./assets/renderer/base/manifest.json"
                },
                FREE_SPINS_INTRO: {
                    layout_id: "layout_free_spins_intro",
                    module: "DO.RendererScenes.FeatureIntroScene",
                    asset_manifest: "./assets/renderer/base/manifest.json"
                },
                FREE_SPINS: {
                    layout_id: "layout_free_spins",
                    module: "DO.RendererScenes.Game.GameFreeSpinsScene",
                    asset_manifest: "./assets/renderer/free_spins/manifest.json"
                },
                FREE_SPINS_SUMMARY: {
                    layout_id: "layout_free_spins_summary",
                    module: "DO.RendererScenes.FeatureSummaryScene",
                    asset_manifest: "./assets/renderer/free_spins/manifest.json"
                },
				 JACKPOT: {
                    layout_id: "layout_jackpot",
                    module: "DO.RendererScenes.WheelBonusScene",
                    asset_manifest: "./assets/renderer/base/manifest.json"
                },
                TRANSITION:{
                    layout_id: "layout_feature_transition",
                    module: "DO.RendererScenes.FeatureTransitionScene",
                    asset_manifest: "./assets/renderer/base/manifest.json"
                },
                BIG_WIN: {
                    layout_id: "layout_big_win",
                    module: "DO.RendererScenes.CelebrationScene",
                    asset_manifest: "./assets/renderer/celebration/manifest.json"
                },
                MEGA_WIN: {
                    layout_id: "layout_mega_win",
                    module: "DO.RendererScenes.CelebrationScene",
                    asset_manifest: "./assets/renderer/celebration/manifest.json"
                },
                SUPER_WIN: {
                    layout_id: "layout_super_win",
                    module: "DO.RendererScenes.CelebrationScene",
                    asset_manifest: "./assets/renderer/celebration/manifest.json"
                }
            },
            playerMessages:["START_GAME", "",]
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
            "aspectRatio": "",
            "homeUrl": "",
            "useGrouping": true,
            "prefixCurrency": "$",
            "suffixCurrency": "",
            "currencyDecimalPlaces": 2,
            "ukgc": false,
            "slamStopAllowed": true,
            "showAutoplay": true,
            "allowedRealityCheck": false,
            "realityCheckSettingsAllowed": false,
            "smallWinCelebrationAllowed": false,
            "allowedQuickSpin": true,
            "spinDuration": 1000,
            "fixedBet": 50,
            "defaultBetIndex": 0,
            "music": "1",
            "sfx": "1",
            "mobileFPS": 30,
            "desktopFPS": 30,
            "betValues": [
                1,
                2,
                3,
                4,
                6,
                8,
                10,
                20,
                40,
                100
            ],
            "defaultAutoValue": 0,
            "autoValues": [
                5,
                25,
                50,
                75,
                100
            ],
            "splashTime": 5,
            "bigWinRange": 25,
            "megaWinRange": 50,
            "superWinRange": 100,
            "languages": [
                "en",
                "bg",
                "cs",
                "da",
                "de",
                "el",
                "es",
                "escl",
                "fi",
                "fr",
                "hu",
                "it",
                "ja",
                "no",
                "pl",
                "pt",
                "ro",
                "ru",
                "sk",
                "sv",
                "th",
                "tr",
                "vi",
                "zhhans",
                "zhhant",
                "nl"
            ],
            "symbolMapWithServer": {
                "AA": "AA",
                "BB": "BB",
                "CC": "CC",
                "DD": "DD",
                "EE": "EE",
                "FF": "FF",
                "GG": "GG",
                "HH": "HH",
                "II": "II",
                "JJ": "JJ",
                "WW": "WW",
                "SC": "SC"
            },
            "loadingBgImgURL": "url('./assets/html/images/settings/loading_bg_game_mode_type.jpg')",
            "portraitLoadingBgImgURL": "url('./assets/html/images/settings/portrait_loading_game_mode_type.jpg')",
            "baseGameBlurBGImgURL": "./assets/renderer/base/blur_bg.jpg",
            "portraitBaseBgImgURL": "url('./assets/renderer/base/mobile/static/base_game_portrait.jpg')",
            "freeSpinBlurBGImgURL": "./assets/renderer/free_spins/blur_fs.jpg",
            "portraitFreeSpinBgImgURL": "url('./assets/renderer/free_spins/mobile/static/free_spin_portrait.jpg')",
            "autoplayStartButton_enable": "url('../common/assets/ui_6/html/images/settings/buttonPanel/mobile/continue.png')",
            "autoplayStartButton_disable": "url('../common/assets/ui_6/html/images/settings/buttonPanel/mobile/continue_btn_disable.png')",
 	        "auto_Start_Button_Enable_Color": "#26941B  ",
            "auto_Start_Button_Shadow": "0 -1px 16px 0 #26941B, 0 6px 20px 0 #26941B",
            "totalPaytablePages": 5
        };
    }

}