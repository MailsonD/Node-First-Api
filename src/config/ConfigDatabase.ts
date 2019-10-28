import mongoose from 'mongoose';

export default class ConfigDatabase {
  public static config(): void {
    mongoose.connect('mongodb://localhost:27017/firstApi', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('Connection acepted!');
    }).catch((err) => {
      console.log(err);
    });
  }
}
