const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

// const task = new Task({
//   description: "Leetcode daily challenge",
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
