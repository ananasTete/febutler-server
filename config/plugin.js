'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 这里是修改的地方
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 这里是修改的地方
};
