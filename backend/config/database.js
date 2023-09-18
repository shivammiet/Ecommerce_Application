const mongoose = require('mongoose');

const connectDatabase = () => {
    
    mongoose.connect(process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex:true
        }).then((data) => {
            console.log(`MongoDb Connected with server : ${data.connection.host}`);
        });
}

module.exports = connectDatabase