module.exports = {
  // parser: 'babel-eslint',
  // "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],

  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    // ecmaVersion: '2021',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'airbnb/indent': off,
    // indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
    // 'no-tabs': 0,
    // 'react/jsx-indent': [2, 'tab'],
    // 'react/jsx-indent-props': [2, 'tab'],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-uses-react': 'off',
    'import/no-cycle': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, 250],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'no-sparse-arrays': 0,
    'no-array-index-key': 0,
    camelcase: 0,
  } };
