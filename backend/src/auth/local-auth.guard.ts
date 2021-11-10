import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){ 
    //use Guard to trigger if user do not log in
    //and tell us that we use 'Local Strategy'
}