// Webpack 절대 경로를 설정한다(ex - @components)
// 먼저 .eslintignore 에 넣기

const path = require('path');

const aliases = {
  '@': '.',
  '@src': 'src',
  '@apis': 'src/apis',
  '@assets': 'src/assets',
  '@components': 'src/components',
  '@containers': 'src/containers',
  '@interface': 'src/interface',
  '@layouts': 'src/layouts',
  '@router': 'src/router',
  '@store': 'src/store',
  '@styles': 'src/styles',
  '@utils': 'src/utils',
  '@views': 'src/views',
  '@common': 'src/common',
};

// alias에 for문 통해서 넣기
function resolveSrc(_path) {
  // ex) '@components': path.resolve(__dirname , 'src/components)'
  return path.resolve(__dirname, _path);
}

// eslint-disable-next-line guard-for-in, no-restricted-syntax
for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports[alias] = resolveSrc(aliasTo);
}
