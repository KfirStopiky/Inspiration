const express = require("express");
const app = express();
const port = 5000;
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const connect_to_mongo_server = require("./dbConfig");

dotenv.config();
connect_to_mongo_server();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`server is up & running on port ${port},let's get crazy`);
});
