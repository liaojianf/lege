

export class CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string;

    validate(value):Boolean{
        if(value.name == 'sdf'){
            return true;
        }else {
            return false;
        }


    }
}