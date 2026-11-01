import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [
      'src/App.tsx',
      'src/App.test.tsx',
      'src/index.tsx',
      'src/react-app-env.d.ts',
      'src/reportWebVitals.ts',
      'src/setupTests.ts',
      'botRougue/',
      '.superpowers/',
    ],
  },
]

export default eslintConfig
