const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames, getRandomThoughts, getThoughtReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    const email = `${username}@email.com`;

    users.push({
      username,
      email
    });
  }

  await User.collection.insertMany(users);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
