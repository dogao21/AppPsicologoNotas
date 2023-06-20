import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://admin:admin123@cluster0.cmqo7wr.mongodb.net/citaspsicologo?retryWrites=true&w=majority"
    );
    console.log("Db connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
