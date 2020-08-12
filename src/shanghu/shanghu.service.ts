import {Injectable, ParseIntPipe} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class ShanghuService {
    constructor(@InjectModel('User') private readonly UserModel,@InjectModel('Bank') private readonly BankModel){}
   //绑定银行卡
    async bank(body){
        console.log(body);
        const accounts = await this.UserModel.findOne({account:body.account,mainaccount:body.mainaccount}).exec();
        console.log(accounts);
        if(accounts != null){
            const banks = await this.BankModel.findOne({account:body.account,mainaccount:body.mainaccount}).exec();
            if(banks == null){
                //默认待审核
                body.check = "0";
                console.log(new Date('YYYY-MM-DD'));
                body.time = new Date();
                const bank = await this.BankModel(body).save();
                return 3;
            }else{
                console.log("该银行卡已经绑定");
                return 2;
            }

        }else {
            console.log("用户不存在");
            return 1;
        }
    }
    //开户
    async register(body){
        const accounts = await this.UserModel.findOne({account:body.account}).exec();
        console.log(accounts);
        if(accounts ==null){
            body.rate=  parseFloat(body.rate);
            this.UserModel(body).save();
            return await 0;
        }else {
            console.log("用户已经存在");
            return await 1;
        }

    }

    //根据用户名获取用户信息
    async getAccount(account){
      const accounts = await this.UserModel.findOne({account:account}).exec();
      return await accounts;
    }
    //修改密码
    async changepassword(body){
        // this.StudentModel.updateOne({_id:body._id.toString()},{$set:{name:body.name,age:body.age,address:body.address}}).exec();

      const result = await this.UserModel.updateOne({account:body.account},{$set:{password:body.password}}).exec();
      if(result.ok == 1){
          return true;
      }else {
          return false;
      }
    }

}
