export const getProfile = async (req, res) => {
  try {
    const user = req.user;
    res.send("Logged in User details : " + user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const editProfile = async (req, res) => {
  try {
    const loggedinUser = req.user;
    if (!loggedinUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    Object.keys(req.body).forEach((key) => {
      loggedinUser[key] = req.body[key];
    });
    await loggedinUser.save();
    res.status(200).json({data: loggedinUser, message: "Profile updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}; 