module.exports = {
  name: 'eth-token-gallery',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/eth-token-gallery',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
