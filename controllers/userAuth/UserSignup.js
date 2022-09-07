const Joi = require("joi");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const schema = require("../../validators/v1/project");
const userSchema = schema.createUserSchema;
const User = require("../../models/user.model");
const { v4: uuidv4 } = require("uuid");

const UserSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password: plainTextPassword,
    comfirmPassword,
  } = req.body;

  const data = {
    firstName,
    lastName,
    email,
    phoneNumber,
    plainTextPassword,
    comfirmPassword,
  };

  try {
    const password = await bcrypt.hash(plainTextPassword, 10); // salt is 10;

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      user_id: uuidv4(),
    });

    const userID = newUser.user_id;
    const token = jwt.sign(
      { phoneNumber, email, userID },
      process.env.JWT_AUTH_SECRET
    );

    res.status(200).json({
      status: "success",
      message: "user registered successfully",
      code: 200,
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "failed",
      message: "email or phone already exists",
      code: 200,
    });
  }
};

module.exports = { UserSignup };
