import User from "../models/user.model";

export const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    console.log("req.body: ", req.body);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
