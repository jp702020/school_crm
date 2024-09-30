const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const path = require("../frontend/build");  // Use require() for path, to be consistent with CommonJS syntax

const app = express();
const Routes = require("./routes/route.js");

dotenv.config();
const PORT = process.env.PORT || 8000;


app.use(express.static('dist'));

// const _dirname = path.resolve();

// Body parser is already built into express from v4.16 onwards
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// API routes
app.use('/', Routes);

// Serve frontend static files
// app.use(express.static(path.join(_dirname, "../frontend/build")));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));  // Fixed typo from "indx.html" to "index.html"
// });

// Start server
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
