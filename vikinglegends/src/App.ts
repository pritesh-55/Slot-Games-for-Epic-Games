module DO {
    import ApplicationBase = DO.Common.ApplicationBase;

    export class App extends ApplicationBase {

        constructor() {
            super(DO.getDefaultSettings());
        }

        protected onAppInit(): void {
            super.onAppInit(DO.getConfig(), (callback) =>{
                callback();
            });
        }

        protected onServerInitResponse(): void {
            super.onServerInitResponse(DO.getConfig().profile);
        }
    }
}
