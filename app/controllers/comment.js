import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],

    // REGRESSION hack
    author: Ember.computed.alias('model.author'),
    date: Ember.computed.alias('model.date'),
    text: Ember.computed.alias('model.text'),

    isLogged: function() {
        console.debug("is logged : ", this.get("controllers.application").get("isLogged"));
    }.property(),

    dateFormat: function() {
        return Ember.I18n.translations["dateFormat"];
    }.property(),

    actions: {
        "delete": function() {
            var comment = this.get('model');
            comment.deleteRecord();
            comment.save();
        }
    }
});
