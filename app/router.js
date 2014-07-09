import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WallcliENV.locationType
});

Router.map(function() {
    this.resource('items', { path: '/' });
    this.resource('item', { path: 'item/:item_id'});
});

export default Router;
