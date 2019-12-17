const presets = [
  [
    "@babel/env",
    {
      targets: [
        "defaults",
        "IE 11"
      ],
      useBuiltIns: "usage",
      corejs: 3
    }
  ]
];

module.exports = { presets };
