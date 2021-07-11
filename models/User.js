const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            require: true,
            trim: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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
UserSchema.virtual('friendCount').get(function() {
    return this.comments.reduce(
      (total, comment) => total + comment.replies.length + 1,
      0
    );
  });

const User = model('User', UserSchema);

module.exports = User;