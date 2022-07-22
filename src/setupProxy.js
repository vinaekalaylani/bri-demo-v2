module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader("X-Frame-Options", "SAMEORIGIN");
        res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
        next();
    });
};