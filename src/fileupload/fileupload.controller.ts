import {
    Controller, Get, Post, Query, Render, UseFilters, Response, Body, UsePipes, Param,
    UploadedFile, UseInterceptors, UploadedFiles
} from '@nestjs/common';
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {doc} from "prettier";
import * as fs from 'fs';

@Controller()
export class FileuploadController {
    @Get('/upload')
    @Render('C:\\Users\\ljf\\Desktop\\nest\\nest-demo\\src\\view\\fileupload.ejs')
    file(){

    }

    //单文件上传
    @Post('/fileupload')
    @UseInterceptors(FileInterceptor('file'))
    fileupload(@UploadedFile() file,@Body() body){
        let filename = file.originalname;
        console.log(body);
        console.log(file);
        fs.writeFileSync('./public/upload/'+filename, file.buffer);
        return '上传成功';
    }

    //多文件上传
    @Post('/fileuploads')
    @UseInterceptors(FilesInterceptor ('file'))
    fileuploads(@UploadedFiles() files,@Body() body){
        console.log(body);
        console.log(files);
           for(let i = 0;i<files.length;i++){
  fs.writeFileSync('./public/upload/'+files[i].originalname, files[i].buffer);
           }
        console.log(body);
        console.log(files);
        return '上传成功';
    }
}
