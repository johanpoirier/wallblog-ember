import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeHash: {
        reverseRatio: function(hash) {
            return hash;
        }
    }
});
