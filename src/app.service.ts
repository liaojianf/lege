import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class AppService {
  constructor(@InjectModel('Student') private readonly StudentModel){}

  async getcount(){
      return await this.StudentModel.find().countDocuments().exec();
  }

    async getUserById(id){
        return await this.StudentModel.findOne({_id:id}).exec();
    }
  async getUser(page){
      //根据年龄升序排列
      parseInt(page);
      return await this.StudentModel.find({}).skip(5*parseInt(page)).limit(5).exec();
  }
  insert(user){
      this.StudentModel(user).save();
  }
    insertManyUser():String{
    var stu = [{
            "name" : "猪八戒",
            "age" : 666,
            "gender" : "male",
            "address" : "朱老庄",
            "__v" : 1
        }, {
            "name" : "唐僧",
            "age" : 666,
            "gender" : "male",
            "address" : "东土大唐",
            "__v" : 1
        }, {
            "name" : "孙悟空",
            "age" : 666,
            "gender" : "male",
            "address" : "五指山",
            "__v" : 1
        }, {
            "name" : "沙和尚",
            "age" : 666,
            "gender" : "male",
            "address" : "流沙河",
            "__v" : 1
        }];
    for(var i =0;i<stu.length;i++){
        this.StudentModel(stu[i]).save();
    }
        return  "插入成功";
    }
     updateUser(body){
         this.StudentModel.updateOne({_id:body._id.toString()},{$set:{name:body.name,age:body.age,address:body.address}}).exec();
        return  "更新成功";
    }
    deleteUser(id){
        this.StudentModel.deleteOne({_id:id}).exec();
        return  "删除成功";
    }

    deleteUsers(ids){
        for(var i=0;i<ids.length;i++){
            this.StudentModel.deleteOne({_id:ids[i]}).exec();
        }
        return  "删除成功";
    }
}
