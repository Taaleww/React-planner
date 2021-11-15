import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){ //validation
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //request and validate it
            ignoreExpiration: false,
            secretOrKey: 'SECRET' //protect this, move to env vars
        });
    }

    async validate(payload: any){
        // const user = await this.usersService.getById(payload.sub)
        return {
            email: payload.sub,
            name: payload.name
        };
    }
}