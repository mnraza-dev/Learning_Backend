export const getRequest = (req, res) => {
  res.status(200).json({ message: "Request sent" });
};
export const getAllRequests = (req, res) => {
  res.status(200).json({ message: "All requests" });
};
export const acceptRequest = (req, res) => {
  res.status(200).json({ message: "Request accepted" });
};
