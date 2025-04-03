
export const getProfile = async (req, res) => {
  try {
    const user = req.user;
    res.send("Logged in User details : " + user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};