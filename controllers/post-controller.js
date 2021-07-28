const { Thought } = require('../models');

const thoughtController = {
    //get all thoughts
    getThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'users',
                select: '-__v'
            })
            .select('-__v')
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
        },
    // get on thought
    getThought({params}, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'users',
                select: '-__v'
            })
            .select('-__v')
            .then(thoughtData => {
                if(!thoughtData) {
                    res.status(404).json({ message: 'Cannot find any posts.'});
                    return;
                }
                res.json(thoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
        
        },
    createThought({body}, res) {
        Thought.create(body)
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            res.status(400).json(err);
        })
    },
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate({ _id: params }, body, { new: true })
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: 'Cannot find any posts.'});
                return;
            }
            res.json(thoughtData)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    },
    deleteThought({params}, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: 'Cannot find any posts.'})
            }
            res.json(thoughtData);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    }
}

module.exports = thoughtController;