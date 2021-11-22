/*module.exports = {
  reactStrictMode: true,
}
*/

/*
 * Parametros para que haga live Reaload con Docker
 * Importante tenerlo si no hara Live Reload
 *
 */
module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};
