export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'header-max-length': [2, 'always', 120],
    // @see https://commitlint.js.org/reference/rules.html#type-enum
    'type-enum': [2, 'always', ['feat', 'fix', 'perf', 'refactor', 'test', 'docs', 'chore', 'style', 'revert', 'ci', 'build']],
  },
}
