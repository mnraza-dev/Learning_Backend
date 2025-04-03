export const getRequest = (req, res) => {
  res.status(200).json({ message: "Request sent" });
};
export const getAllRequests = (req, res) => {
  res.status(200).json({ message: "All requests" });
};
export const acceptRequest = (req, res) => {
  res.status(200).json({ message: "Request accepted" });
};
export const sendConnectionRequest = async (req, res) => {
  try {
    const user = req.user;
    const fullname = user.firstName + " " + user.lastName;

    res.json({ message: "Connection request sent by " + fullname });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
