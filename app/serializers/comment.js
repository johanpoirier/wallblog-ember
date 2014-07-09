import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    serialize: function(post) {
        var json = {
            author: post.get('author'),
            text: post.get('text'),
            date: post.get('date'),
            idItem: post.get('item').get('id')
        };
        return json;
    }
});