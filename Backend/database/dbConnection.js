import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "RESTURANT",
    })
    .then(() => {
        console.log("Connected to Database Successfully!");
    })
    .catch((err) => {
        console.error(`Some error occurred while connecting to the database! ${err}`);
    });
};
