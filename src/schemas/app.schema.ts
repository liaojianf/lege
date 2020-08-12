import * as mongoose from 'mongoose';
export const StudentSchema = new mongoose.Schema({
    name: String,
    age:String,
    gender:{
        type:String,
        defaults:"female"
    },
    address: String
});
