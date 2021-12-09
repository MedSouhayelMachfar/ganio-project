// @desc    Logs request to console
const logger = (req, res, next) => {
    console.log(
        `Request: ${req.method} to: ${req.protocol}://${req.get('host')}${req.originalUrl}`.brightBlue.bold
    );
    next();
};

module.exports = logger;