import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserInputError } from 'apollo-server-errors';
import loginInput from './dto/login.input';
import { ForbiddenError } from 'apollo-server-express';
// import { ForbiddenError } from 'apollo-server-errors';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService) {}

    //validate user
    async validateUser(loginInput: loginInput): Promise<any>{
        const user = await this.usersService.findByEmail(loginInput.email); //find if recieved email is exists

        const passwordMatch = await bcrypt.compare(loginInput.password, user.password);//compare recieved password with password in DB

        //then check if it's correct password
        if(user && passwordMatch){
                const {password, ...rest} = user;
                return rest; //
        }else {
            throw new ForbiddenError('Incorrect pasword');
        }

        // if(user && user.password === loginInput.password){
        //     const {password, ...rest} = user;
        //             return rest;
        // }

        // //if do not find user or password does not exist
        // return null;
    }

    async login(loginInput: loginInput){

        const payload = { name: loginInput.email};

        return this.jwtService.sign(payload);
    }
}
