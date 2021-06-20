/**
 * @type {import('@lywzx/rollup-build-scripts').IRollupConfig}
 */
module.exports = {
  ts: true,
  dts: true,
  tsconfigOverride: {
    compilerOptions: {
      module: 'ES2015',
    },
    include: ['src'],
  },
  inputPrefix: 'src',
  workspace: ['libs'],
  handleCopyPackageJson(config){
    return {
      ...config,
      scripts: {},
    }
  },
  external: [
    'typeorm',
    'tough-cookie',
    '@milake/servkit',
    '@nestjs/common',
    '@nestjs/core',
    'lodash',
    'electron',
    'axios',
    'typeorm',
  ],
};
