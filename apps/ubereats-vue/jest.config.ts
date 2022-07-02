module.exports = {
  displayName: 'ubereats-vue',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/ubereats-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/ubereats-vue/tsconfig.spec.json',
      babelConfig: 'apps/ubereats-vue/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/ubereats-vue/tsconfig.spec.json',
      babelConfig: 'apps/ubereats-vue/babel.config.js',
    },
  },
};
