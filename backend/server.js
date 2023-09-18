const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handling uncaught exception

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to  uncaught Exception`);
    process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });
//connecting to Database
connectDatabase();



const server= app.listen(process.env.PORT, () => {
    
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
}
);

//Unhandleed Promise Rejecion

process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandled promise Rejection`);

    server.close(() => {
        process.exit();
    });
});

module.exports = app;