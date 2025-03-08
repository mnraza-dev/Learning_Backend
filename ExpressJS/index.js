import express from "express";
const app = express();
const PORT = 3000;

const users = [
  {
    _id: 1,
    name: "MN Raza",
    email: "user1@example.com",
    phone: 1234567890,
    position: "Developer",
    salary: 50000,
  },
  {
    _id: 2,
    name: "Ali Khan",
    email: "user2@example.com",
    phone: 1234567891,
    position: "Software Engineer",
    salary: 60000,
  },
  {
    _id: 3,
    name: "Aisha Noor",
    email: "user3@example.com",
    phone: 1234567892,
    position: "UI/UX Designer",
    salary: 55000,
  },
  {
    _id: 4,
    name: "Omar Farooq",
    email: "user4@example.com",
    phone: 1234567893,
    position: "Product Manager",
    salary: 70000,
  },
  {
    _id: 5,
    name: "Sara Ahmed",
    email: "user5@example.com",
    phone: 1234567894,
    position: "QA Engineer",
    salary: 52000,
  },
  {
    _id: 6,
    name: "Bilal Hussain",
    email: "user6@example.com",
    phone: 1234567895,
    position: "DevOps Engineer",
    salary: 65000,
  },
  {
    _id: 7,
    name: "Zain Malik",
    email: "user7@example.com",
    phone: 1234567896,
    position: "Full Stack Developer",
    salary: 68000,
  },
  {
    _id: 8,
    name: "Hina Sheikh",
    email: "user8@example.com",
    phone: 1234567897,
    position: "Data Scientist",
    salary: 75000,
  },
  {
    _id: 9,
    name: "Rizwan Siddiqui",
    email: "user9@example.com",
    phone: 1234567898,
    position: "Network Engineer",
    salary: 59000,
  },
  {
    _id: 10,
    name: "Nadia Pervez",
    email: "user10@example.com",
    phone: 1234567899,
    position: "Business Analyst",
    salary: 62000,
  },
];

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    data: users,
    error: null,
    success: true,
    statusCode: 200,
  });
});
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const existingUser = users.find((u) => u._id === id);
  if (!existingUser) {
    res.status(404).json({
      status: "fail",
      data: null,
      error: "User not found",
      success: false,
      statusCode: 404,
    });
  }

  res.status(200).json({
    status: "ok",
    data: existingUser,
    error: null,
    success: true,
    statusCode: 200,
  });
});
app.get("/about", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Welcome to About Route",
    data: null,
    error: null,
    success: true,
    statusCode: 200,
  });
});
app.get("/contact", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Welcome to Contact Route",
    data: null,
    error: null,
    success: true,
    statusCode: 200,
  });
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
