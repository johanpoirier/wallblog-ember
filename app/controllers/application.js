import Ember from 'ember';

export default Ember.Controller.extend({
    loginTimeoutHandler: null,
    sessionDuration: 1000 * 60 * 30, // session lasts 30 minutes

    isLogged: function() {
        return this.get('loginTimeoutHandler') !== null;
    }.property('loginTimeoutHandler'),

    login: function () {
        this.set('loginTimeoutHandler', setTimeout(this.logout.bind(this), this.get('sessionDuration')));
    },

    logout: function() {
        this.set('loginTimeoutHandler', null);
    }
});