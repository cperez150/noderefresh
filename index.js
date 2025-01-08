const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const courses = [
  { id: 1, name: "chess" },
  { id: 2, name: "geography" },
  { id: 3, name: "math" },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//api/courses/1
app.get("/api/courses/:id", (req, res) => {
  const courseID = courses.find((c) => c.id === parseInt(req.params.id));
  if (!courseID) {
    res.status(404).send("Course with the ID provided is not found");
  }
  res.send(
    `Great news, we found what you were looking for the class is - ${courseID.name}`
  );
});

//post a course
app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);

  res.send(course);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//test
