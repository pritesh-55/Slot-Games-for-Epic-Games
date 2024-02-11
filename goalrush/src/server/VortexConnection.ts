module DO.Common.Server.Vortex {

    export class VortexConnection extends ServerConnection{
        constructor(connection: any, callback:Function) {
            super(connection, callback, new RGSConnector(connection), new ResponseResult());
        }
    }
}
