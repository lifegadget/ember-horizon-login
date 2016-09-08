import Ember from 'ember';
import layout from '../templates/components/horizon-login';
const { computed, get, set } = Ember;
const makeArray = function(hash) {
  return Object.keys(hash).map(i => {
    return { id: i, url: hash[i] };
  });
}

export default Ember.Component.extend({
  layout,
  tagName: '',
  horizon: Ember.inject.service(),
  isLoggedIn: computed.alias('horizon.isLoggedIn'),
  init() {
    this._super(...arguments);
    get(this, 'horizon').getAuthServices()
      .then(services => set(this, 'authServices', makeArray(services)));
  },

  actions: {
    authenticate(service) {
      get(this, 'horizon').authenticate(service.id);
    },
    logout() {
      get(this, 'horizon').logout();
    }
  }

});
