const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
           type: Date,
           default: Date.now
        },
        // (the user that created this thought)
        username: {
            type: String,
            required: true
        },
        // reactions serve as 'replies'
        reactions: {
            type: Schema.Types.ObjectId,
            ref: [reactionSchema]
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
          },
          id: false 
    }
);

// get total count of friends on retrieval
UserSchema.virtual('reactionCount').get(function() {
    return this.reactions.reduce(
      (total, reactions) => total + reactions.length + 1,
      0
    );
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;