import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        
        //to check if user is authenticated
        return request.isAuthenticated;
    }
}