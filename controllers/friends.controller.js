const model = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name) {
    //fungsi return adalah membuat json teman jika data yg diinput benar, jika tanpa return akan ada notifikasi eror
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getIndividualFriend(req, res) {
  const id = Number(req.params.id);
  const onefriend = model[id];
  if (onefriend) {
    res.status(200).json(onefriend);
  } else {
    res.status(404).json({
      error: "Friend doesn't exist",
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getIndividualFriend,
};
