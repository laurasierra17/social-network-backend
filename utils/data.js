const usernames = [
  'zuko123',
  'zuckerberggg',
  'theflyingtesla',
  'sanders4prez',
  'kanye',
  'obamaB'
];

// const thoughtBodies = [
//   'How to disagree with someone',
//   'iPhone review',
//   'how-to video',
//   'video essay on the history of video games',
//   'How to make money on the App Store',
//   'Learn NextJS in five minutes (Not clickbate)',
//   'Movie trailer',
//   'Hello world',
//   'Another possible solution to the algorithm',
//   'Apology video',
//   'Submission for startup pitch',
// ];

// const possibleReactions = [
//   'I disagree!',
//   'I tried your algorithm, here were the results',
//   'This was awesome',
//   'Thank you for the great content',
//   'Please check out my video response',
//   'Like and subscribe to my channel please',
//   'Reply: The side effects of in app purchases on digital marketplaces',
// ];


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate random thoughts that we can add to the database. Includes thoughts reactions.
// const getRandomThoughts = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtText: getRandomArrItem(thoughtBodies),
//       username: getRandomArrItem(usernames),
//       reactions: [...getThoughtReactions(1)],
//     });
//   }
//   return results;
// };

// Create the responses that will be added to each video
// const getThoughtReactions = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleReactions);
//   }
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       reactionBody: getRandomArrItem(possibleReactions),
//       username: getRandomArrItem(usernames),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js
module.exports = { usernames };
