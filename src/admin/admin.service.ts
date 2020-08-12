import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
    constructor(@InjectModel('Admin') private readonly AdminModel){}

    async getUserByName(name){
       return await this.AdminModel.findOne({username:name}).exec()
    }

    async  register(body){
        let pass = await this.registers(body.username.toString(),body.password);
        console.log("加密后的密码:"+pass);
        let users = await  this.AdminModel.find({},{username:1}).exec();
        for(var i=0;i<users.length;i++){
            if(users[i].username == body.username.toString()){
                console.log("用户已经存在");
                return false;
            }
        }
         this.AdminModel({username:body.username.toString(),password:pass,role:['p2']}).save();
         return true;
         // this.AdminModel.insert({username:body.username.toString(),password:body.password}).exec()
    }

    async  registers(name: string, pass: string){
        const saltRounds = 10;
        return bcrypt.hash(pass, saltRounds);
    }

    async login(body){
        console.log("测试"+body.username);
        let user = await this.AdminModel.findOne({username:body.username.toString()}).exec();
        if(user == null){
            return false;
        }
        // console.log(user.password);
        let check= await bcrypt.compare(body.password.toString(), user.password.toString());
        if(check != true){
            return null;
        }
        return user;
        //笔记:传递的查询条件参数类型需要与schema规则中定义的一致
 //       parseInt(body.password)
 // let count = await this.AdminModel.find({username:body.username.toString(),password:body.password.toString()}).countDocuments().exec();
    }
}
