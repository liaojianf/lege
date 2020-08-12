import * as mongoose from 'mongoose';
export const BankSchema = new mongoose.Schema({
    account: String,
    mainaccount:String,
    type:String,
    accountname:String,
    license:String,
    IDNumber:String,
    bank: String,
    bankcard:String,
    fname: String,
    tariff: String,
    gtariff: String,
    FIDNumber:String,
    check:{
        type:String,
        defaults:"0"
    },
    time:Date
});
