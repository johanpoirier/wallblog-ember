import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        delete: function() {
            console.debug("transition to items");
            this.transitionTo('items');
        }
    }
});