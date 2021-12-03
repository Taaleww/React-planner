import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { constant } from "../constant";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){ //validation
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //request and validate it
            ignoreExpiration: false,
            secretOrKey: constant.secret //secret key for authentication
        });
    }

    async validate(payload: any){
        return {
            email: payload.sub,
            name: payload.name,
            id: payload.id
        };
    }
}