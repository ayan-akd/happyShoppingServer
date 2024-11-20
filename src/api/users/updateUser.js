const UserModel = require("../../models/UserModel");

const updateUser = async (req, res, next) => {
  try {
    const userEmail = req.query.userEmail;
    const user = req.body;
    const result = await UserModel.updateOne(
      { email: userEmail },
      { role: user.role }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateUser;
