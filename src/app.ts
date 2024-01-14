import express from "express";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.get("/", (_, res) => {
  res.send("ok");
});

export default app;
