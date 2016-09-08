/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-horizon-login',
  included: function(app) {
		this._super.included(app);
		app.import('vendor/ember-horizon-login/style.css');
	},
};
