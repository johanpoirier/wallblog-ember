import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],
    isEditing: false,

    // REGRESSION hack
    file: Ember.computed.alias('model.file'),
    date: Ember.computed.alias('model.date'),
    description: Ember.computed.alias('model.description'),
    ratio: Ember.computed.alias('model.ratio'),
    reverseRatio: Ember.computed.alias('model.reverseRatio'),
    type: Ember.computed.alias('model.type'),

    // Computed properties
    dateFormat: function() {
        return Ember.I18n.translations["dateFormat"];
    }.property(),

    nbComments: function() {
        var comments = this.get('comments');
        return comments ? this.get('comments').get('length') : 0;
    }.property('comments'),

    hasComments: function() {
        var comments = this.get('comments');
        return comments && (comments.get('length') > 0);
    }.property('comments'),

    sortedComments: function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: ['date'],
            sortAscending: false,
            content: this.get('comments')
        });
    }.property('comments'),

    actions: {
        createComment: function(newComment) {
            newComment["item"] = this.get("model");
            newComment["date"] = moment().format("YYYY-MM-DD HH:mm:ss");
            var comment = this.store.createRecord('Comment', newComment);
            comment.save();
        },

        edit: function() {
            if(this.get("controllers.application").get("isLogged")) {
                this.set("isEditing", true);
            }
        },

        unedit: function() {
            this.set("isEditing", false);
        },

        update: function() {
            var item = this.get("model");
            item.save().then(_.bind(function() {
                this.set("isEditing", false);
            }, this));
        },

        delete: function() {
            if(window.confirm(Ember.I18n.translations["confirmDeletePicture"])) {
                var item = this.get("model");
                item.deleteRecord();
                item.save();

                // bubble action to router
                return true;
            }
        }
    }
});
