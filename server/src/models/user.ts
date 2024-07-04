import { Schema, model } from 'mongoose';
import { IUser } from '@/types/models';

const userSchema = new Schema<IUser>(
  {
    username: String,
    password: String,
    confirmation: String,
    country: String,
    email: String,
    sexe: String,
    terms: Boolean,
  },
  { timestamps: true }
);

const User = model<IUser>('User', userSchema, 'users');

export default User;