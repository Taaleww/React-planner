import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){ 
    //use Guard to trigger if user do not log in
    //and tell us that we use 'Local Strategy'

        async canActivate(context: ExecutionContext){
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();

        await super.logIn(request); //trigger passort to use session
        return result; 
    }
}