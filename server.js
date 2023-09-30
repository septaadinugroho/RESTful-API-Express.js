const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

app.set("view engine", "hbs");
//setting folder handlebar buat templating engine
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

//middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  //req.method adalah method, req.baseUrl adalah pathnya, req.url adalah waktu requestnya
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

//pake path join supaya bisa dirun dari folder mana aja
app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());
//pathnya sudah diinisialisasi sehingga pada routesnya pathnya hanya / saja
app.get("/", (req, res) => {
  res.render("index", {
    title: "My friends are very clever",
    caption: "Let's go skiing",
  });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
