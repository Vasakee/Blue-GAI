import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signupDto } from 'src/user/dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup') 
    signUp(@Body() signupDto: signupDto): Promise<{token: string}> {
        return this.authService.signUp(signupDto)
    }

    @Get('/signin')
    login(@Body() loginDto:LoginDto): Promise<{token: string}>{
    return this.authService.login(loginDto)
    }
}