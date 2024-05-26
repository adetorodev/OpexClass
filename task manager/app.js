const express = require("express");
const connectDb = require("./db/connect");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")
const notFound = require("./middleware/not-found");
const errorHnadlerMiddleware = require("./middleware/error-handler");
const tasks = require("./routes/task");
dotenv.config();
app.use(express.static("./public"));
app.use(express.json);
app.use(cors());

app.use("api/vi/tasks", tasks);
app.use(notFound);
app.use(errorHnadlerMiddleware);
const port = process.env.PORT || 5000;
const start = async () => {
  await connectDb(process.env.DBURL);
  console.log("DB Connected");
  app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
  });
};
// app.listen(PORT)

start();
