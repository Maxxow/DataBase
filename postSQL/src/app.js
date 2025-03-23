const express =require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
