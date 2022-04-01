const { User } = require('../models')
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {

        // users: async () => {
        //     return await User.find({})
        // },

      
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).select('-__v -password');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    },


    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)

            return {token, user }
        },


        login: async (parent, { email, password }) => {
            const user = await Profile.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
        }, 
   


        saveBook: async (parent, {userBooks}, context) => {
            if (context.user) {
                const addUserBook = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {savedBooks: userBooks} },
                    {new: true}
                );

                return addUserBook;
            }
            throw new AuthenticationError('You need to be logged in!');
        },


        removeBook: async (parent, {bookId}, context) => {
            if (context.user)
                return User.findOneAndUpdate(
                    {_id: context.user._id },
                    {$pull: {savedBooks: bookId} },
                    {new:true}
                );
                throw new AuthenticationError('You need to be logged in!');
        }
       
       
    }
};





module.exports = resolvers;
 
 // saveBook: async (parent, {BookInput}) => {
        //     return User.findOneAndUpdate()
        // }


          // users: async () => {
        //     return await User.find({})
        // },
