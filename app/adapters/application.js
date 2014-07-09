import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://wallblog.jops-dev.com',
    namespace: 'api/2'
});