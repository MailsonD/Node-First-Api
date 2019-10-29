import {Schema, model} from 'mongoose';
import User from '../models/User';

const UserSchema = new Schema({
  email: String,
  name: String,
  age: Number,
});

export default model<User>('User', UserSchema);
