module.exports = {
  extends: ['stylelint-config-recommended-vue'],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ]
}
