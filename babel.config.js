module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
  ]
};