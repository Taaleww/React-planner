import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";
import { constant } from "../constant";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  
    constructor(private readonly userService: UserService){ //validation
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //request and validate it
            ignoreExpiration: false,
            secretOrKey: constant.secret //secret key for authentication
        });
    }

    async validate(payload: any){
        console.log(payload);
        
        const { password, ...rest } = 
        await this.userService.findOne(payload.sub);
        console.log(rest.email);
        
      return rest;
    }
}