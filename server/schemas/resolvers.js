const { Profile } = require("../models");
const { Note } = require("../models");

const resolvers = {
  Mutation: {
    signUp: async (parent, { email, password }) => {
      const profile = await Profile.create({ email, password });
      console.log(profile);
      const token = signToken(profile);
      return { token, profile };
    },
    signIn: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }
      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};
