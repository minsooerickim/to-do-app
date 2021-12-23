const plugins = [
  [
    'relay',
    {
      "artifactDirectory": "./src/__generated__"
    }
  ]
];
const presets = ['next/babel'];
module.exports = { plugins, presets }
