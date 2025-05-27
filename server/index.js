const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const locationRouter = require('./routes/locationRoutes');

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use('/api/user', userRouter);
app.use('/api/location', locationRouter);
app.get('/', (req, res) => res.send('api is running'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Database connected'));