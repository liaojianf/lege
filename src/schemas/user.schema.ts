import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    account: String,
    Merchants: String,
    type:String,
    password:String,
    rate:Number,
    mainaccount:String
});
