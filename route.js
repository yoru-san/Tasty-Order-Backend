exports.init = (app) => {
    require('./api/route').init(app);
    require('./backoffice/route').init(app);
}