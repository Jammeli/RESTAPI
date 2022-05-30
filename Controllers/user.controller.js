const Users = require("../Models/UserModel");
const AddUser = async (req, res) => {
  try {
          await Users.create(req.body);
          res.status(201).json({ message: "User added with success" });
    
  } catch (error) {
    console.log(error.message);
  }
};
const Find = async (req, res) => {
  try {
          const data = await Users.find();
          res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const Update = async (req, res) => {
  try {
    const data = await Users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(201).json(data);
  
  } catch (error) {
    console.log(error.message);
  }
};


const Delete = async (req, res) => {
  try {
    const data = await Users.delete(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(201).json(data);
  
  } catch (error) {
    console.log(error.message);
  }
};

module.exports={AddUser, Find, Update, Delete}