const {
  getCodeEditorStaticDirs,
  getExtraStaticDir,
} = require('storybook-addon-live-code-editor/getStaticDirs');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // monaco-editor needs static files to be available at runtime.
  staticDirs: [
    ...getCodeEditorStaticDirs(),
    // getExtraStaticDir('monaco-editor/esm'),
  ],
  addons: [
    'storybook-addon-live-code-editor',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
  framework: '@storybook/react',
  core: { builder: 'webpack5' },
};
