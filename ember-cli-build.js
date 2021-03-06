/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: []
    },
    snippetSearchPaths: [
      'addon',
      'tests/dummy'
    ]
  })

  return app.toTree()
}
