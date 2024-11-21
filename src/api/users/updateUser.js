const UserModel = require("../../models/UserModel");

const updateUser = async (req, res, next) => {
  try {
    const userEmail = req.query.email;
    const updatedUser = req.body;

    const result = await UserModel.findOneAndUpdate(
      { email: userEmail },
      updatedUser,
      { new: true }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateUser;
