// // const { GoogleGenerativeAI } = require("@google/generative-ai");
// // require('dotenv').config();


// // // Access your API key as an environment variable (see "Set up your API key" above)
// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

// // async function run() {
// //   // For text-only input, use the gemini-pro model
// //   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// //   const prompt = "Write a story about a magic backpack."

// //   const result = await model.generateContent(prompt);
// //   const response = await result.response;
// //   const text = response.text();
// //   console.log(text);
// // }

// // run();




// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require('dotenv').config();
// const Twitter = require('twitter-lite');
// const CronJob = require('cron').CronJob;


// const twitterClient = new Twitter({
//     consumer_key: process.env.CONSUMER_KEY,
//     consumer_secret: process.env.CONSUMER_SECRET,
//     access_token_key: process.env.ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.ACCESS_TOKEN_SECRET,
//     bearer_token: process.env.BEARER_TOKEN
//   });

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
// const job = new CronJob('0 */30 * * * *', async () => {
// // async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//   const prompt = "You are a solo developer and likes to build products . you are always interested in saas , startups and new technology. you have a twitter account where you document your journey. write a tweet in the same manner as your personality."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();



//   const tweet = text;

//   // Post the tweet to Twitter.
// //   await twitterClient.post('statuses/update', { status: tweet });
//   try {
//     const postTweet = await twitterClient.tweets.createTweet({
//       // The text of the Tweet
//       text: text,

//       // Options for a Tweet with a poll
//     //   poll: {
//     //     options: ["Yes", "Maybe", "No"],
//     //     duration_minutes: 120,
//     //   },
//     });
//     console.dir(postTweet, {
//       depth: null,
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(`Tweeted: ${tweet}`);


//   console.log(text);
// // }

// // run();
// }, null, true,);

// job.start();