import express from 'express';
const app = express();

let courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
];

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the courses API');
});

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
});
