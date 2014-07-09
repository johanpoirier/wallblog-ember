import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller) {
        controller.set('title', "Tan, Johan & Evan");
        this.store.find('item', {
            limit: 9,
            offset: 0,
            comments: true
        }).then(function(items) {
            controller.set('items', items);
            controller.set('nbItems', items.meta['total']);
        });
    }
});