import "dotenv/config";
import app from "./app";
import db from "./config/dbConfig";

db.then(() => {
  console.log("✅ Connected with Database!!!");
  app.listen(process.env.PORT, () => {
    console.log(
      `✅ Listening on port ${process.env.PORT} | http://localhost:${process.env.PORT}`
    );
  });
}).catch(() =>
  console.log("⛔ Attempt to connect tos the database without success.")
);
