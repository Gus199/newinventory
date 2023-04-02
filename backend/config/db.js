const mongoose = require('mongoose')


// mongoose.set("strictQuery", false);// added this line for deployment

const connectDB = async () => {
  try {
    // mongoose.set('strictQuery', false);// added this line for deployment
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB
