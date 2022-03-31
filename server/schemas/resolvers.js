const { User } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },

        me: async (parent, {userId}) => {
            return User.findOne({_id: userId})
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return User.create({ username, email, password })
        },
        removeBook: async (parent, {bookId}) => {
            return User.findOneAndUpdate(
                {bookId},
                {$pull: {savedBooks: bookId} },
                {new:true}
                );
        }
       

    }
};





module.exports = resolvers;
 
 // saveBook: async (parent, {BookInput}) => {
        //     return User.findOneAndUpdate()
        // }