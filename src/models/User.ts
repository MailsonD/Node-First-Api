import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
  email: String,
  name: String,
  age: Number,
});

export default model('User', UserSchema);
