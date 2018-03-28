const nzd = require('../index');
let config = {
  application: {name: 'dubbo'},
  register:'192.168.0.221:1181',
  dubboVer: '2.5.3.6', 
  root: 'dubbo',
  timeout: 6000
}
const options = {
  application: config.application,
  register: config.register,
  dubboVer: config.dubboVer,
  root: config.root,
  timeout: config.timeout,
  maxConn: 10,
  minConn: 2,
  dependencies: {
    backgroundSupplerProvider: {
      interface: 'com.showjoy.product.interfaces.BackgroundSupplerProvider',
      version: '1.0.0',
      timeout: 6000,
    },
    // backgroundProvider: {
    //   interface: 'com.showjoy.product.interfaces.BackgroundProvider',
    //   version: '1.0.0',
    //   timeout: 6000,
    // },
    // backgroundSpecProvider: {
    //   interface: 'com.showjoy.product.interfaces.BackgroundSpecProvider',
    //   version: '1.0.0',
    //   timeout: 6000,
    // }
  }
}
//options.java = require('js-to-java');

const dubbo = new nzd(options);

exports = module.exports = dubbo;