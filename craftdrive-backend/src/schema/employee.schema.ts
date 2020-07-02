import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema(
  {
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    phone: String,
  },
  { _id: false, versionKey: false },
);
