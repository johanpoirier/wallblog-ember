import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],

    title: 'Wallblog',
    nbItems: 0,
    itemController: 'item'
});
