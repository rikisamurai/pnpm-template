/**
 * @file default eslint config for monorepo
 *
 * if you want to view what rules are enabled, run: `npx @eslint/config-inspector`
 */
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  typescript: true,
  lessOpinionated: true,
})
