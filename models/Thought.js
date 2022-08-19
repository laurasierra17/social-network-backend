const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format("MMM Do, YYYY [at] h:mm a")
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Virtual property that retrieves the length of the thought's reactions array field on query
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// Initialize the thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;