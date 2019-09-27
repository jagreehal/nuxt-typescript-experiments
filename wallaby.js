module.exports = wallaby => {
  return {
    files: [
      '!src/**/*.spec.ts',
      '!src/**/*.stories.(ts|tsx)',
      'src/**/*',
      'jest.config.js',
      'package.json',
      'tsconfig.json'
    ],
    tests: ['src/**/*.spec.ts'],

    // Aren't strictly necessary right now, but will be if you want
    // to use jest mocks.
    preprocessors: {
      '**/*.js?(x)': file =>
        require('@babel/core').transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          plugins: ['babel-plugin-jest-hoist']
        })
    },

    // Need to add this to make sure that TypeScript compiles modules for commonjs
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs'
      })
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    setup(wallaby) {
      const jestConfig = require('./package').jest || require('./jest.config');

      // Need to add this to stop TypeScript compilation because we've already done it
      // in Wallaby compilers
      delete jestConfig.transform['^.+\\.tsx?$'];

      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  };
};
