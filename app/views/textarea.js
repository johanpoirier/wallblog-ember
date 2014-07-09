import Ember from 'ember';

Ember.TextArea.reopen(Ember.I18n.TranslateableAttributes);

export default Ember.TextArea.extend(Ember.ViewTargetActionSupport, {
    click: function() {
        this.triggerAction({
            action: 'expand',
            target: this.get('parentView')
        });
    }
});