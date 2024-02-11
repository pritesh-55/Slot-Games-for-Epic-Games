module DO.Core.Utils {

    export function poll(func, callback, intervalMS?: number) {
    }

    export function debounce(func, wait, immediate?) {
    }

    export function shuffleArray(a: any[]): any[] {
        return null;
    }

    export class Queue {
        public wasSkipped: boolean = false;
        private _tasks: any = [];
        private _juggler: DO.Core.Time.Juggler;
        private _currentTask: any;
        private _onComplete;

        constructor(juggler?: DO.Core.Time.Juggler) {
        }

        public add(func: any, canSkip?: boolean): void {
        }

        public start(onComplete?) {
        }

        private nextTask(): void {
        }

        public skip(): void {

        }

        public skipToEnd() {
            this._onComplete();
        }
    }

    export function touchToSkip(callback): any {
        return null;
    }

    export function getReference(qualifiedName: string): any {
        return null;
    }

    export function getUrlVar(name: string) {
        return null;
    }

    export function getUrlVars(): any {
        return null;
    }

    export const convertToAmount = (value) => {
        return null;
    };


    export const formatTime = (value) => {
        return null;
    };

    const plural = (value: number, singular: string, plural: string) => null;

}

module DO.Core {
    import Utils = DO.Core.Utils;

    let _lostFocusTime: number = new Date().getTime();

    export function init(onComplete:Function) {
    }

    function initVisibilityAPI(): void {
        return null;
    }

    function addWindowEvents(): void{
        return null;
    }
}

declare let screenfull: any;

module DO.Core.Environment {

    export let EVENT_FULL_SCREEN: string = "env_full_screen";
    export let DEVICE_MOBILE: string = "mobile";
    export let DEVICE_DESKTOP: string = "desktop";
    export let ORIENTATION_LANDSCAPE: string = "landscape";
    export let ORIENTATION_PORTRAIT: string = "portrait";
    export let launchVariables: any;
    export let variant: string = "default";
    export let currentMode: string = "";
    export let updatedHeight: number = window.innerHeight;
    export let defaultSettings;
    export let gameConfig;

    export function init() {
    }

    function preventDoubleTab() {
        <any>document.addEventListener('touchstart', function (event: any) {
        })
    }

    export function getAspectRatio() {
        return null;
    }

    export function isFullScreenAvailable(): boolean {
        return null;
    }

    export function goFullScreen(): void {
        return null;
    }

    export function getPlatformData(): any {
        return null;
    }

    export function isLandscape(): boolean {
        return null;
    }

    export function isPortrait(): boolean {
        return null;
    }

    export function setVariant(variantsAllowed: string[], variantType: string): void {
        return null;
    }

    export function getOrientation(): string {
        return null;
    }

    export function isMobile(): boolean {
        return null;
    }

    export function isDesktop(): boolean {
        return null;
    }

    export function isDeviceMobile(): boolean {
        return null;
    }

    export function getDeviceType() {
        return null;
    }

    export function exit(): void {
        return null;
    }

    export function playVibrate(timeScale: number = 100): void {
        return null;
    }
}

module DO.Core.Time {
    let _animateableId: number = 0;
    let _listener: any;
    export let juggler: Juggler;

    export function init() {
    }

    function getNextAnimateableID(): string {
        return null;
    }

    export interface IAnimateable {
        onUpdate(deltaTime: number): void
    }

    export class Juggler {
        private _objects = {};
        public id: string;
        public _isActive: boolean =  true;
        public timeMultiplier: number = 1;
        public currentTime: number = 0;
        private _autoStart: boolean;
        private _preLoseFocusM: number;
        private _lastTime: number;
        private _tickBind;

        constructor(doAutoStart?: boolean) {
        }

        public start(): void {
            return null;
        }

        public stop(): void {
            return null;
        }

        public update(): void {
            return null;
        }

        public purge(): void {
            return null;
        }

        public add(object: IAnimateable): void {
            return null;
        }

        public remove(object: IAnimateable): void {
            return null;
        }

        public setInterval(onComplete, delay: number): DelayCall {
            return null;
        }

        public setTimeout(onComplete, delay: number): DelayCall {
            return null;
        }

        public clearTimeout(timeout: DelayCall): void {
            return null;
        }

        public delayCall(onTick, delay: number, repeatCount?: number, onComplete?: any): DelayCall {
            return null;
        }
    }

    export class DelayCall implements IAnimateable {
        private _delay: number;
        private _originalDelay;
        private _onTick;
        private _onComplete;
        private _juggler: Juggler;
        private _repeatCount: number;
        private iterations: number = 0;
        private _isPaused: boolean = false;

        constructor(onTick, delay: number, juggler: Juggler, repeatCount?: number, onComplete?: any) {
        }

        public pause(): void {
        }

        public resume(): void {
        }

        public start(): void {
        }

        public stop() {
        }

        public onUpdate(delta: number): void {
            return null;
        }
    }
}

module DO.Core.Events {
    export let ON_CREATE: string = "on_create";
    export let ON_DESTROY: string = "on_destroy";
    export let ON_SHOWN: string = "on_shown";
    export let ON_HIDDEN: string = "on_hidden";
    export let ON_INTERACTION: string = "on_touch";
    export let ON_TOGGLE_INTERACTION: string = "on_radio_touch";
    export let ON_APP_EXIT: string = "on_app_exit";
    export let ON_APP_LOSE_FOCUS: string = "on_app_lose_focus";
    export let ON_APP_GET_FOCUS: string = "on_app_get_focus";
    export let ON_APP_EXCEPTION: string = "on_app_exception";
    export let ON_APP_RESIZE: string = "on_app_resize";
    export let ON_APP_SCROLL: string = "on_app_scroll_start";
    export let ON_APP_SCROLL_END: string = "on_app_scroll_end";

    export let coreEvents: PIXI.utils.EventEmitter;

    export function init() {
        coreEvents = new PIXI.utils.EventEmitter();
    }

    export function getTouchEvent(): string {
        return null;
    }

    export function getOverEvent(): string {
        return null;
    }
    export function pressup(): string {
        return null;
    }

    export function getClickEvent(): string {
        return null;
    }

    export function getOutEvent(): string {
        return null;
    }
    export function createEmitter(): PIXI.utils.EventEmitter {
        return null;
    }
}

module DO.Core {
    import Texture = PIXI.Texture;

    export class AssetManager {
        public static ASSET_TYPE_IMAGE: string = "image";
        public static ASSET_TYPE_AUDIO: string = "sound";
        public static ASSET_TYPE_JSON: string = "json";
        public static ASSET_TYPE_ATLAS: string = "atlas";
        public static ASSET_TYPE_FONT: string = "font";
        public static ASSET_TYPE_MUL_ATLAS: string = "multi_atlas";
        public static ASSET_TYPE_SPINE_ATLAS: string = "spine_atlas";
        public static ASSET_TYPE_VIDEO: string = "video";

        public loadProgress: number = 0;
        public static antiCaching: boolean = true;
        private static _instances: any = {};
        private _PIXILoader: PIXI.Loader;
        private _movieClips: any = {};
        private _hasLoaded: boolean = false;
        private _soundManager: DO.Core.SoundManager;
        private preLoadNumber: number = 0;

        constructor() {
        }

        public purge(): void {
            return null;
        }

        public areAssetsAvailable(manifestId: string): boolean {
            return null;
        }

        public static get(manifestId: string): AssetManager {
            return null;
        }

        public isLoaded(): boolean {
            return null;
        }

        public getMovieClip(id: string, doCentre?: boolean, className?: string, disableCache?: boolean): PIXI.AnimatedSprite {
            return null;
        }

        public getSpineMovieClip(id:string,spineId:string, loop?:boolean,delay?:number):PIXI.spine.Spine {
            return null;
        }

        public getSoundManager(): SoundManager {
            return null;
        }

        public getPIXIAsset(id: string): any {
            return null;
        }

        public getPIXIAtlas(atlasId: string) {
            return null;
        }

        public getPIXISprite(spriteId: string, atlasId?: string): PIXI.Sprite {
            return null;
        }

        public getPIXITexture(textureId: string, atlasId?: string): PIXI.Texture {
            return null;
        }

        public load(manifest: any, onComplete: any, onProgress?: any) {
            return null;
        }

        private getAtlasFromRef(reference: string): any {
            return null;
        }
    }
}

module DO.Core.Lang {
    export let langCode: string;
    let _dictionary: any;

    export function loadDictionary(code: string, callback): void {
        return null;
    }

    export function setDictionary(code: string, phrases: any): void {
        return null;
    }

    export function getPhrase(code: string, replaceData?: any): string {
        return null;
    }

    export function scanDOM(): void {
        return null;
    }
}

module DO.Core.Maths {
    let _TO_DEG: number = 0.0174532925;
    let _TO_RAD: number = 57.29577950;

    export function getRandomRange(min, max, isInteger?): number {
        return null;
    }

    export function degToRad(d: number): number {
        return null;
    }

    export function roundToNearest(no: number, unit: number): number {
        return null;
    }

    export function roundUpToNearest(no: number, unit: number): number {
        return null;
    }

    export function roundDownToNearest(no: number, unit: number): number {
        return null;
    }

    export function Dacos(a: number): number {
        return null;
    }

    export function Dasin(a: number): number {
        return null;
    }

    export function Datan(a: number): number {
        return null;
    }

    export function Datan2(a: number, b: number): number {
        return null;
    }

    export function Dcos(a: number): number {
        return null;
    }

    export function Dsin(a: number): number {
        return null;
    }

    export function Dtan(a: number): number {
        return null;
    }

    export function calcAngle(x1: number, y1: number, x2: number, y2: number): number {
        return null;
    }

    export function calcDistance2(x1: number, y1: number, x2: number, y2: number): number {
        return null;
    }

    export function calcDistance(p1: PIXI.Point, p2: PIXI.Point): number {
        return null;
    }

    export function getNormalizedByLimits(value: number, min: number, max: number): number {
        return null;
    }

    export function lerp(current: number, target: number, speed: number): number {
        return null;
    }

    export function normalize(value: number, fit: number): number {
        return null;
    }

    export function putIn360(n: number): number {
        return null;
    }
}

module DO.Core {
    export class SoundManager {
        public static EVENT_SET_FX_VOLUME: string = "sound_manager_set_fx_volume";
        public static EVENT_ON_FX_VOLUME: string = "sound_manager_on_fx_volume";
        public static EVENT_SET_MUSIC_VOLUME: string = "sound_manager_set_music_volume";
        public static EVENT_SET_MUTE: string = "sound_manager_mute";

        public static globalSounds: SoundManager;

        public isMuted: boolean;
        private _sounds: any = {};
        private _atlases: any = {};
        private _currentMusic: Howl;
        private _currentMusicId: string;
        private _volumeFx: number = 1;
        private _volumeMusic: number = 1;
        private _musicRestorePoints: any = {};
        private _playingSounds: { [id: string]: number } = {};
        private _isSoundMuteOnFocusLose: boolean = false;

        constructor() {
        }

        public getCurrentMusic() {
        }

        public getAtlas(): string {
            return null;
        }

        public getCurrentMusicId(): string {
            return null;
        }

        public getVolumeFX(): number {
            return null;
        }

        public getVolumeMusic(): number {
            return null;
        }

        public setVolumeMusic(v: number): void {
            return null;
        }

        public setVolumeFX(v: number): void {
            return null;
        }

        public purge(): void {
            this._sounds = null;
        }

        public playCue(cue: any, cueIndex?: number, doLoop?: boolean, volume: number = 1): Howl {
            return null;
        }

        private getSpriteAtlas = (id: string): Howl => {
            return null;
        };

        public stopCue(cue: any) {
            return null;
        }

        public mute(): void {
            return null;
        }

        public unMute(): void {
            return null;
        }

        public addSound(manifestItem: any, sound: Howl): void {
            return null;
        }

        public doesSoundExist(id: string): boolean {
            return null;
        }

        public getSound(id: string): Howl {
            return null;
        }

        public setMusicRestorePoint(musicId: string, position: number): void {
            return null;
        }

        public stopMusic(): void {
            return null;
        }

        public fadeMusicOut(factor?: number, duration?: number): void {
            return null;
        }

        public fadeMusicIn(factor?: number, duration?: number): void {
            return null;
        }

        public startMusic(id: string, fadeDuration?: number, doRestore?: boolean, noLoop?: boolean): Howl {
            return null;
        }

        public static isFormatSupported(format: string): boolean {
            return null;
        }

        public static getSupportedFormats(): string[] {
            return null;
        }
    }
}

module DO.Core.HTML {
    let _currentPage: DO.Core.HTML.Page;
    let _overlay: DO.Core.HTML.Page;
    let _pages: any = {};
    let _managers: any = {};

    export function getPageManager(id: string, $parentDiv?): PageManager {
        return null;
    }

    export class PageManager {
        public static EVENT_ON_PAGE_LOADED: string = "page_manager_on_page_loaded";

        private readonly _$div:JQuery;
        protected _pageData: any = {};
        protected _eventListener: PIXI.utils.EventEmitter;

        constructor(divId: string, $parentDiv:JQuery) {
        }

        public getDiv() {
            return null;
        }

        public setVisible(visible: boolean): void {
            return null;
        }

        public loadPages(pages: any, onProgress: Function, onComplete: Function) {
            return null;
        }

        public getPage(id: string): Page {
            return null;
        }

        public closeOverlay(val?:any): void {
            return null;
        }

        public showOverlay(pageId: string, data?: any): void {
            return null;
        }

        public toggleOverlay(pageId: string, data?: any): void {
            return null;
        }


        public showPage(pageId: string, data?: any): void {
            return null;
        }

        private processCSS(): void {
            return null;
        }
    }
}

module DO.Core.HTML {

    export class Page extends PIXI.utils.EventEmitter {
        private readonly id: string;
        public  _$div: JQuery;
        protected _$parent: JQuery;
        protected _data: any;

        constructor(id: string, $div:JQuery) {
            super();
        }

        public getId(): string {
            return null;
        }

        public changeParent(parentId: string): void {
            return null;
        }

        public hide(): void {
            return null;
        }

        public show(): void {
            return null;
        }
    }
}

module DO.Core.HTML.Widgets {

    export class Switch {
        private state: boolean;
        private $_div: JQuery;
        private readonly _onClick:Function;

        constructor(divId: string, className: string, onClick:Function) {
        }

        public setState(state: boolean): void {
            return null;
        }
    }
}

module DO.Core.Renderer {
    import IAnimateable = DO.Core.Time.IAnimateable;

    export class StageSetup {
        public divId: string;
        public width: number;
        public height: number;
        public fps: number;
        public isTransparent: boolean;
        public resolution: number;
    }

    export class Stage extends PIXI.Container implements IAnimateable {
        public static instance: DO.Core.Renderer.Stage;

        public setup: StageSetup;
        private _renderer: any;
        private _update: number;

        init(setup: StageSetup) {
            return null;
        }

        public onUpdate(time: number) {
            return null;
        }

        public static scaleStage(factorX: number, factorY: number, x?: number, y?: number): void {
            return null;
        }
    }
}

module DO.Core.Renderer.SceneManager {
    let _scene: DO.Core.Renderer.Scene;
    let _overlays: Scene[] = [];
    let _sceneData: any = {};

    export class SceneData {
        public id: string;
        public class: string;
        public layoutId: string;
        public manifestFilename: string;

        constructor(id: string, data: any) {
        }

        public getSceneClass(): any {
            return null;
        }

        public getLayout(assets: AssetManager): any {
            return null;
        }
    }

    export class SceneTransition {
        public static FADE_IN: string = "fade_in";
        public static FADE_OUT: string = "fade_out";

        public duration: number;
        public ease: string;
        public type: string;

        constructor(type: string, duration?: number, ease?: any) {
        }

        public process(newScene: Scene, oldScene?: Scene, onComplete?: any): void {
            return null;
        }
    }

    export function init(sceneProfileData: any) {
        return null;
    }

    export function getSceneData(sceneId: string): SceneData {
        return null;
    }

    export function getCurrentScene(): DO.Core.Renderer.Scene {
        return null;
    }

    export function showSceneAsOverlay(sceneId: string, data?: any, transition?: SceneTransition, onLoaded?: any, onProgress?: any): void {
        return null;
    }

    export function closeOverlay(transition?: SceneTransition): void {
        return null;
    }

    export function showPopupScene(sceneId: string, data?: any, transition?: SceneTransition, onLoaded?: any, onProgress?: any): void {
        return null;
    }

    export function closePopupScene(transition?: SceneTransition, delay?:any): void {
        return null;
    }

    export function doesSceneExist(sceneId: string): boolean {
        return null;
    }

    export function getCurrentSceneProfile(): SceneData {
        return null;
    }

    export function showScene(sceneId: string, data: any, onLoaded: any, onProgress?: any, transition?: SceneTransition): void {
        return null;
    }

}

module DO.Core.Renderer {
    import SceneData = DO.Core.Renderer.SceneManager.SceneData;

    export class Scene extends PIXI.Container {
        protected _layout: DO.Core.Renderer.SceneBuilder;
        protected _sceneProfile: SceneData;
        protected _assets: AssetManager;
        protected _sounds: SoundManager;
        protected _data: any;

        constructor(sceneProfile: SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super();
        }

        public getLayout(): DO.Core.Renderer.SceneBuilder {
            return null;
        }

        public scaleScene(factor: number, xOffset: number = 0, yOffset: number = 0): void {
            return null;
        }

        public scaleSceneTween(factor: number, durationSecs: number, xOffset: number, yOffset: number, callback): void {
            return null;
        }

        public areAssetsReady(): boolean {
            return null;
        }

        public getAssets(): AssetManager {
            return null;
        }

        public getSceneProfile(): SceneData {
            return null;
        }

        protected onCreate(): void {
        }

        protected onResize(): void {
            return null;
        }

        protected updateOnOrientationChange(): void {
            return null;
        }

        protected onDestroy(): void {
            return null;
        }

        protected setHTMLBackground(imageUrl: string): void {
            return null;
        }
    }
}

module DO.Core.Renderer {
    import StandardText = DO.Core.Renderer.UI.StandardText;

    export class SceneBuilder {
        public _layoutData: any;
        protected _components: any = {};
        protected _assets: DO.Core.AssetManager;
        protected _parentScene: DO.Core.Renderer.Scene;

        constructor(parentScene: DO.Core.Renderer.Scene, assets: DO.Core.AssetManager, layoutData: any) {
        }

        public getParentScene(): DO.Core.Renderer.Scene {
            return null;
        }

        public getLayoutParams(): any {
            return null;
        }

        public getLayoutName(): string {
            return null;
        }

        public getAssets(): AssetManager {
            return null;
        }

        public bringComponentToFront(componentId: string): void {
            return null;
        }

        public deleteComponent(id: string): void {
            return null;
        }

        public getComponents() {
            return null;
        }

        public getComponent(id: string): PIXI.DisplayObject {
            return null;
        }

        public getComponentPlugin(component: PIXI.DisplayObject, pluginId: string): ComponentPlugin {
            return null;
        }

        public setComponentText(id: string, text: string): void {
            return null;
        }

        public applyToComponents(func: any) {
            return null;
        }

        public destroy(): void {
            return null;
        }

        public refresh(): void {
            return null;
        }

        public triggerFX(type: string): void {
            return null;
        }

        private destroyPlugins(component: PIXI.DisplayObject, ...params) {
            return null;
        }

        private build(container: PIXI.Container, layoutData: any) {
            return null;
        }

        public updateComponent(component: PIXI.DisplayObject): void {
            return null;
        }

        public changeComponent(component: PIXI.DisplayObject, isRefresh: boolean = false): void {
            return null;
        }

        private fit = (component: StandardText) => {
            return null;
        };

        private setInteraction(interaction: any, component: PIXI.DisplayObject) {
            return null;
        }

        private setPosition(position: any, component: PIXI.DisplayObject) {
            return null;
        }

        private setPivot(pivot: string, component: PIXI.DisplayObject) {
            return null;
        }

        private setScale(scale: any, component: PIXI.DisplayObject) {
            return null;
        }

        private getCoords(value: any, axis: string) {
            return null;
        }
    }

    export class ComponentPlugin extends PIXI.utils.EventEmitter {
        protected _params: any;
        protected _parentComponent: PIXI.DisplayObject;
        protected _assets: AssetManager;

        public static createPlugins(parentComponent: PIXI.DisplayObject, pluginList: any, assets: AssetManager): any {
            return null;
        }

        constructor(parentComponent: PIXI.DisplayObject, params: any, assets: AssetManager) {
            super();
        }

        public init(): void {

        }

        public destroy(): void {

        }

        protected validate(): void {
        }
    }
}

module DO.Core.Renderer.UI {
    import Events = DO.Core.Events;
    import AssetManager = DO.Core.AssetManager;

    export class BackgroundDimmer extends PIXI.Graphics {
        constructor(color: number = 0x000000, alpha: number = 0.5,
                    x: number = 0, y: number = 0,
                    width: number = 10000, height: number = 10000) {
            super();
        }
    }

    export class BoundsFiller extends PIXI.Graphics {
        constructor(width: number = Environment.defaultSettings.width,
                    height: number = Environment.defaultSettings.height,
                    color: number = 0x000000, alpha: number = 0.5,
                    x: number = 0, y: number = 0) {
            super();
        }
    }


    export class RoundedRectPanel extends PIXI.Graphics {
        constructor(width: number = 10000, height: number = 10000,
                    color: number = 0x000000, alpha: number = 0.5,
                    x: number = 0, y: number = 0, rotation:number= 0,
                    borderRadius: number = (height/2)-1,
                    borderThickness: number = 3, borderColor: number = 0xffffff) {
            super();
        }
    }


    export class VideoClipWrapper extends PIXI.Container {
        private assets: AssetManager;
        public videoSprite: PIXI.Sprite;

        constructor(assets: AssetManager, clipName: string, docenter?: boolean, loop: boolean = false,
                    mute: boolean = true, auto: boolean = false) {
            super();
        }

        public setVideo(clipName: string) {
            return null;
        }
    }

    export class MovieSpineClipWrapper extends PIXI.Container {
        private clip: PIXI.spine.Spine;

        constructor(assets: AssetManager, clipName: string, spineName: string, loop: boolean = false, timeScale: number = 1) {
            super();
        }
    }

    export class MovieClipWrapper extends PIXI.Container {
        public clip: PIXI.AnimatedSprite;

        constructor(assets: AssetManager, clipName: string, autoPlay: boolean = false, loop: boolean = false, frameNumber: number = 0) {
            super();
        }
    }

    export class Image extends PIXI.Sprite {
        constructor(assets: AssetManager, textureName: string, visible: boolean = true) {
            super();
        }
    }

    export class Toggle extends PIXI.Container {
        protected _state: boolean = true;
        protected _spriteOn: PIXI.Sprite;
        protected _spriteOff: PIXI.Sprite;

        constructor(assets: AssetManager, textureNameOn: string, textureNameOff: string, initialState: boolean) {
            super();
        }

        public getState(): boolean {
            return null;
        }

        protected onPress(): void {
            return null;
        }

        setState(state: boolean): void {
            return null;
        }
    }

    export class StandardText extends PIXI.Text {
        constructor(text: string, options: any, visible: boolean = true) {
            super(DO.Core.Lang.getPhrase(text), options);
        }

        public setText = (text: string, doCentre: boolean = true): void => {
            return null;
        }

        public show(): void {
            return null;
        }

        public hide(): void {
            return null;
        }

    }

    export class SpriteText extends PIXI.Container {
        protected _params: any;
        protected _assets: AssetManager;
        protected _chars: PIXI.Sprite[] = [];

        constructor(assets: AssetManager, text?: string) {
            super();
        }

        protected setup(data: any): void {
            return null;
        }

        public setText(text: string): void {
            return null;
        }

        public getParams(): any {
            return null;
        }

        public show(): void {
            return null;
        }

        public hide(): void {
            return null;
        }

    }

    export class BitmapText extends PIXI.BitmapText {
        protected _position: PIXI.Point;

        constructor(text: string, options: any) {
            super(text, options);
        }

        public setText(text: string): void {
            return null;
        }
    }

    export class SpriteButton extends PIXI.Container {
        protected _buttonImage: PIXI.Sprite;
        protected _label: PIXI.Text;
        protected _textureIdUp: string;
        protected _textureIdOver: string;
        protected _textureIdDown: string;
        protected _assets: AssetManager;
        protected _uses: number;

        constructor(assets: AssetManager, textureIdUp: string, textureIdOver: string, textureIdDown?: string, labelText?: string, usageCount?: number, labelStyle?: PIXI.TextStyle) {
            super();
        }

        protected onOver(): void {
            return null;
        }

        protected onOut(): void {
            return null;
        }

        protected onPress(): void {
            return null;
        }

        public getLabel(): PIXI.Text {
            return null;
        }

        public show(): void {
            return null;
        }

        public hide(): void {
            return null;
        }

        public fadeOut(): void {
            return null;
        }

        public fadeIn(): void {
            return null;
        }

        public disable(): void {
            return null;
        }

        public enable(): void {
            return null;
        }

    }

    export class BonusPick extends PIXI.Container {
        protected _buttonNormal: PIXI.AnimatedSprite;
        protected _clipName: string;
        protected _clipLossName: string;
        protected _clipWinName: string;
        protected _assets: AssetManager;
        protected _scaleX: number;
        protected _scaleY: number;
        protected _labelStyle: PIXI.TextStyle;
        protected _prizeLabel: PIXI.Text;
        protected textPosition;

        constructor(assets: AssetManager, clipName: string,  clipWinName: string, clipLossName: string, labelText?: string, labelStyle?: PIXI.TextStyle, hitArea?: any, textPosition?: any) {
            super();
        }

        protected onOver(): void {
            return null;
        }

        protected onOut(): void {
            return null;
        }

        protected onPress(): void {
            return null;
        }

        public onShowPrize(prizetext, isWin = true, callback?): void {
            return null;
        }

        public onShowDisablePrize(prizetext): void {
            return null;
        }

        public getPrizeLabel(): PIXI.Text{
            return null;
        }
    }

    export class BonusOption extends PIXI.Container {
        protected _buttonNormal: PIXI.AnimatedSprite;
        protected _clipName: string;
        protected _clipLossName: string;
        protected _clipWinName: string;
        protected _assets: AssetManager;
        protected _scaleX: number;
        protected _scaleY: number;

        constructor(assets: AssetManager, clipName: string,  clipWinName: string, clipLossName: string, hitArea?: any) {
            super();
        }

        protected onOver(): void {
            return null;
        }

        protected onOut(): void {
            return null;
        }

        protected onPress(): void {
            return null;
        }

        public onShowPrize(isWin = true, callback?): void {
            return null;
        }

        public onShowDisablePrize(): void {
            return null;
        }
    }

    export class PlayerMessagePanel extends PIXI.Container {
        private _assets: AssetManager;
        private _symbol: PIXI.Sprite;
        private _msg: PIXI.Text;
        private _textureName: string;

        constructor(assets: AssetManager, textureName: string, textStyle: any) {
            super();
        }

        public showMessagePanel(msg: string){
        }

        public showWinMessagePanel(symbolId: string, msg: string){
        }

        public hideMessagePanel(){
        }
    }
}

module DO.Core.Renderer.UI.FX {

    export function popOut(component: PIXI.DisplayObject, delay?: number, duration?: number, popAmount?: number): void {
        return null;
    }

    export function slam(component: PIXI.DisplayObject, delay?: number, duration?: number, initialScale?: number): void {
        return null;
    }

    export function fadeIn(component: PIXI.DisplayObject, delay?: number, duration?: number): void {
        return null;
    }

    export function fadeOut(component: PIXI.DisplayObject, delay?: number, duration?: number): void {
        return null;
    }
}

module DO.Core.Renderer.FX {
    import IAnimateable = DO.Core.Time.IAnimateable;
    import AssetManager = DO.Core.AssetManager;
    import DelayCall = DO.Core.Time.DelayCall;
    import Texture = PIXI.Texture;
    import SceneBuilder = DO.Core.Renderer.SceneBuilder;
    import Juggler = DO.Core.Time.Juggler;

    export class ParticlePath {
        public id: string;
        public speed: number = 100;
        public totalLength: number = 0;
        protected _waypoints: any[] = [];

        constructor(id: string) {
        }

        public addWaypoint(point: PIXI.Point): void {
            return null;
        }

        public getPosition(time: number): PIXI.Point {
            return null;
        }

        private calcPathLength(): void {
            return null;
        }
    }

    export class ParticleSetup {
        public emitDuration: number = -1; // duration of emmission (ms)
        public emitRate: number = 2; // emission rate (per second)
        public lifetime: any = {min: 1000, max: 3000}; // min/max lifetime (ms)
        public scale: any = {min: 1, max: 1}; // min max scale
        public rotation: any = {min: 0, max: 360}; // min max rotation
        public gravity: any = {x: 0, y: 8}; // gravity on axes
        public speed: any = {min: 20, max: 40}; // min max speed (px per second)
        public spin: any = {min: 0, max: 0}; // spin rate (per second)
        public shrinkFactor: number = 0; // multipler applied to scale
        public drag: number = 0; //  applied to speed of particle on each tick
        public acceleration: number = 0; // acceleration
        public direction: any = {min: 0, max: 360}; // min max initial direction of each particle
        public maxParticles: number = 10; // max particles in view at once
        public turbulence: any = {min: 0, max: 0}; // turbulence (speed of movement of particle according to rotation)
        public blendMode: number = PIXI.BLEND_MODES.NORMAL; // blend mode
        public autoStart: boolean; // auto-start when created?
        public textures: string[]; // list of texture ID's
        public movieclips: string[];  // list if move clip ID's
        public paths: any; // path list
        public doRandomTextures: boolean = false; // select random textures if a texture list?
        public touchCallback: any; // touch callback (if any)

        protected _textures: PIXI.Texture[] = []; // list of textures to use
        protected _clips: any[] = []; // list of movieclips
        protected _paths: any = {}; // list of paths (indexed on path ID)
        protected _currentPath: ParticlePath; // current path

        constructor(params?: any) {
        }

        public createPath(id: string): ParticlePath {
            return null;
        }

        public setPath(id: string): void {
            return null;
        }

        public clearCurrentPath(): void {
            return null;
        }

        public getNextPosition(time: number): PIXI.Point {
            return null;
        }

        public getNextTexture(): Texture {
            return null;
        }

        public getNextMovieClip(): PIXI.AnimatedSprite {
            return null;
        }

        public addTexture(texture: Texture): void {
            return null;
        }

        public addMovieClip(assets: AssetManager, id: string): void {
            return null;
        }
    }

    export class Particle extends PIXI.Sprite implements IAnimateable {
        public isActive: boolean = false;
        protected _container: PIXI.Container;
        protected _juggler: Juggler;
        protected _onDead: any;
        protected _life: number; // current lifetime
        protected _direction: number; // current direction
        protected _speed: number; // current speed
        protected _drag: number; // current drag
        protected _acceleration: number; // acceleration
        protected _gravity: any; // current gravity
        protected _dir: any = {x: 0, y: 0};
        protected _g: any = {x: 0, y: 0};
        protected _spin: number = 0;
        protected _shrink: number = 0;
        protected _rotation: number;
        protected _clip: PIXI.AnimatedSprite;
        protected _turbulence: any;

        constructor(container: PIXI.Container, juggler: Juggler) {
            super();
        }

        public onUpdate(delta: number): void {
            return null;
        }

        public start(onDead: any, setup: ParticleSetup): void {
            return null;
        }

        public kill(): void {
            return null;
        }
    }

    export class Particles extends PIXI.Container implements IAnimateable {
        public isActive: boolean = false; // active?
        protected _touchCallback: any; // touch callback (if interactive)
        protected _juggler: Juggler; // animation juggler
        protected _particles: Particle[] = []; // list of particles
        protected _setup: ParticleSetup; // setup from constructor
        protected _emissionStopDelay: DelayCall; // emmission delay for stop
        protected _emissionDelay: DelayCall; // emmission delay
        protected _activeCount: number = 0; // no of active particles
        protected _time: number; // current time since emission start (ms)

        constructor() {
            super();
        }

        public init(setup: ParticleSetup, juggler?: Juggler): void {
            return null;
        }

        public setInteraction(callback?): void {
            return null;
        }

        public start(): void {
            return null;
        }

        public stop(): void {
            return null;

        }

        public onUpdate(delta: number) {
            return null;
        }

        protected emitParticles(): void {
            return null;
        }

        protected getParticle(): Particle {
            return null;
        }

        protected onParticleDied(particle: Particle): void {
            return null;
        }
    }
}

module DO.Core.Renderer.FX {

    export class Floating {

        constructor(target:any, isActive = true, minX = 10, maxX = 20, minY = 20, maxY = 30, minDelay = 0, maxDelay = 1, minTime= 3, maxTime= 5, minAngle= 0.08, maxAngle= 0.12) {
        }

        public start(){
        }

        public updateState(isActive: boolean){

        }
    }
}


module DO.Common.Server {

    export const HANDLE_ALERT_RESPONSE: string = "handle_alert_response";
    export const HANDLE_INIT_RESPONSE: string = "handle_init_response";
    export const HANDLE_RESULT_RESPONSE: string = "handle_result_response";
    export const REQUEST_RESULTS: string = "request_results";
    export const CONFIGURE_BET_DETAILS: string = "configure_bet_details";

    export const SEND_START_REQUEST: string = "send_start_request";
    export const SEND_PlAY_REQUEST: string = "send_play_request";
    export const SEND_CONTINUE_REQUEST: string = "send_continue_request";

    export const RECEIVE_SERVER_RESPONSE: string = "receive_server_response";

    export const SEND_HISTORY_REQUEST: string = "send_history_request";
    export const SEND_ROUND_END: string = "send_round_end_request";
    export const SEND_ROUND_START: string = "send_round_start_request";
    export const SEND_DEPOSIT_REQUEST: string = "send_deposit_request";
    export const SEND_RELOAD_REQUEST: string = "send_reload_request";
    export const SEND_LOBBY_REQUEST: string = "send_lobby_request";
    export const SEND_LOAD_COMPLETED: string = "send_load_completed";
    export const SEND_UPDATE_STAKE: string = "send_update_response";
    export const SEND_GAME_IS_READY: string = "send_game_is_ready_response";
    export const SEND_GAME_ERROR: string = "send_game_error_response";
    export const SEND_GAMBLE_BUTTON_REQUEST: string = "send_red_request";

    export const BASE: string = "BASE";
    export const FREE_SPINS: string = "FREE_SPINS";
    export const RE_SPIN: string = "RE_SPIN";
    export const CASCADE: string = "CASCADE";
    export const BONUS: string = "BONUS";
    export const HOLD_FREE_SPINS: string = "HOLD_FREE_SPINS";
    export const MULTI_LEVEL_BONUS: string = "MULTI_LEVEL_BONUS";

    export const GAMBLE: string = "GAMBLE";
    export const SPLASH: string = "SPLASH";

    export let isPaytableVisible: boolean = false;
    export let isbetSelect: boolean = false;
    export let isGamble: boolean = false;
    export let isGambleExit: boolean = false;
    export let isAutoplay: boolean = false;


    export let SoundVolume: boolean = true;
    export let stopContinueCallRespin: boolean = false;
}
module DO.Common.Server {

    import Lang = DO.Core.Lang;
    import Time = DO.Core.Time;
    import Juggler = DO.Core.Time.Juggler;
    import Environment = DO.Core.Environment;
    import Utils = DO.Core.Utils;

    export class ServerConnection {
        protected _rgsConnector: RGSConnector;
        private _connection: any;
        private _juggler: Juggler;
        private _responseResult: ResponseResult;

        constructor(connection: any, callback: Function,
                    rgsConnector: RGSConnector, responseResult: ResponseResult) {
        }

        private addEventsHandler() {
            return null;
        }
    }

    export class RGSConnector {
        protected connector: any;
        protected connection: any;
        private forceValues: string = null;

        constructor(connection: any) {
        }

        public async createConnection(callback: Function) {
            return null;
        };

        protected getServerURL(type: string = undefined) {
            return null;
        };

        private sendRequest = async (url: string, data: any) => {
            return null;
        };

        private receivedResponse(data: any): void {
            return null;
        }

        private showAlertMessage(data: any) {
            return null;
        }

        public sendStartRequest = async (data: Object) => {
            return null;
        };

        public sendPlayRequest = async (data: any) => {
            return null;
        };

        public sendContinueRequest = async (data: any) => {
            return null;
        };

        public sendGambleRequest = async (data: any) => {
            return null;
        };

        public sendHistoryRequest = async (data: any) => {
            return null;
        };

        public sendRoundDetailRequest = async (data: any) => {
            return null;
        };

        public sendLobbyRequest = async () => {
            return null;
        };

        public sendReloadGameRequest = async () => {
            return null;
        };

        public sendDepositRequest = async () => {
            return null;
        };

        public sendLoadProgressRequest = async (progress: string) => {
            return null;
        };

        public sendLoadCompletedRequest = async () => {
            return null;
        };

        public sendGameIsReadyRequest = async () => {
            return null;
        };

        public sendGameExitRequest = async () => {
            return null;
        };

        public sendGameErrorRequest = async () => {
            return null;
        };

        public sendRoundStartRequest = async () => {
            return null;
        };

        public sendRounEndRequest = async (data: any = {}) => {
            return null;
        };

        public sendUpdateStakeRequest = async (bet: number) => {
            return null;
        };

        public sendUpdateWinRequest = async (win: number) => {
            return null;
        };

        public sendAutoPlayStartRequest = async () => {
            return null;
        };

        public sendAutoPlayStopRequest = async () => {
            return null;
        };

        public sendFreeRoundsStartRequest = async () => {
            return null;
        };

        public sendFreeRoundsEndRequest = async () => {
            return null;
        };

        public sendBalanceUpdateRequest = async () => {
            return null;
        };

        public sendShowHelpRequest = async () => {
            return null;
        };
    }

    export class ResponseConfig {
        private _response: any;

        constructor(data: any) {
        }

        getRTP = () => null;

        getBetValues = () => {
            return null;
        };

        getDefaultBetIndex = () => {
            return null;
        };

        getFixedBet = () => null;

        getAutoPlayValues = () => null;

        getDefaultAutoPlayValue = () => null;

        getCurrencyCode = () => null;

        getCurrencyDecimalPlaces = () => null;

        getLocaleId = () => null;

        isUseGrouping = () => null;

        isUKGC = () => null;

        isRealityCheckSettingsAllowed = () => null;

        isQuickSpinAllowed = () => null;

        getSpinDuration = () => {
            return null;
        };

        isSlamStopAllowed = () => null;

        isAutoPlayDisplay = () => null;

        maxBetAmount = () => {
            return null;
        };

        maxWinMultiplier = () => null;
    }

    export class ResponseResult {
        public static current: ResponseResult;
        protected _response: any;
        protected _config: ResponseConfig;
        protected triggeredGrid: string[][];

        constructor() {
        }

        public updateDate(data: any) {
            return null;
        }

        public getData(): any {
            return null;
        }

        public setGameConfig(): any {
            return null;
        }

        public getGameConfig(): ResponseConfig {
            return null;
        }

        public setBrokenGameState(isBroken: boolean): boolean {
            return null;
        }

        public isBrokenGameSate(): boolean {
            return null;
        }

        public getBalance(): number {
            return null;
        }

        public getPrevBalance(): number {
            return null;
        }

        public getJackpotValues() {
            return null;
        }

        public getJackpotAfterWinValues() {
            return null;
        }

        public getJackpotData() {
            return null;
        }

        public getAction(): string {
            return null;
        }

        public getNextAction(): string {
            return null;
        }

        public getBet(): number {
            return null;
        }

        public getTotalBet(): number {
            return null;
        }

        public getTotalWin(): number {
            return null;
        }

        public getGameRoundWin(): number {
            return null;
        }

        public getGrid(): string[][] {
            return null;
        }

        public getGridAfterCascadeWin(): string[][] {
            return null;
        }

        public getExpandingReels(): ExpandingReels[] {
            return null;
        }

        public getModifierSymbolPosition(): ModifierSymbolPosition[] {
            return null;
        }

        public getTriggeredGrid(): string[][] {
            return null;
        }

        public getWinDetails(): any[] {
            return null;
        }

        public getMultiplier(): number {
            return null;
        }

        public getWildMultiplier(): number {
            return null;
        }

        public isBuyoutGame(): boolean {
            return null;
        }

        public isGameRoundOver(): boolean{
            return null;
        }

        public getGameData(): Object {
            return null;
        }

        // Re Spins or Free Spin State Data
        public getFeatureAwardedMultiplier(): number {
            return null;
        }

        public getFeatureTotalSpins(): number {
            return null;
        }

        public getFeatureAwardedSpins(): number {
            return null;
        }

        public getFeatureSpinsLeft(): number {
            return null;
        }

        public isFreeReSpin(): boolean {
            return null;
        }

        public getFeatureReelModifiersSymbols(): ModifierSymbolPosition[] {
            return null;
        }

        public getFeatureExpandingReels(): ExpandingReels[] {
            return null;
        }

        public getFeatureReTriggeredSpins(): number {
            return null;
        }

        // Bonus State Data
        public getBonusPrizes(): string[] {
            return null;
        }

        public getAwardedBonusPrizes(): {} {
            return null;
        }

        public getBonusLevel(): number {
            return null;
        }

        public getBonusNextLevel(): number {
            return null;
        }

        public getFeatureData(): any {
            return null;
        }

        public getFeatureTotalWin(): number {
            return null;
        }

        // Free Round State Data
        public getFreeRounds(): boolean {
            return null;
        }

        public getFreeRoundsAwarded(): number {
            return null;
        }

        public getFreeRoundsLeft(): number {
            return null;
        }

        public getFreeRoundsWin(): number {
            return null;
        }

        public isFreeRoundsActive(): boolean {
            return null;
        }

        public getFreeRoundsBet(): number {
            return null;
        }

        // Gamble Round State Data
        public getGambleRounds(): any {
            return null;
        }

        public getGambleTotalWin(): number {
            return null;
        }

        public getGambleToWin(): number {
            return null;
        }

        public getGambleCard(): any {
            return null;
        }

        public getGamblePreviousCards(): any {
            return null;
        }

        public isMaxWinCapped(): boolean {
            return null;
        }

        public getCappedWinAmount(): number {
            return null;
        }

        // modify response data
        protected getUpdatedGameResponse(data) {
            return null;
        }

        private getSymbolGrid(grid: string[][]): string[][] {
            return null;
        }

        private getWins(winDetails: any[]): any[] {
            return null;
        }

        private getModifierSymbols(positions: any[]): ModifierSymbolPosition[]{
            return null;
        }

        private getExpandingSymbolReels(positions: any[]): ExpandingReels[]{
            return null;
        }

        private getWinPositions(positions: any[]): SymbolPosition[] {
            return null;
        }

        protected getSymbolId(serverSymbolId: string) {
            return null;
        }

        protected getRandomSymbolId() {
            return null;
        }
    }

    export class ResponseAlert {
        public static current: ResponseAlert; // current response

        private _response: any;

        constructor(data: any) {
        }

        /**
         * Get translated error message for player
         */
        public getPlayerMessage(): string {
            return null;
        }

        /**
         * Return fatal flag
         */
        public isFatal(): boolean {
            return null;
        }

        /**
         * Get error object (if any)
         */
        public getErrorObject(): any {
            return null;
        }

        /**
         * Return message sent in error object
         */
        public getErrorMessage(): string {
            return null;
        }
    }

    export class ServerTime {
        public static time: Date = new Date();

        private static timeFormat = Intl ? Intl.DateTimeFormat(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        }) : {};

        public static setTime(time: number): void {
            return null;
        }

        public static getFormattedTime(): string {
            return null;
        }
    }

    export class SymbolPosition {
        private reel: number;
        private row: number;

        constructor(reelIndex: number, rowIndex: number) {
        }

        public getReelIndex(): number {
            return null;
        }

        public getRowIndex(): number {
            return null;
        }
    }

    export class ModifierSymbolPosition {
        private symbol: string;
        private replaceSymbol: string;
        private position: SymbolPosition;
        private type: string;

        constructor(pos: any) {
        }
        public getSymbol(): string {
            return null;
        }

        public getReplaceSymbol(): string {
            return null;
        }

        public getPosition(): SymbolPosition {
            return null;
        }

        public getType(): string {
            return null;
        }
    }

    export class ExpandingReels {
        private symbol: string;
        private reel: number;

        constructor(pos: any) {
        }

        public getSymbol(): string {
            return null;
        }

        public getReelIndex(): number {
            return null;
        }
    }

    export function createServerConnection(connection: any, callback: Function): void {
    }
}

module DO.Common.Currency {
    export let currencyCode: string;
    export let localeId: string;
    export let currencyDecimalPlaces: number;
    export let formatAsCredits: boolean;
    export let useGrouping: boolean;
    export let creditValue: number = 1;

    export function format(value: number, exclude: boolean = false): string {
        return null;
    }
}
module DO.Common.SceneProfile {
    let _profile: any;

    export function init(profile: any): void {
        return null;
    }

    export function getSceneProfile(sceneId: string): SceneProfile {
        return null;
    }

    export class SceneProfile {
        private readonly _profile: any;

        constructor(data: any) {
        }

        public get(): any {
            return null;
        }
    }
}

module DO.Common {
    export class GameEvents {

        public static ON_GAME_INITIALIZED: string = "on_game_initialized";
        public static ON_GET_GAME_RESULTS: string = "on_get_game_results";
        public static ON_GET_CLEAR_ALL_SCREEN: string = "on_clear_screen";
        public static ON_RESULTS_READY: string = "on_results_ready";
        public static ON_RESULTS_DISPLAYED: string = "on_results_displayed";
        public static ON_PLAYER_PROMPT: string = "on_player_prompt";
        public static ON_PLAYER_PROMPT_WIN: string = "on_player_prompt_win";
        public static ON_GAME_CHANGED: string = "on_game_change";
        public static ON_GAME_ACCEPTED: string = "on_game_accepted";
        public static ON_UPDATE_GAMBLE: string = "on_update_gamble";
        public static GAMBLE_EXIT: string = "on_gamble_exit";
        public static ON_GAME_READY: string = "on_game_ready";
        public static ON_CONTINUE_GAME: string = "on_continue_game";
        public static ON_FATAL_ERROR: string = "on_game_fatal_error";
        public static ON_LOAD_PROGRESS: string = "on_game_load_progress";
        public static UPDATE_BALACE: string = "update_balace";
        public static HISTORY_RESPONSE: string = "history_data";
        public static SET_FORCE_VALUES: string = "set_force_values";
        public static EVENT_QUIT_GAME: string = "on_quit_game";
    }
}

module DO.Common {
    import Scene = DO.Core.Renderer.Scene;
    import GameEvents = DO.Common.GameEvents;
    import Server = DO.Common.Server;
    import DisplayObject = PIXI.DisplayObject;
    import ResponseResult = DO.Common.Server.ResponseResult;

    export class CommonSceneBase extends Scene {
        protected _announcer: DisplayObject;
        protected _announceTimeout: any;
        protected sceneAnimations:string[] =[];
        protected animationInterval:any;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?:any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onCreate(): void {
            super.onCreate();
        }

        protected onDestroy(): void {
            super.onDestroy();
        }

        protected onResultsRequested(data): void {
        }

        protected onResultsReady(): void {

        }
        protected onPlayerPrompt(): void {
        }
        protected onGameReady(): void {
            return null;
        }

        protected onInteraction(object: DisplayObject, id: string): void {

        }

        protected onSummaryAccepted(): void {
        }

        protected onGameAccepted(): void {
            return null;
        }

        protected onContinueGame(isResumed: boolean): void {

        }

        protected showAnnouncer(componentId: string): void {
            return null;
        }

        protected onWinsShown(): void {
        }

        protected showBrokenFeatureWinSummary(): void {
        }

        protected createAnimationInterval(){
        }

        protected playSceneAnimation(): void {
        }
    }
}
module DO.Common.PlayerMonitoring {
    import ResponseResult = DO.Common.Server.ResponseResult;

    export const EVENT_ALARM_CASH_LOSS: string = "monitoring_cash_loss_alarm";
    export const EVENT_ALARM_SINGLE_CASH_WIN: string = "monitoring_single_cash_win_alarm";
    export const EVENT_ALARM_TOTAL_CASH_WIN: string = "monitoring_total_cash_win_alarm";
    export const EVENT_ALARM_STOP_ON_ANY_WIN: string = "monitoring_stop_on_any_win";
    export const EVENT_ALARM_REALITY_CHECK: string = "monitoring_reality_check";
    export const EVENT_ALARM_FEATURE_STOP: string = "monitoring_feature_stop";
    export const EVENT_ALARM_BROKEN_MSG: string = "broken_alarm";
    export const EVENT_CHECK_ALARMS: string = "monitoring_check_alarms";
    export const EVENT_CHECK_ALARMS_AT_FS: string = "monitoring_check_alarms_at_fs";
    export const EVENT_CHECK_MAX_CAP: string = "monitoring_max_cap";
    export const INSUFFICIENT_FUND: string = "insufficient_fund";

    let _currentBetCount: number = 0;
    let _currentTotalBet: number = 0;
    let _currentTotalWin: number = 0;
    let _resetTime: number = 0;
    let _limitCashLoss: number = 9999999;
    let _limitSingleCashWin: number = 9999999;
    let _limitTotalCashWin: number = 9999999;
    let _limitRealityCheckMinutes: number = 60;
    let _lastRealtyCheckAt: number = new Date().getTime();
    let _stopOnFeatureWin: boolean;
    let _stopOnAnyWin: boolean;
    let _lastCashWin: number;
    let _lastCashBet: number;
    let _freeGameMaximumWin: number;

    export function init(): void {
    }

    export function getRealityCheckDuration(): number {
        return null;
    }

    export function setFeatureStop(flag: boolean): void {
        return null;
    }

    export function setWinStop(flag: boolean): void {
        return null;
    }

    export function setLimitRealityCheck(minutes: number): void {
        return null;
    }

    export function setLimitCashLoss(limit: number): void {
        return null;
    }

    export function setLimitSingleWin(limit: number): void {
        return null;
    }

    export function setLimitTotalWin(limit: number): void {
        return null;
    }

    export function reset(): void {
        return null;
    }

    export function getCurrentLastCashWin(): number {
        return null;
    }

    export function getCurrentDuration(): number {
        return null;
    }

    export function getCurrentBetCount(): number {
        return null;
    }

    export function getCurrentTotalBetCash(): number {
        return null;
    }

    export function getCurrentTotalWin(): number {
        return null;
    }

    export function getCurrentRTP(): number {
        return null;
    }

    export function getCurrentLossCash(): number {
        return null;
    }
}

module DO.Common.FX {
    import AssetManager = DO.Core.AssetManager;
    import Juggler = DO.Core.Time.Juggler;

    export class SpriteBanner extends PIXI.Container {
        protected _assets: AssetManager;
        protected _juggler: Juggler;
        protected _config: any;

        constructor(assets: DO.Core.AssetManager) {
            super();
        }

        public setImage(index: number): void {
            return null;
        }
    }
}

module DO.Common {
    import Lang = DO.Core.Lang;
    import HTML = DO.Core.HTML;
    import Events = DO.Core.Events;
    import Queue = DO.Core.Utils.Queue;
    import Environment = DO.Core.Environment;
    import PageManager = DO.Core.HTML.PageManager;
    import Page = DO.Core.HTML.Page;
    import AssetManager = DO.Core.AssetManager;
    import SceneData = DO.Core.Renderer.SceneManager.SceneData;
    import Scene = DO.Core.Renderer.Scene;
    import SceneManager = DO.Core.Renderer.SceneManager;
    import ResponseAlert = DO.Common.Server.ResponseAlert;
    import ResponseResult = DO.Common.Server.ResponseResult;

    export class ApplicationBase extends PIXI.utils.EventEmitter {
        public static instance: PIXI.utils.EventEmitter;
        public static version: string;

        constructor(defaultSettings) {
            super();
        }

        public init(): void {
            return null;
        }

        protected onAppInit(gameConfig: any, addEventHandlers: Function): void {
            return null;
        }

        protected onServerInitResponse(profile): void{
            return null;
        }

        protected changeGameScene(isFirstLoad: boolean = false): void {
            return null;
        }

        protected onGameReady(): void {
            return null;
        }

        protected onServerAlert(response: ResponseAlert): void {
            return null;
        }

        protected onServerResults(): void {
            return null;
        }

        protected onGetGameResults(data): void {
            return null;
        };

        protected onGameResultsDisplayed(): void {
            return null;
        }

        protected onAppExit(): void {
            return null;
        }

        protected onAppException(e): void {
            return null;
        }

        protected onAppGetFocus(event: any, duration: number): void {
            return null;
        }

        protected onAppLoseFocus(event: any, time: number): void {
            return null;
        }

        protected onAppResize(event: any, orientation: string): void {
            return null;
        }

        public static saveAppValue(key: string, value: any): void {
            return null;
        }

        public static getValues(key: string): any {
            return null;
        }

        public static getAppValue(key: string, defaultValue?: any): any {
            return null;
        }
    }
}

module DO.Slots.SettingsPages {
    import Page = DO.Core.HTML.Page;
    import Events = DO.Core.Events;
    import Environment = DO.Core.Environment;
    import Lang = DO.Core.Lang;
    import PlayerMonitoring = DO.Common.PlayerMonitoring;
    import HTML = DO.Core.HTML;
    import SoundManager = DO.Core.SoundManager;
    import GameEvents = DO.Common.GameEvents;
    import Server = DO.Common.Server;
    import Currency = DO.Common.Currency;
    import SceneProfile = DO.Common.SceneProfile;
    import SubSceneProfile = DO.Common.SceneProfile.SceneProfile;
    import formatTime = DO.Core.Utils.formatTime;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import ResponseConfig = DO.Common.Server.ResponseConfig;

    export class SettingsEvents {
        public static ON_REALITY_CHECK_CHANGE: string = "settings_reality_check_change";
        public static ON_AUTO_SPIN_COUNT_CHANGE: string = "settings_auto_spin_count_change";
        public static ON_LOSS_LIMIT_CHANGE: string = "settings_loss_limit_change";
        public static ON_SINGLE_WIN_LIMIT_CHANGE: string = "settings_single_win_limit_change";
        public static ON_TOTAL_WIN_LIMIT_CHANGE: string = "settings_total_win_limit_change";
        public static ON_STOP_ON_FEATURE_WIN_CHANGE: string = "settings_stop_on_feature";
        public static ON_STOP_ON_ANY_WIN: string = "settings_stop_on_any_win";
        public static ON_SETTINGS_OPEN: string = "settings_shown";
        public static ON_SETTINGS_CLOSED: string = "settings_closed";
        public static ON_BET_CHANGE: string = "settings_bet_change";
        public static ON_LEFT_HANDED_MODE: string = "settings_left_handed";
        public static ON_QUICK_SPIN: string = "settings_quick_spin";
        public static ON_DISPLAY_FORMAT_CHANGE: string = "settings_coins_or_cash";
        public static ON_SOUND_EFFECTS: string = "settings_sound_effects";
        public static ON_MUSIC: string = "settings_music";
        public static ON_BET_EVENT_OUTER: string = "on_bet_load_outer";
        public static ON_AUTOPLAY_EVENT_OUTER: string = "on_autoplay_load_outer";
        public static PAYTABLE_STATUS_CHANGED: string = "paytable_status_change";
        public static OPTION_STATUS_CHANGED: string = "option_status_change";
    }

    export class BettingSetup {
        public static betLevels: number[] = [];
        public static fixedBet;
        public static currentBetLevel: number = 1;

        public static setBetLevels(betLevels: number[]): void {
            return null;
        }

        public static setFixedBet(fixedBet: number): void {
            return null;
        }

        public static getTotalBetCash(): number {
            return null;
        }
    }

    export class Settings extends Page {

        protected _$settingsHolder; // main holder div
        protected _$menu; // menu div
        protected _$pages; // pages div
        protected _$header; // header div
        protected _$footer; // footer div;
        protected _$currentPage; // current page div
        protected _$buttonAudio; // audio button
        protected _$buttonHome; // home button
        protected _sessionLimitSlider: SliderWidget; // session limit slider
        protected _volumeSlider: SliderWidget; // session limit slider
        protected _autoSpinsSlider: SliderWidget; // autospin slider
        protected _stopOnFeature: CheckboxWidget; // stop on feature checkbox
        protected _stopOnAnyWin: CheckboxWidget; // stop on any checkbox
        protected _quickSpin: CheckboxWidget; // quickspin checkbox
        protected _gamble: CheckboxWidget; // quickspin checkbox
        protected _splashScreen: CheckboxWidget; // splash screen checkbox
        protected _spaceBar: CheckboxWidget; // space bar checkbox
        protected _valuesInCoins: CheckboxWidget; // show values in coins checkbox
        protected _leftHanded: CheckboxWidget; // left handed mode checkbox
        protected _sounds: CheckboxWidget; // sound effects checkbox
        protected _music: CheckboxWidget; // music checkbox
        protected _totalBet: StepperTotalBet; // total bet stepper
        protected _paysPager: PagerWidget; // Pay tables pager
        protected _$inputLossLimit: NumericInput; // loss limit input
        protected _$inputSingleWinLimit: NumericInput; // single win limit input
        protected _$inputTotalWinLimit: NumericInput; // total win limit input
        public prevID: any = undefined;
        protected _$buttonSpin: any; // spin button
        protected firstLoad: number = 0;
        protected paytablePages: string[] = [];
        protected paytablePagesClassIds: string = "";


        constructor(id: string, $div) {
            super(id, $div);
        }

        /**
         * Load game rules HTML
         */
        public static loadGameRules(callback): void {
            return null;
        }


        protected stringtoBoolean(value: string): boolean {
            return null;
        }

        /**
         * Settings displayed
         */
        private onShown(): void {
            return null;
        }

        /**
         * Process a menu click
         */
        private onMenuClick($object) {
            return null;
        }

        /**
         * Show settings page div
         */
        private showPage(divId: string, title: string): void {
            return null;
        }

        /**
         * Update dynamic pay-table values
         */
        private updatePays(): void {
            return null;
        }

        private showBetPage(): void {
            return null;
        }

        private showAutoplayPage(): void {
            return null;
        }

        /**
         * Resize
         */
        private resize(): void {
            return null;
        }

    }

    export class NumericInput {
        private _$div: any;
        private _$keypadDiv: any;
        private _onChange: any;
        private _value: number = 0;
        private _$keypadDisplay: any;
        private _currentKeypadValue: string = "";
        private _clickCount: number = 0;
        public static isKeypadInitialized: boolean = false;
        public static currentInput: NumericInput;

        constructor(divId: string, onChange: any, keypadDivId: string) {
        }

        public getDiv(): any {
            return null;
        }

        public getValue(): number {
            return null;
        }

        public setValue(value?: number): void {
            return null;
        }

        private clearKeypad(): void {
            return null;
        }

        private addCharacter(char: string): void {
            return null;
        }

        private initKeypad(): void {
            return null;
        }
    }

    export class PagerWidget {
        private _$div: any;
        private _$nextBtn: any;
        private _$prevBtn: any;
        private _$text: any;
        private _$pages: any[];
        private _idx: number = 0;

        public constructor(id: string, pageIds: string[]) {
        }

        private updatePage(idx: number) {
            return null;
        }

        private hideAll = () => null;

        private paginationNum() {
            return null;
        }
    }

    export class StepperWidget {
        public onChange: any;
        private _$div: any;
        protected _values: any[];
        protected _valueLabels: string[];
        protected _currentIndex: number = 0;
        protected _$value: any;
        private _$buttonNext: any;
        private _$buttonPrev: any;

        constructor(divId: string) {
        }

        public getValue(): any {
            return null;
        }

        public setMax(): void {
            return null;
        }

        public setValue(value: any, noChange?: boolean): void {
            return null;
        }

        public setIndex(i: number, noChange?: boolean): void {
            return null;
        }

        public setValues(values: any[], labels: any[]): void {
            return null;
        }

        public setText(text: string): void {
            return null;
        }

        protected showValue(): void {
            return null;
        }
    }

    export class StepperTotalBet extends StepperWidget {
        constructor(divId: string) {
            super(divId);
        }

        protected showValue() {
            return null;
        }

        public setValue(value: any, noChange?: boolean): void {
            return null;
        }

        private calculateValues = () => {
            return null;
        };

        public calculateTotalBetCombos(betLevels: number[]): any[] {
            return null;
        }
    }

    export class BetButtonWidget {
        private _$div: any;
        protected _value: any;
        protected _valueLabel: string;

        constructor(bet: any) {
        }

        protected selectedBet(){
            return null;
        }

        private changeSelectedBet(bet: any){
            return null;
        }

        public getValue(): any {
            return null;
        }

        public getIndexOfBet(e): void {
            return null;
        }

        public setValue(value: any, noChange?: boolean): void {
            return null;
        }

        public setValues(bet: any): void {
            return null;
        }

        public getDiv(): any {
            return null;
        }

        protected showValue(): void {
            return null;
        }
    }

    export class CheckboxWidget {
        private _$div: any; // our div

        private _onChange: any; // change callback

        private _value: boolean; // current value (true/false)

        private _$handle: any; // handle div


        constructor(divId: string, onChange) {
        }

        /**
         * Set state
         */
        public setValue(value: boolean): void {
            return null;
        }

        /**
         * Return state value
         */
        public getValue(): boolean {
            return null;
        }
    }

    export class SliderWidget {

        private _$div: any; // our div

        private _$handle: any; // slider handle

        private _$litBar: any; // lit portion of slider

        private _$groove: any; // groove

        private _$labelMin: any; // min label

        private _$labelMax: any; // max label

        private _$labelValue: any; // value label

        private _minValue: number = 0; // minimum value

        private _maxValue: number = 1; // maximum value

        private _clamp: number; // min.max clamp value

        private _isMouseDown: boolean = false; // mouse down flag

        private _onDisplay: any; // display method to transform values

        private _value: any; // curren value

        public static scaleFactor: number = 1;

        public onChange: any; // change callback function

        constructor(divId: string, min: number, max: number, onDisplay?: any, clamp?: number) {
        }

        public getValue(): any {
            return null;
        }

        public setValue(value: number): void {
            return null;
        }

        /**
         * Enable / Disable
         */
        public enable(doEnable: boolean): void {
            return null;
        }

        /**
         * Calculate current value from a X coordinate
         */
        private calcValue(x: number): void {
            return null;
        }
    }

}
module DO.Slots {
    import Juggler = DO.Core.Time.Juggler;
    import GameEvents = DO.Common.GameEvents;
    import SceneProfile = DO.Common.SceneProfile;
    import Stage = DO.Core.Renderer.Stage;
    import IAnimateable = DO.Core.Time.IAnimateable;
    import Lang = DO.Core.Lang;
    import Currency = DO.Common.Currency;
    import SubSceneProfile = DO.Common.SceneProfile.SceneProfile;
    import Graphics = PIXI.Graphics;
    import SymbolPosition = DO.Common.Server.SymbolPosition;
    import ObservablePoint = PIXI.ObservablePoint;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import ExpandingReels = DO.Common.Server.ExpandingReels;
    import ModifierSymbolPosition = DO.Common.Server.ModifierSymbolPosition;
    import Server = DO.Common.Server;

    export class Aperture extends PIXI.Container {

        public static EVENT_REEL_DROPPED: string = "aperture_reel_dropped";
        public static EVENT_SYMBOL_DROPPED: string = "aperture_symbol_dropped";
        public static EVENT_TEASE_REEL: string = "aperture_tease_reel";
        public static EVENT_TEASE_REEL_END: string = "aperture_tease_reel_end";
        public static EVENT_REELS_DROPPED: string = "aperture_all_reels_dropped";
        public static EVENT_REELS_SPIN_START: string = "aperture_reels_start";
        public static STOP_REEL_SPINNING: string = "stop_reel_spinning";

        public static isQuickSpin: boolean;

        protected _assets: DO.Core.AssetManager;
        public _setup: any;
        protected _reels: Reel[] = [];
        public _juggler: Juggler;
        protected _allSymbols: Symbol[] = [];
        protected _spinTime: number;
        protected _sceneProfile: SubSceneProfile;
        protected _wasSpinInterrupted: boolean = false;
        protected _behindReels: PIXI.Container;
        protected _symbolProfiles: any = {};
        protected _reelsSpinning: number = 0;

        public mask: Graphics;

        constructor(assets: DO.Core.AssetManager, sceneId: string) {
            super();
        }

        protected onDestroy(): void {
            return null;
        }

        protected onCreate(data: any): void {
            return null;
        }

        public onWinsShown(): void {
            return null;
        }

        protected onGameResults(): void {
            return null;
        }

        public getBackContainer(): PIXI.Container {
            return null;
        }

        public stopSymbolAnimations(): void {
            return null;
        }

        public startSpin(isBroken: boolean = false) {
            return null;
        }

        public dropSymbols(spinResults: SpinResults, onComplete: Function): void {
            return null;
        }

        public getSymbolProfile(symbolId: string): SymbolProfile {
            return null;
        }

        public getSymbolCounts(): Object {
            return null;
        }

        public getReel(index: number): Reel {
            return null;
        }

        public getAllSymbols(): Symbol[] {
            return null;
        }

        public getSpinningReelsCount(): number {
            return null;
        }

        public getSymbols(positions: SymbolPosition[]): Symbol[] {
            return null;
        }

        public getAbsolutePositionCentre(position: SymbolPosition): PIXI.Point {
            return null;
        }

        public getSymbolAtPosition(reelIndex: number, rowIndex: number): Symbol {
            return null;
        }

        public getPositionCentre(reelIndex: number, rowIndex: number, scope?: PIXI.DisplayObject): PIXI.Point {
            return null;
        }

        public getPositionCentreList(positions: SymbolPosition[], scope?: PIXI.DisplayObject): PIXI.Point[] {
            return null;
        }

        public restoreAperture(aperture: string[][]): void {
            return null;
        }

        public updateAperture(positions: ModifierSymbolPosition[], expandingReels: ExpandingReels[]): void {
            return null;
        }

        protected onInterruptSpin(): void {
            return null;
        }

        public onStopReelSpinning(): void {
            return null;
        }

        protected applyToSymbols(func: any): void {
            return null;
        }

        protected applyToReels(func: any): void {
            return null;
        }

        protected showResults(results: SpinResults, onComplete?: Function): void {
            return null;
        }

        protected hideReel(reelIndex: number) {
            return null;
        }

        protected showReel(reelIndex: number) {
            return null;
        }

        public get isSpinning(): boolean {
            return null;
        }
    }

    export class Symbol extends PIXI.Container {

        public symbolId: string;
        protected _symbolProfile: SymbolProfile;
        protected _setup: any;
        protected _static: PIXI.Sprite;
        protected _assets: DO.Core.AssetManager;
        protected _aperture: Aperture;
        protected _flashInterval;
        protected _originalPosition: PIXI.Point | ObservablePoint;

        constructor(aperture: Aperture, assets: DO.Core.AssetManager, setup: any) {
            super();
        }

        public getSymbolProfile(): SymbolProfile {
            return null;
        }

        public fadeOut(): void {
            return null;
        }

        public fadeIn(): void {
            return null;
        }

        public onDropped(): void {
            return null;
        }

        public setSymbol(symbolId: string): void {
            return null;
        }

        public getLocalCoords(scope?: PIXI.DisplayObject): PIXI.Point {
            return null;
        }

        public stopAnimation(): void {
            return null;
        }

        public symbolRemoveAnimate(clipName?: string): any {
            return null;
        }

        public animate(win: SlotWin, clipName?: string): any {
            return null;
        }
    }

    export class Reel extends PIXI.Container implements IAnimateable {

        public reelIndex: number;
        public rowIndex: number = 0;
        public mask: Graphics;

        protected _assets: DO.Core.AssetManager;
        public _setup: any;
        protected _container: PIXI.Container;
        protected _aperture: Aperture;
        public _symbolHeight: number;
        protected _strip: string[];
        protected _symbols: DO.Slots.Symbol[] = [];
        protected _speedM: number = 1;
        protected _juggler: DO.Core.Time.Juggler;
        protected _finalSymbols: string[];
        protected _isSpinning: boolean = false;
        protected _wasInterrupted: boolean = false;
        protected spinDuration: number = 0;

        private _section: number = 0;
        private _onStopped: any;
        private _teaseSymbolProfile: any;
        private _symbolTransitionUpto: number;
        private _blur;
        private isCascadeSpin: boolean;
        protected isCascadeWinSpin: boolean = false;
        private reelStopSequence: number[];

        public destroy(): void {
            return null;
        }

        public constructor(aperture: Aperture, assets: DO.Core.AssetManager, setup: any, strip: any,
                           juggler: DO.Core.Time.Juggler, isCascadeSpin: boolean, reelStopSequence: number[]) {
            super();
        }

        public dropInstant(symbols: string[], callback?: any): void {
            return null;
        }

        public isSpinning(): boolean {
            return null;
        }

        public getLocalCoords(scope?: PIXI.DisplayObject): PIXI.Point {
            return null;
        }

        public getCentroid(scope?: PIXI.DisplayObject): PIXI.Point {
            return null;
        }

        public getVisibleSymbols(): DO.Slots.Symbol[] {
            return null;
        }

        public getSymbolIds(): string[] {
            return null;
        }

        public startSpin() {
            return null;
        }

        public startCascadeSpin() {
            return null;
        }

        public getSymbolCount(symbolId: string): number {
            return null;
        }

        public setSymbols(symbols: string[]) {
            return null;
        }

        public changeSymbols(symbol: string, rowIndex: number) {
            return null;
        }

        public getSymbol(rowIndex: number): DO.Slots.Symbol {
            return null;
        }

        public dropSymbols(teaseSymbolProfile: SymbolProfile, symbols: string[], onStopped: any) {
            return null;
        }

        public applyToSymbols(func: any): void {
            return null;
        }

        public onUpdate(delta: number) {
            return null;
        }

        protected changeSection(isFirst: boolean = false) {
            return null;
        }

        protected changeCascadeSection() {
            return null;
        }

        public animateCascadeReelStop() {
            return null;
        }

        public animateReelStop() {
            return null;
        }
    }

    export class ApertureResponse {
        private _aperture: string[][];

        constructor(aperture: string[][]) {
        }

        public getStrip(reelNumber: number): string[] {
            return null;
        }

        public getReelCount(): number {
            return null;
        }

        public getVisibleStrip(reelNumber: number): string[] {
            return null;
        }

        public getAperture(): string[][] {
            return null;
        }

        public getVisibleAperture(): ApertureResponse {
            return null;
        }

        public isSymbolVisible(symbolId: string, reelNumber: number): boolean {
            return null;
        }

        public getOccurrences(symbolId: string, maxReelIndex?: number): number[] {
            return null;
        }
    }

    export class SpinResults {
        public aperture: ApertureResponse;
        protected _wins: SlotWin[] = [];
        private result: ResponseResult;

        constructor(result: ResponseResult) {
        }

        public hasScatterWin(): boolean {
            return null;
        }

        public getResult() {
            return null;
        }

        public getFeatureWin(): SlotWin {
            return null;
        }

        public applyToAllWins(func: any): void {
            return null;
        }

        public getWins(): SlotWin[] {
            return null;
        }

        public getSingleWin(): SlotWin {
            return null;
        }

        public getWinCount(): number {
            return null;
        }

        public getAction() {
            return null;
        }

        public getNextAction() {
            return null;
        }

        public getTotalWin() {
            return null;
        }

        public isBaseGame() {
            return null;
        }

        public isNextGameBase() {
            return null;
        }

        public isFreeSpinGame() {
            return null;
        }

        public isActionMatch(action: string) {
            return null;
        }

        public getGameRoundWin(): number {
            return null;
        }

        public getMultiplier(): number {
            return null;
        }

        public getExpandingReels(): ExpandingReels[] {
            return null;
        }

        public getModifierSymbolPosition(): ModifierSymbolPosition[] {
            return null;
        }

        public isRoundFinished(): boolean {
            return null;
        }
    }

    export class SlotWin {
        public static TYPE_LINE: string = "LINE";
        public static TYPE_WAY: string = "WAY";
        public static TYPE_SCATTER: string = "SCATTER";

        private _data: any;

        constructor(data: any) {
        }

        public getFeatureId(): string {
            return null;
        }

        public getPositions(): SymbolPosition[] {
            return null;
        }

        public getLine(): number {
            return null;
        }

        public getType(): string {
            return null;
        }

        public getWinCash(): number {
            return null;
        }

        public getSymbolId(): string {
            return null;
        }

        public getOAK(): number {
            return null;
        }

        public getDescription(): string {
            return null;
        }
    }

    export class SymbolPays {

        public rule: string;
        private _oak: any;

        constructor(data: any) {
        }

        public getOAKMultiplier(oak: number): any {
            return null;
        }
    }

    export class SymbolProfile {
        private _data: any;

        constructor(id: string, data: any, pays: any) {
        }

        public isInFront(): boolean {
            return null;
        }

        getAnimationDuration(): number {
            return null;
        }

        public getId(): string {
            return null;
        }

        public getTextureId(): string {
            return null;
        }

        public getMovieClipId(): string {
            return null;
        }

        public getRemoveClipId(): string {
            return this._data.animation.remove;
        }

        public getMovieClipOffsets(): any {
            return null;
        }

        public getDropClipId(): string {
            return null;
        }

        public getReelDropClipId(): string {
            return null;
        }

        public getActiveClipId(): string {
            return null;
        }

        public getSpineId(): string {
            return null;
        }

        public getFrameClipId(): string {
            return null;
        }

        public getAudioDropId(): string {
            return null;
        }

        public getAudioWinId(): string {
            return null;
        }

        public getPays(): SymbolPays {
            return null;
        }

        public mimicNearMiss(): boolean {
            return null;
        }

        public getTeaseDuration(reelIndex: number): number {
            return null;
        }

        public getTeaseAudioId(reelIndex: number): string {
            return null;
        }

        public doTease(oak: number): any {
            return null;
        }
    }
}
module DO.Slots {

    import SceneBuilder = DO.Core.Renderer.SceneBuilder;
    import Queue = DO.Core.Utils.Queue;
    import DelayCall = DO.Core.Time.DelayCall;
    import SceneProfile = DO.Common.SceneProfile;
    import GameEvents = DO.Common.GameEvents;
    import Lang = DO.Core.Lang;
    import Currency = DO.Common.Currency;
    import SubSceneProfile = DO.Common.SceneProfile.SceneProfile;
    import Juggler = DO.Core.Time.Juggler;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import convertToAmount = DO.Core.Utils.convertToAmount;
    import PaylineRenderer = DO.Slots.Plugins.PaylineRenderer;
    import SymbolAnimator = DO.Slots.Plugins.SymbolAnimator;
    import ExpandingReelAnimator = DO.Slots.Plugins.ExpandingReelAnimator;
    import ModifierSymbolAnimator = DO.Slots.Plugins.ModifierSymbolAnimator;
    import MovingWildAnimator = DO.Slots.Plugins.MovingWildAnimator;
    import Utils = DO.Core.Utils;
    import Environment = DO.Core.Environment;
    import Server = DO.Common.Server;
    import ModifierSymbolPosition = DO.Common.Server.ModifierSymbolPosition;

    export class WinManager extends PIXI.Container {
        public static EVENT_SHOW_WIN: string = "win_manager_show_win";
        public static EVENT_SHOW_WIN_SUMMARY: string = "win_manager_show_win_summary";
        public static EVENT_WIN_PRESENTATION_END: string = "win_manager_presentation_complete";
        public static EVENT_MODIFY_APERTURE_START: string = "win_manager_modifier_start";
        public static EVENT_WIN_PRESENTATION_START: string = "win_manager_display_win";
        public static EVENT_FREE_SPINS_END: string = "free_spins_feature_end";
        public static STOP_SYMBOLS_ANIMATION: string = "stop_symbols_animation";
        public static EVENT_SHOW_FEATURE_WIN_SUMMARY: string = "show_feature_win_summary";
        public static EVENT_SHOW_BROKEN_FEATURE_WIN_SUMMARY: string = "show_broken_feature_win_summary";
        public static EVENT_REMOVE_WIN_SYMBOLS: string = "remove_win_symbols";

        private _winBandSetup: any;
        private _isSkip: boolean = false;

        protected _assets: DO.Core.AssetManager;
        protected _cycleDelay: DO.Core.Time.DelayCall;
        protected _layout: SceneBuilder;
        protected _juggler: DO.Core.Time.Juggler;
        protected _setup: any;
        protected _aperture: Aperture;
        protected _expandingSymbolReels: ExpandingReelAnimator;
        protected _modifiedSymbols: ModifierSymbolAnimator;
        protected _paylineRenderer: PaylineRenderer;
        protected _symbolAnimation: SymbolAnimator;
        protected _movingWild: MovingWildAnimator;
        protected _sceneProfile: SubSceneProfile;
        protected _idleCycling: boolean = false;
        protected _currentWinMultiplier: number = 1;
        protected winSummaryEnd: boolean;
        protected _isAutoPlay: boolean;
        protected _sceneObject: DO.Core.Renderer.Scene;
        protected _animationLayer: PIXI.Container;
        private winSummaryDelay:number;

        constructor(assets: DO.Core.AssetManager, gameId: string) {
            super();

        }

        protected onCreate(data: any, layout: SceneBuilder): void {
            return null;
        }

        public getSceneObject(){
            return this._sceneObject;
        }

        protected onDestroy(): void {
            return null;
        }

        private setupWinTypes(setup: any): void {
            return null;
        }

        protected onSpinStart(isBroken): void {
            return null;
        }

        public getWinBand(win: number): string {
            return null;
        }

        protected onAutoEnd(): void {
            return null;
        }

        protected onAutoStart(): void {
            return null;
        }

        protected onGameChanged(): void {
            return null;
        }

        protected onPlayerBet(): void {
            return null;
        }

        public getAperture(): Aperture {
            return null;
        }

        public addModifySymbolBeforeReelStop(spinResults: SpinResults, callback: any): void {
            return null;
        }

        public displaySpinResults(spinResults: SpinResults, onComplete): void {
            return null;
        }

        protected updateGridFeatureAfterReelStop(postions:ModifierSymbolPosition[], callback){
            return null;
        }

        protected stopWinDisplay(): void {
            return null;
        }

        protected buttonClicked(): void {
            return null;
        }

        public addCelebrationAnimations(winAmount: number, taskQueue: Queue) {
            return null;
        }
    }
}
module DO.Slots.ControlPanel {
    import Page = DO.Core.HTML.Page;
    import Events = DO.Core.Events;
    import Environment = DO.Core.Environment;
    import Server = DO.Common.Server;
    import GameEvents = DO.Common.GameEvents;
    import Lang = DO.Core.Lang;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import ServerTime = DO.Common.Server.ServerTime;
    import PlayerMonitoring = DO.Common.PlayerMonitoring;
    import BettingSetup = DO.Slots.SettingsPages.BettingSetup;
    import Juggler = DO.Core.Time.Juggler;
    import formatTime = DO.Core.Utils.formatTime;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import BetButtonWidget =  DO.Slots.SettingsPages.BetButtonWidget;
    import StepperTotalBet =  DO.Slots.SettingsPages.StepperTotalBet;

    export let EVENT_HIDE: string = "panel_hide";
    export let EVENT_SHOW: string = "panel_show";
    export let EVENT_SHOW_WIN: string = "panel_show_win";
    export let EVENT_UPDATE_FEATURE_DISPLAY: string = "panel_update_feature_display";
    export let EVENT_DISABLE: string = "panel_disable";
    export let EVENT_NO_TOUCHES: string = "panel_no_touches";
    export let EVENT_INTERRUPT_SPIN: string = "panel_interrupt_spin";
    export let EVENT_STOP_SPIN: string = "panel_stop_spin";
    export let EVENT_AUTO_SPIN: string = "panel_auto_spin";
    export let EVENT_AUTO_SPIN_STOP: string = "auto_spin_stop";
    export let EVENT_AUTO_SPINS_START: string = "panel_auto_spins_start";
    export let EVENT_AUTO_SPINS_END: string = "panel_auto_spins_end";
    export let EVENT_AUTO_SPINS_ENDS: string = "panel_auto_spins_ends";
    export let EVENT_QUIT_GAME: string = "panel_quit_game";
    export let EVENT_SPACE_BAR: string = "panel_space_bar";
    export let EVENT_RE_SPIN_BUTTON_HIDE: string = "re_spin_button_disable";
    export let EVENT_BET_PANEL_CLOSE: string = "bet_panel_close";
    export let HIDE_PANEL_IN_BROKEN: string = "hide_panel_in_broken";
    export let SHOW_PANEL_IN_BROKEN: string = "show_panel_in_broken";
    export let PAYTABLE_SHOW_HIDE_BUTTONPANEL: string = "hide button panel";
    export let DIV_POINTER: string = "hide button panel";
    export let RESPIN: string = "hide button panel";
    export let AUTO_SPINS_BUTTON_ENABLE: string = "auto_spins_button_enable";

    export class ControlPanel extends Page {
        protected _$buttonSpin: any;
        protected _$buttonbet: any;
        protected _$betMobile: any;

        protected _$btnautoplayouter: any;
        protected _$buttonStopAutoSpin: any;
        protected _$buttonStopSpin: any;
        protected _$buttonSettings: any;
        protected _$settingPanel: any;
        protected _$paytableButton: any;
        protected _$removeBetPanel: any;
        protected $_displayBetPanel: any;
        protected $_betPanelMobile: any;
        private _$buttonNext: any;
        private _$buttonPrev: any;
        protected _$buttonWrapper: any;
        protected _$betbtnWrapper: any;
        protected _$autoWrapper: any;
        protected _$buttonMax: any;
        protected _$buttonBuyCredit: any;
        protected _$buttonAuto: any;
        protected _$buttonBet: any;
        protected _$buttonBetSettings: any;
        protected _$betSettingsPanel: any;
        protected _$autoSettingsPanel: any;
        protected _$autoSpinsSlider: DO.Slots.SettingsPages.SliderWidget;
        protected autoSettingsPanel: AutoSettingsPanel;
        protected betSettingsPanel: BetSettingsPanel; // auto spin panel
        protected _$featurePanel: any;
        protected _$textBalance: any;
        protected _$textWin: any;
        protected _$freeSpintextWin: any;
        protected _$textBet: any;
        protected _$textAutoSpins: any;
        protected _$spinBackground: any;
        protected _$panelBackground: any;
        protected _$panelBackground2: any;
        protected _$panelBgShape: any;
        protected _$featureSpinsWrapper: any;
        protected _$scatterWrapper: any;
        protected _$extraSpinWrapper: any;
        protected _$freeSpinWrapper: any;
        protected _$featureWin: any;
        protected _$featureSpins: any;
        protected _$extraSpin: any;
        protected _$fscollect: any;
        protected _$betWrapper: any;
        protected _$winWrapper: any;
        protected _$balanceWrapper: any;
        protected _$uiButtons: any;
        protected _$footer;
        protected _$info_bar;
        protected _$maxBetButton;
        protected _$gameWrapper: any;
        protected _juggler: Juggler;
        protected _isLeftHanded: boolean;
        protected _autoSpins: number = 0;
        protected firstLoad: boolean = true;
        protected soundON: boolean;

        constructor(id: string, $div) {
            super(id, $div);
        }

        protected onResultsReady(): void {
            return null;
        }

        /**
         * Big win animation start
         */
        protected onBigWinEnd(): void {
            return null;
        }

        /**
         * Reel tease start
         */
        protected onReelTease(): void {
            return null;
        }

        /**
         * Game results requested BUTTON_ENABLE
         */
        protected onGetGameResults(): void {
            return null;
        }

        /**
         * Close all panels
         */
        protected closeAllPanels(): void {
            return null;
        }

        /**
         * Update feature panel display (spins, total win etc)
         */
        protected onUpdateFeatureDisplay(featureData: any): void {
            return null;
        }

        /**
         * Disable touch events
         */
        protected onNoTouches(noTouches: boolean, isResumed?: boolean): void {
            return null;
        }

        /**
         * A game is ready
         * @param game
         */
        protected onGameReady(isResumed: boolean) {
            return null;
        }

        /**
         * Game has changed
         */
        protected onGameChanged(isResumed: boolean): void {
            return null;
        }

        /**
         * ALL reels have dropped
         */
        protected onReelsDropped(results: SpinResults): void {
            return null;
        }

        /**
         * Settings panel open
         */
        protected onSettingsOpen(data: any): void {
            return null;
        }

        /**
         * Settings panel closed
         */
        protected onSettingsClosed(data: any): void {
            return null;
        }

        /**
         * Continue (same game) event
         */
        protected onContinueGame(isResumed: boolean): void {
            return null;
        }


        /**
         * Stop auto-spins
         */
        protected stopAutoSpinsukgc(): void {
            return null;
        }

        protected stopAutoSpins(): void {
            return null;
        }


        /**
         * Start bet / spin pressed
         */
        protected onButtonSpin(event?: any): void {
            return null;
        }

        protected onButtonBet(event?: any): void {
            return null;
        }

        protected onAutoplay(event?: any): void {
            return null;
        }

        protected startSpin(): void {
            return null;
        }

        /*
         * update balance after response receive
         */
        protected updateBalance(balance: any): void {
            return null;
        }

        protected pushBalance(response: any): void {
            return null;
        }

        /**
         * Update time display fields
         */
        protected updateTimeDisplay(): void {
            return null;
        }

        /**
         * Show settings
         */
        protected onButtonSettings(): void {
            return null;
        }

        protected removeBet(): void {
            return null;
        }


        /**
         * Ready to display the total win
         */
        protected onDisplayWin(): void {
            return null;
        }

        private hasValue(obj, key) {
            return null;
        }

        /**
         * Player prompt message
         */
        protected onPlayerPrompt(prompt: string): void {
            return null;
        }

        /**
         * Disable input
         */
        protected disable(): void {
            return null;
        }

        /**
         * Disable input
         */
        protected enableButtonAutoSpins(): void {
            return null;
        }

        protected enable(isResumed ?: boolean): void {
            return null;
        }

        protected hidePanelInBrokenPopUp(): void {
            return null;
        }

        protected showPanelInBrokenPopUp(): void {
            return null;
        }

        /**
         * Hide panel
         */
        protected hidePanel(): void {
            return null;
        }

        protected divpointer(): void {
            return null;
        }

        /**
         * Show panel
         */
        protected showPanel(): void {
            return null;
        }

        /**
         * Any win alarm
         */
        protected onAnyWinAlarm(): void {
            return null;
        }

        /**
         * Feature stop alarm triggered
         */
        protected onFeatureStopAlarm(): void {
            return null;
        }

        /**
         * Single win alarm triggered
         */
        protected onSingleWinAlarm(win: number): void {
            return null;
        }

        /**
         * Total win alarm triggered
         */
        protected onTotalWinAlarm(win: number): void {
            return null;
        }

        /**
         * Cash loss alarm triggered
         */
        protected onCashLossAlarm(cashLoss: number): void {
            return null;
        }

        /**
         * Reality check trigged
         */
        protected onRealityCheck(duration: number): void {
            return null;
        }

        protected paytableShowHidePanel(value) {
            return null;
        }

        protected onMaxCap(): void {
            return null;
        }

        protected oninsufficientFund(data): void {
            return null;
        }

        protected onBrokenAlarm(): void {
            return null;
        }

        protected onBetNotAvailable(): void {
            return null;
        }

        protected onResponsibleGamingError(data): void {
            return null;
        }

        /**
         * App resize
         */
        protected onResize(): void {
            return null;
        }

    }

    export class AutoSettingsPanel {
        private AUTO_SPIN_VALUES: any = [];

        private _$div: any;
        private _$singleWinLimit: any;
        private _$totalWinLimit: any;
        private _$lossLimit: any;
        private _$stopOnFeatureWin: any;
        private _$stopOnAnyWin: any;
        private _$startButton: any;
        private _$toggleContainer: any;
        private _$advancedInputs: any;

        private _spinMultiselect: Multiselect;
        private _lossLimit: MoneyInput;
        private _singleWinLimit: MoneyInput;
        private _totalWinLimit: MoneyInput;
        private _noOfAutoPlaySpin: string;
        private static _lossLimitValue: number;


        private _state: AutoSettingsPanelState = AutoSettingsPanelState.COLLAPSED;

        constructor(divId: string) {
        }

        private changeAutoPlayButtonState = (doCheck?: boolean) => {
            return null;
        };

        private get isChecked(): boolean {
            return null;
        }

        private updateToggleButton = (initial?: boolean) => {
            return null;
        };

        public reset() {
            return null;
        }
    }

    export class HistoryPanel {

        constructor(data) {}

        //History main table
        private showHistoryMainTable(data) {
            return null;
        }

        //spin info showing pge
        private showSpinInfo(data) {}

        protected exitSpinInfo(){
        }

        private getimage() {
            return null;
        }

        private showGrid(data, rowId) {
            return null;
        }

        //win headin
        private createWinHeading(data, rowId) {
            return null;
        }

        //win showing
        private showGridwin(data, rowId) {
            return null;
        }

        //close btn
        private bgClose() {
            return null;
        }

        //grid transpose
        private transPoseGrid(grid) {
            return null;
        }

        //image conversion
        private imageConversion(sym, ids) {
            return null;
        }

        //showing freespin table
        private showTransactionTable(data, rowId) {
            return null;
        }

        //Free spin info
        private showTransactionInfo(data, rowId) {
            return null;
        }

        //Free game Table close
        private fgTableClose() {
            return null;
        }

        //free game info close
        private fgInfoClose() {
            return null;
        }

        //Free game grid
        private showFgGrid(data, rowId, freeGameActiveId) {
            return null;
        }

        //Updated grid
        private newGrid(data, rowId, freeGameActiveId, conRecord) {
            return null;
        }

        //Respin game grid
        private showReSpinGrid(data, rowId, freeGameActiveId) {
            return null;
        }

        //New Respin grid
        private showReSpinGrid2(data, rowId, freeGameActiveId) {
            return null;
        }

        //LeftGrid win heading
        private createLWinHeading(data, rowId) {
            return null;
        }

        //Show free game win
        private showFreeGamewin(data, rowId, freeGameActiveId) {
            return null;
        }

        //Show Respin win
        private showReSpinGamewin(data, rowId, freeGameActiveId) {
            return null;
        }

        //convert win symbol
        private convertWinSymb(winSymb) {
            return null;
        }

        //Set win line hover
        private winHover(e, bool) {
            return null;
        }
    }

    export class BetSettingsPanel {
        private _$divId: any;
        private _$removeBetPanel: any;
        private selectBet: any;
        private maxBetButton: any;

        constructor(divId: string) {
        }

        protected maxBetClick(): void {
            return null;
        }

        protected removeBet() {
        }

        protected selectedBet(c) {
            return null;
        }

        private changeCurrentBet(bet: any) {
            return null;
        }
    }

    export enum AutoSettingsPanelState {
        COLLAPSED,
        EXPANDED,
    }

    export class Multiselect {
        private _$prevBtn: any;
        private _$nextBtn: any;
        private _$items: any[];

        private _idx: number = 0;
        private _maxIdx: number = 0;
        private _selectedIdx: number = -1;

        constructor(
            private _$div: any,
            private _values: number[],
            private _changeHandler: (string) => void = null) {
        }

        public value() {
            return null;
        }

        public reset() {
            return null;
        }

        private updatePage(idx: number) {
            return null;
        }

        private updateButtons() {
            return null;
        }

        private updateItems() {
            return null;
        }

        private getIdx(pageIdx: number, idx: number) {
            return null;
        }

        private getValue(pageIdx: number, idx: number) {
            return null;
        }
    }

    export class MoneyInput {
        constructor(private _$div: any, private _changeHandler: (number) => void = null) {
        }

        public reset() {
            return null;
        }

        private callChangeHandler() {
            return null;
        }
    }
}
module DO.HTMLPageClasses {
    import Page = DO.Core.HTML.Page;
    import GameEvents = DO.Common.GameEvents;
    import Server =  DO.Common.Server;
    import Lang = DO.Core.Lang;
    import Environment = DO.Core.Environment;

    export class Loader extends Page {
        constructor(id: string, $div:JQuery) {
            super(id, $div);
        }
    }
}
module DO.HTMLPageClasses {
    import StageSetup = DO.Core.Renderer.StageSetup;
    import Events = DO.Core.Events;
    import Page = DO.Core.HTML.Page;
    import Environment = DO.Core.Environment;
    import GameEvents = DO.Common.GameEvents;
    import Stage = DO.Core.Renderer.Stage;

    export class Main extends Page {
        protected _stageSetup: StageSetup;
        private _stage: Stage;
        private vw:HTMLDivElement;
        private deviceMode:string = "";

        constructor(id: string, $div:JQuery) {
            super(id, $div);
        }

        private resizeGameWrapper(setup: StageSetup): void {
            return null;
        }
    }
}
module DO.HTMLPageClasses {
    import ResponseAlert = DO.Common.Server.ResponseAlert;
    import GameEvents = DO.Common.GameEvents;
    import Page = DO.Core.HTML.Page;
    import Lang = DO.Core.Lang;
    import SoundManager = DO.Core.SoundManager;
    export class Error extends Page {
        constructor(id: string, $div:JQuery) {
            super(id, $div);
        }
    }
}
module DO.HTMLPageClasses {
    import Page = DO.Core.HTML.Page;

    export class Dialog extends Page {
        constructor(id: string, $div:JQuery) {
            super(id, $div);
        }
    }
}
module DO.HTMLPageClasses {
    import Page = DO.Core.HTML.Page;

    export class GameOver extends Page {
        constructor(id: string, $div:JQuery) {
            super(id, $div);
        }
    }
}
module DO.Slots.Plugins {
    import ComponentPlugin = DO.Core.Renderer.ComponentPlugin;
    import SubSceneProfile = DO.Common.SceneProfile.SceneProfile;
    import SceneProfile = DO.Common.SceneProfile;
    import AssetManager = DO.Core.AssetManager;
    import SymbolPosition = DO.Common.Server.SymbolPosition;

    export class PaylineRenderer extends ComponentPlugin {
        protected _winManager: WinManager;
        protected _lineContainer: PIXI.Container;
        protected _lineSprites: any[] = [];
        protected _sceneProfile: SubSceneProfile;

        constructor(parentComponent: WinManager, params: any, assets: AssetManager) {
            super(parentComponent, params, assets);
        }

        public init(): void {
            return null;
        }

        public destroy(): void {
            return null;
        }

        public onWinPresentationComplete(): void {
            return null;
        }

        public onShowWin(win: SlotWin): void {
            return null;
        }

        public onShowWinSummary(results: SpinResults): void {
            return null;
        }

        protected drawLineMask(win: SlotWin): void {
            return null;
        };
    }
}

module DO.Slots.Plugins {
    import ComponentPlugin = DO.Core.Renderer.ComponentPlugin;
    import SubSceneProfile = DO.Common.SceneProfile.SceneProfile;
    import SceneProfile = DO.Common.SceneProfile;
    import GameEvents = DO.Common.GameEvents;
    import AssetManager = DO.Core.AssetManager;
    import SoundManager = DO.Core.SoundManager;

    export class SymbolAnimator extends ComponentPlugin {
        protected _winManager: WinManager;
        protected _sceneProfile: SubSceneProfile;
        protected _movieLayer: PIXI.Container;
        protected _teaseFrame: PIXI.AnimatedSprite;
        protected _teaseBackground: PIXI.AnimatedSprite;
        protected _sounds: SoundManager;

        constructor(parentComponent: WinManager, params: any, assets: AssetManager) {
            super(parentComponent, params, assets);}

        public init(): void {
            return null;
        }

        public destroy(): void {
            return null;
        }

        public clear(): void {
            return null;
        }

        protected onGetGameResults(): void {
            return null;
        }

        protected onReelsDropped(): void {
            return null;
        }

        protected onReelDropped(reel: Reel, wasInterrupt: boolean): void {
            return null;
        }

        protected onSymbolDrop(symbol: Symbol): void {
            return null;
        }

        protected teaseReel(reel: Reel, triggerSymbol: SymbolProfile): void {
            return null;
        }

        public onWinSummary(spinResults: SpinResults): void {
            return null;
        }

        protected animateSymbolRemove(symbol: Symbol): void {
            return null;
        }

        protected animateSymbol(symbol: Symbol, win: SlotWin): void {
            return null;
        }

        protected onShowWin(win: SlotWin): void {
            return null;
        }

        protected onRemoveWinningSymbols(spinResults: SpinResults): void {
            return null;
        }

        protected stopSymbolAnim() {
            return null;
        }

        protected onSymbolDropWithSpine( symbol: Symbol ): void {
            return null;
        }
    }
}

module DO.Slots.Plugins {
    import ComponentPlugin = DO.Core.Renderer.ComponentPlugin;
    import AssetManager = DO.Core.AssetManager;
    import ExpandingReels = DO.Common.Server.ExpandingReels;
    import SoundManager = DO.Core.SoundManager;

    export class ExpandingReelAnimator extends ComponentPlugin {
        private _winManager: WinManager;
        private _animationLayer: PIXI.Container;

        constructor(parentComponent: WinManager, params: any, assets: AssetManager) {
            super(parentComponent, params, assets);
        }

        public init(): void {
        }

        public addExpandingSymbolReels(expandingReels: ExpandingReels[], callback?): void{
            return null;
        }

        public removeAnimations(): void{
            return null;
        }
    }
}

module DO.Slots.Plugins {
    import ComponentPlugin = DO.Core.Renderer.ComponentPlugin;
    import AssetManager = DO.Core.AssetManager;
    import SoundManager = DO.Core.SoundManager;
    import ModifierSymbolPosition = DO.Common.Server.ModifierSymbolPosition;

    export class ModifierSymbolAnimator extends ComponentPlugin {
        protected _winManager: WinManager;
        protected _animationLayer: PIXI.Container;

        constructor(parentComponent: WinManager, params: any, assets: AssetManager) {
            super(parentComponent, params, assets);}

        public init(): void {
            return null;
        }

        public addModifierSymbols(positions: ModifierSymbolPosition[], callback?: any): void{
            return null;
        }

        public removeAnimations(){
            return null;
        }
    }
}

module DO.Slots.Plugins {
    import ComponentPlugin = DO.Core.Renderer.ComponentPlugin;
    import AssetManager = DO.Core.AssetManager;
    import SoundManager = DO.Core.SoundManager;
    import ModifierSymbolPosition = DO.Common.Server.ModifierSymbolPosition;
    import Graphics = PIXI.Graphics;

    export class MovingWildAnimator extends ComponentPlugin {
        private _winManager: WinManager;
        protected _animationLayer: PIXI.Container;

        constructor(parentComponent: WinManager, params: any, assets: AssetManager) {
            super(parentComponent, params, assets);
        }

        public init(): void {
            return null;
        }

        public addMovingWildSymbol(positions: ModifierSymbolPosition[]): void {
            return null;
        }

        public removeAnimations(){
            return null;
        }
    }
}

module DO.RendererScenes {
    import Aperture = DO.Slots.Aperture;
    import WinManager = DO.Slots.WinManager;
    import GameEvents = DO.Common.GameEvents;
    import SpinResults = DO.Slots.SpinResults;
    import Symbol = DO.Slots.Symbol;
    import SymbolProfile = DO.Slots.SymbolProfile;
    import Reel = DO.Slots.Reel;
    import SlotWin = DO.Slots.SlotWin;
    import Queue = DO.Core.Utils.Queue;
    import SoundManager = DO.Core.SoundManager;
    import SceneManager = DO.Core.Renderer.SceneManager;
    import DisplayObject = PIXI.DisplayObject;
    import Lang = DO.Core.Lang;
    import Environment = DO.Core.Environment;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import Server = DO.Common.Server;
    import CommonSceneBase = DO.Common.CommonSceneBase;
    import SpriteText = DO.Core.Renderer.UI.SpriteText;
    import format = DO.Common.Currency.format;
    import ControlPanel = DO.Slots.ControlPanel;

    export class BaseScene extends CommonSceneBase {
        protected lastResults: SpinResults;
        protected _aperture: Aperture;
        protected _winManager: WinManager;
        protected _teaseCount: number;
        protected _scatterCount: number;
        protected _mainMovieLayer: PIXI.Container;
        protected result: SpinResults;
        protected isIdleMode: boolean = true;
        protected idleMsgIndex: number = -1;
        protected idleAnimCounter: number = 0;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected addForce(): void {
        }

        protected onGameReady(): void {
            return null;
        }

        protected onCreate(): void {
            super.onCreate();

            return null;
        }

        protected updateComponentData() {
        }

        protected updateOnOrientationChange(): void {
            return null;
        }

        protected onResize(): void {
            return null;
        }

        protected onInterruptSpinError(): void {
            return null;
        }

        protected onResultsRequested(data): void {
            return null;
        }

        protected onResultsReady(): void {
            return null;
        }

        protected dropSymbols(spinResults: SpinResults): void {
            return null;
        }

        protected onHideAnnouncer(): void {
            return null;
        }

        protected onDestroy(): void {
            return null;
        }

        protected onSpinStart(): void {
            return null;
        }

        protected onReelsDropped(wasInterrupt: boolean): void {
            return null;
        }

        protected onReelDropped(reel: Reel, wasInterrupt: boolean): void {
            return null;
        }

        protected onSymbolDropped(symbol: Symbol, reel: Reel): void {
        }

        protected onInterruptSpin(): void {
        }

        protected onPlayerWinPrompt(win:SlotWin): void {
        }

        protected onReelTease(reel: Reel, triggerSymbol: SymbolProfile): void {
            return null;
        }

        protected onReelTeaseEnd(reel: Reel, triggerSymbol: SymbolProfile): void {
            return null;
        }

        public onWinSummary(spinResults: SpinResults): void {
            return null;
        }

        protected showWinTextAnimation(winAmount: number) {
            return null;
        }

        protected onShowWin(win: SlotWin, doAnimate: boolean): void {
            return null;
        }

        public onWinsShown(): void {
            return null;
        }

        protected onInteraction(object: DisplayObject, id: string): void {
            return null;
        }

        protected onContinueGame(isResumed: boolean): void {
            return null;
        }

        protected onAutoSpinsEnd(): void {
            return null;
        }

        protected onAutoSpinsStart(): void {
            return null;
        }

        protected onAutoSpin(autospin: number): void {
            return null;
        }

        protected stopAnim(): void {
            return null;
        }

        private showFeatureWinSummary(): void {
            return null;
        }

        protected showFreeSpinsIntro(action): void {
            return null;
        }

        protected showBonusIntro(action): void {
            return null;
        }

        protected addModifySymbolBeforeReelStop(spinResults: DO.Slots.SpinResults, callback: any) {
        }
    }
}
module DO.RendererScenes {
    import GameEvents = DO.Common.GameEvents;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import DisplayObject = PIXI.DisplayObject;
    import SceneManager = DO.Core.Renderer.SceneManager;
    import Server =  DO.Common.Server;
    import Environment = DO.Core.Environment;
    import SpriteText = DO.Core.Renderer.UI.SpriteText;
    import Lang = DO.Core.Lang;
    import CommonSceneBase = DO.Common.CommonSceneBase;
    import WinManager = DO.Slots.WinManager;
    import BonusOption = DO.Core.Renderer.UI.BonusOption;
    import Queue = DO.Core.Utils.Queue;

    export class BonusScene extends CommonSceneBase {
        protected selectedOptions = {};
        protected isPickOptionsEnabled = false;
        protected bonus_win_amount: SpriteText;
        protected lastPickId: number = 0;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected updateOnOrientationChange(): void {
            return null;
        }

        protected onCreate(): void {
            return null;
        }

        protected onResize(): void {
            return null;
        }

        protected onDestroy(): void {
            return null;
        }

        protected updateComponentData(){
            return null;
        }

        protected onInteraction(object: DisplayObject, optionId: string): void {
            return null;
        }

        protected onGameReady(): void {
            return null;
        }

        protected onResultsReady(): void {
            return null;
        }

        protected showBonusOption() {}

        protected restoreBonusState(){}

        protected onGameAccepted(): void {
        }

        protected playBonusGameSound(): void {
            return null;
        }

        protected showBrokenFeatureWinSummary(): void {
            return null;
        }

        protected playAnimationBeforePick(isWin: boolean, callback: any): void {
            callback();
        }

        protected playAnimationAfterPick(isWin: boolean, callback: any): void {
            callback();
        }
    }
}
module DO.RendererScenes {
    import Scene = DO.Core.Renderer.Scene;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import Environment = DO.Core.Environment;
    import Queue = DO.Core.Utils.Queue;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;
    import SpriteText = DO.Core.Renderer.UI.SpriteText;

    export class CelebrationScene extends Scene {
        protected _tweenRollUp: TweenLite;
        protected _tweenStarRotate: TweenLite;
        protected _animInterval: any;
        protected _cancelSkip: any;
        protected winTickUp: number = 0;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onCreate(): void {
            return null;
        }

        protected onSkipped(): void {
            return null;
        }

        protected animationText(typeTextAnim, winText): void {
            return null;
        }

        private rotateStarAnimation(){
            return null;
        }

        protected updateComponentData() {
            return null;
        }
    }
}
module DO.RendererScenes {
    import CommonSceneBase = DO.Common.CommonSceneBase;
    import Aperture = DO.Slots.Aperture;
    import WinManager = DO.Slots.WinManager;
    import GameEvents = DO.Common.GameEvents;
    import SpinResults = DO.Slots.SpinResults;
    import Symbol = DO.Slots.Symbol;
    import SymbolProfile = DO.Slots.SymbolProfile;
    import Reel = DO.Slots.Reel;
    import SlotWin = DO.Slots.SlotWin;
    import Queue = DO.Core.Utils.Queue;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import DisplayObject = PIXI.DisplayObject;
    import Lang = DO.Core.Lang;
    import Environment = DO.Core.Environment;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import Server = DO.Common.Server;
    import SceneManager = DO.Core.Renderer.SceneManager;
    import SpriteText = DO.Core.Renderer.UI.SpriteText;

    export class FreeSpinsScene extends CommonSceneBase {
        public static lastResults: SpinResults;
        private _aperture: Aperture;
        private _winManager: WinManager;
        private _teaseCount: number;
        private audioProfile = null;
        protected _mainMovieLayer: PIXI.Container;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected soundFreeGame(): void {
            return null;
        }

        protected updateOnOrientationChange(): void {
            return null;
        }

        protected onGameReady(): void {
            return null;
        }

        protected onCreate(): void {
            return null;
        }

        protected onResize(): void {
            return null;
        }

        protected updateComponentData(){
            return null;
        }

        protected onResultsRequested(data): void {
            return null;
        }

        protected onStateReady(): void {
            return null;
        }

        protected onResultsReady(): void {
            return null;
        }

        protected dropSymbols(spinResults: SpinResults): void {
            return null;
        }

        protected onInteraction(object: DisplayObject, id: string): void {
            return null;
        }

        protected onDestroy(): void {
            return null;
        }

        protected onReelsDropped(): void {
            return null;
        }

        protected onGameAccepted(): void {
            return null;
        }

        protected startGame(): void {
            return null;
        }

        protected onSummaryAccepted(): void {
            return null;
        }

        protected onSpinStart(): void {
            return null;
        }

        protected onContinueGame(): void {
            return null;
        }

        protected onReelDropped(reel: Reel, wasInterrupt: boolean): void {
            return null;
        }

        protected onSymbolDropped(symbol: Symbol, reel: Reel): void {
            return null;
        }

        protected onReelTease(reel: Reel, triggerSymbol: SymbolProfile): void {
            return null;
        }

        protected onReelTeaseEnd(reel: Reel, triggerSymbol: SymbolProfile): void {
            return null;
        }

        protected onWinSummary(spinResults: SpinResults): void {
            return null;
        };

        protected onWinsShown(): void {
            return null;
        }

        public addModifySymbolBeforeReelStop(spinResults: DO.Slots.SpinResults, callback: any) {
            return null;
        }

        protected showBrokenFeatureWinSummary(): void {
            return null;
        }
    }
}
module DO.RendererScenes {
    import GameEvents = DO.Common.GameEvents;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import DisplayObject = PIXI.DisplayObject;
    import SceneManager = DO.Core.Renderer.SceneManager;
    import Server =  DO.Common.Server;
    import Environment = DO.Core.Environment;
    import SpriteText = DO.Core.Renderer.UI.SpriteText;
    import Lang = DO.Core.Lang;
    import CommonSceneBase = DO.Common.CommonSceneBase;
    import WinManager = DO.Slots.WinManager;
    import BonusOption = DO.Core.Renderer.UI.BonusOption;
    import Queue = DO.Core.Utils.Queue;

    export class MultiLevelBonusScene extends CommonSceneBase {
        protected selectedOptions = {};
        protected isPickOptionsEnabled = false;
        protected bonus_win_amount: SpriteText;
        protected lastPickId: number = 0;
        protected lastLevelId: number = 1;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected updateOnOrientationChange(): void {
            return null;
        }

        protected onCreate(): void {
            return null;
        }

        protected onResize(): void {
            return null;
        }

        protected onDestroy(): void {
            return null;
        }

        protected updateComponentData(){
            return null;
        }

        protected onInteraction(object: DisplayObject, optionId: string): void {
            return null;
        }

        protected onGameReady(): void {
            return null;
        }

        protected onResultsReady(): void {
            return null;
        }

        protected showBonusOption() {
            return null;
        }

        private disableNotSelectedOption(){
            return null;
        }

        protected changeBonusLevel(nextLevel, callback){
            return null;
        }

        protected restoreBonusState(){
            return null;
        }

        protected onGameAccepted(): void {
        }

        protected playBonusGameSound(): void {
            return null;
        }

        protected showBrokenFeatureWinSummary(): void {
            return null;
        }
    }
}
module DO.RendererScenes {
    import CommonSceneBase = DO.Common.CommonSceneBase;
    import Aperture = DO.Slots.Aperture;
    import WinManager = DO.Slots.WinManager;
    import GameEvents = DO.Common.GameEvents;
    import SpinResults = DO.Slots.SpinResults;
    import Symbol = DO.Slots.Symbol;
    import SymbolProfile = DO.Slots.SymbolProfile;
    import Reel = DO.Slots.Reel;
    import Queue = DO.Core.Utils.Queue;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import DisplayObject = PIXI.DisplayObject;
    import Lang = DO.Core.Lang;
    import Environment = DO.Core.Environment;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import Server = DO.Common.Server;
    import SceneManager = DO.Core.Renderer.SceneManager;
    import SpriteText = DO.Core.Renderer.UI.SpriteText;
    import ModifierSymbolPosition = DO.Common.Server.ModifierSymbolPosition;

    export class HoldFreeSpinsScene extends CommonSceneBase {
        private _aperture: Aperture;
        private _winManager: WinManager;
        private audioProfile = null;
        protected _mainMovieLayer: PIXI.Container;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected playFeatureMusic(): void {
            return null;
        }

        protected updateOnOrientationChange(): void {
            return null;
        }

        protected onGameReady(): void {
            return null;
        }

        protected onCreate(): void {
            return null;
        }

        protected onResize(): void {
            return null;
        }

        protected updateComponentData(){
            return null;
        }

        protected onResultsRequested(data): void {
            return null;
        }

        protected onStateReady(): void {
            return null;
        }

        protected onResultsReady(): void {
            return null;
        }

        protected dropSymbols(spinResults: SpinResults): void {
            return null;
        }

        protected onInteraction(object: DisplayObject, id: string): void {
            return null;
        }

        protected onDestroy(): void {
            return null;
        }

        protected onReelsDropped(): void {
            return null;
        }

        protected onGameAccepted(): void {
            return null;
        }

        protected startGame(): void {
            return null;
        }

        protected onSummaryAccepted(): void {
            return null;
        }

        protected onSpinStart(): void {
            return null;
        }

        protected onContinueGame(): void {
            return null;
        }

        protected onReelDropped(reel: Reel, wasInterrupt: boolean): void {
            return null;
        }

        protected onSymbolDropped(symbol: Symbol, reel: Reel): void {
            return null;
        }

        protected onReelTease(reel: Reel, triggerSymbol: SymbolProfile): void {
        }

        protected onReelTeaseEnd(reel: Reel, triggerSymbol: SymbolProfile): void {
        }

        protected onWinsShown(): void {
            return null;
        }

        public addModifySymbolBeforeReelStop(spinResults: DO.Slots.SpinResults, callback: any) {
            return null;
        }

        protected showBrokenFeatureWinSummary(): void {
            return null;
        }
    }
}
module DO.RendererScenes {
    import GameEvents = DO.Common.GameEvents;
    import SoundManager = DO.Core.SoundManager;
    import Scene = DO.Core.Renderer.Scene;
    import Lang = DO.Core.Lang;

    export class WheelBonusScene extends Scene {

        private sectionGraphic: PIXI.Graphics;
        private textContainer: PIXI.Container;
        private wheel: PIXI.Container;
        private radius: number;
        private numberOfSectors: number;
        private piTwo: number;
        private radiansPerSector: number;
        private sectionTexts: string[];
        private sectionColors: any;
        private borderColor: number;
        private rotateDuration: number;
        private stopDuration: number;
        private stopDelayDuration: number;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onCreate(): void {
            return null;

        }

        protected onResultDisplay(): void {
            return null;

        }

        protected updateComponentData(){
            return null;
        }

        protected createSectorText(sectionNumber: number) {
            return null;
        }

        protected finalPosition() {
            return null;
        }
    }
}
module DO.RendererScenes {
    import GameEvents = DO.Common.GameEvents;
    import SoundManager = DO.Core.SoundManager;
    import Lang = DO.Core.Lang;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import Scene = DO.Core.Renderer.Scene;

    export class FeatureIntroScene extends Scene {

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onCreate(): void {
            return null;
        }

        protected onContinue(): void {
            return null;
        }

        protected updateComponentData(){
            return null;
        }
    }
}
module DO.RendererScenes {
    import WinManager = DO.Slots.WinManager;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import Scene = DO.Core.Renderer.Scene;
    import Lang = DO.Core.Lang;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import GameEvents = DO.Common.GameEvents;

    export class FeatureSummaryScene extends Scene {

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onCreate(): void {
            return null;
        }

        protected onContinue(): void {
            return null;
        }

        protected updateComponentData(){
            return null;
        }
    }
}
module DO.RendererScenes {
    import GameEvents = DO.Common.GameEvents;
    import SoundManager = DO.Core.SoundManager;
    import Lang = DO.Core.Lang;
    import Scene = DO.Core.Renderer.Scene;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;

    export class FeatureTransitionScene extends Scene {
        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }
    }
}
module DO.RendererScenes {
    import Scene = DO.Core.Renderer.Scene;
    import SoundManager = DO.Core.SoundManager;
    import Currency = DO.Common.Currency;
    import Environment = DO.Core.Environment;
    import ResponseResult = DO.Common.Server.ResponseResult;
    import Events = DO.Core.Events;
    import SpriteButton = DO.Core.Renderer.UI.SpriteButton;
    import SceneManager = DO.Core.Renderer.SceneManager;
    import MovieClipWrapper = DO.Core.Renderer.UI.MovieClipWrapper;
    import Server = DO.Common.Server;

    export class GambleScene extends Scene {
        protected pickCounter;
        protected centerCard: boolean = false;
        protected HistoryVisible: boolean = false;
        protected button: any;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected updateOnOrientationChange() {
            return null;
        }

        protected onCreate(): void {
            return null;
        }

        private ShowGamble(){
            return null;
        }

        private ShowHistory(){
            return null;
        }

        protected onDestroy(): void {
            return null;
        }
    }
}
module DO.RendererScenes {
    import SceneManager = DO.Core.Renderer.SceneManager;
    import Scene = DO.Core.Renderer.Scene;
    import Environment = DO.Core.Environment;
    import Events = DO.Core.Events;
    import SoundManager = DO.Core.SoundManager;

    export class SplashScene extends Scene {
        protected _tweenRollUp: TimelineLite
        protected pos: number = 1;
        protected pages: number = 1;

        constructor(sceneProfile: DO.Core.Renderer.SceneManager.SceneData, data?: any, onLoaded?: any, onProgress?: any) {
            super(sceneProfile, data, onLoaded, onProgress);
        }

        protected onCreate() {
            return null;
        }

        protected rotateSplashScreen(): void {
            return null;
        }

        protected updateComponentData(): void {
        }

        protected setSplashScreenState(): void {
            return null;
        }

        protected closeSplashScreen(): void {
            return null;
        }

        protected updateOnOrientationChange() {
            return null;
        }
    }
}