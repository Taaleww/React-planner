import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserInputError } from 'apollo-server-errors';
import LoginInput from './dto/login.input';
import { ForbiddenError } from 'apollo-server-express';
// import { ForbiddenError } from 'apollo-server-errors';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService) {}

    //validate user
    async validateUser(LoginInput: LoginInput): Promise<any>{
        const user = await this.usersService.findByEmail(LoginInput.email); //find if recieved email is exists

        const passwordMatch = await bcrypt.compare(LoginInput.password, user.password);//compare recieved password with password in DB

        //then check if it's correct password
        if(user && passwordMatch){
                const {password, ...rest} = user;
                return rest; //
        }else {
            throw new ForbiddenError('Incorrect pasword');
        }
    }

    async login(LoginInput: LoginInput){
        const payload = { name: LoginInput.email};
        return this.jwtService.sign(payload);
    }
}
