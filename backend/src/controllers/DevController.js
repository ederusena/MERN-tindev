const Axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async index(req, res){
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ],
    });
    return res.json(users);
  },
  async store(req, res){
    const { username } = req.body;

    const useExists = await Dev.findOne({ user: username });
    if(useExists){
      return res.send(useExists);
    }

    const response = await Axios.get(`https://api.github.com/users/${username}`);
    const { name, bio, avatar_url } = response.data;
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar: avatar_url,
    })
    return res.send({ dev });
  }
};