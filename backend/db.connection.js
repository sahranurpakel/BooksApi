const mongoose = require("mongoose");
const db_connection_string = process.env.MONGO_CONNECTION_STRING;
try {
  mongoose
    .connect(db_connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to Db ");
    });
} catch (error) {
  console.log("Someting went wrong !!!");
}
