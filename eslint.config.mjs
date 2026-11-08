import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next';

export default defineConfig([
  ...next,
  {
    rules: {
      'react/jsx-no-target-blank': [2, { allowReferrer: true }],
      'react/display-name': [0, { ignoreTranspilerName: false }],
    },
  },
  { files: ['**/*.js'], rules: { 'import/no-anonymous-default-export': 'off' } },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'studio/**']),
]);
