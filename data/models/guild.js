const { model } = require('mongoose');

class GeneralModule {
  prefix = '';
  blacklistedChannelIds = [];
  chatbotChannel = [];
}

module.exports = model('guild', {
  _id: String,
  general: { type: Object, default: new GeneralModule() }
});