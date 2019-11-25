module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    __DEV__: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier':'error',
    'react/jsx-filename-extension':[
      'warn',
      {extensions: ['.jsx','.js']}
    ],
    'import/prefer-default-export':'off',
    'no-console':["error",{allow:["tron"]}]
  },
};
