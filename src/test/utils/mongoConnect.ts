import { config as configDotenv } from 'dotenv';
configDotenv();

import * as mongoose from 'mongoose';

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const connect =  () =>
  new Promise((resolve, reject) =>
    mongoose.connect(`mongodb://localhost:${MONGO_PORT}/typegoosetest`, {},
      (err) => (err ? reject(err) : resolve())),
  );

export const initDatabase = async () => {
  await connect();
  await mongoose.connection.db.dropDatabase();
};

export const closeDatabase = async () => await mongoose.connection.close();
