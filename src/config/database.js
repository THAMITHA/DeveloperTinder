const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://nodeProject:N82RK4IoXkBwcbEs@cluster0.gntsfly.mongodb.net/devTinder"
    );
}

module.exports = connectDB
