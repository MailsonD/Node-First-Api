import Document from 'mongoose';

interface User extends Document {
    email?: string;
    name?: string;
    age?: number;
}

export default User;
