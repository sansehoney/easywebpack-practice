/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603018669171_1253';

  // add your middleware config here
  config.middleware = [];

  // 保证构建的静态资源文件能够被访问到
  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  config.vuessr = {
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
