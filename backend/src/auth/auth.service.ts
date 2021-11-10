import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { ForbiddenError } from 'apollo-server-errors';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    //validate user
    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.usersService.findByEmail(email); //find if recieved email is exists

        const passwordMatch = await bcrypt.compare(password, user.password);//compare recieved password with password in DB

        //then check if it's correct password
        if(user && passwordMatch){
                const {email, firstname, lastname, job, department, organization} = user;
                return user; //
        }else {
            throw new ForbiddenError('Incorrect pasword');
        }

        //if do not find user or password does not exist
        //return null;
    }
}
