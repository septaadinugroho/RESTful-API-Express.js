const path = require("path"); // /folder/files.jpg

//tidak menggunakan arrow function agar saat eror, node dapat memberi informasi function yang eror
function getMessages(req, res) {
  //   res.send("<ul><li>Hello Septa</li></ul>");
  // res.sendFile(path.join(__dirname, "..", "public", "images", "skimountain.jpg"));
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Septa Adi Nugroho",
  });
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
