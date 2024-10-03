const { name } = require("ejs");
const express = require("express");
const app = express();
const path = require("node:path");
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index", { links: links, users: users }));
app.get("/about", (req, res) => {
  res.render("about", { name: "Lakshya Tyagi" });
});
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first express App - listening on port ${PORT}`)
);
