import DS from "ember-data";

export default DS.Model.extend({
    file: DS.attr('string'),
    description: DS.attr('string'),
    date: DS.attr('string'),
    ratio: DS.attr('number'),
    reverseRatio: DS.attr('number'),
    like: DS.attr('number'),
    type: DS.attr('string'),
    comments: DS.hasMany('comment')
});