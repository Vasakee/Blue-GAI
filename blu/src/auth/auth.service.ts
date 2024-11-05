import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/Auth.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { signupDto } from 'src/user/dtos/signup.dto';
import * as bcrypt from 'bcryptjs'
import { SigninDto } from 'src/user/dtos/Signin.dto';

@Injectable()
export class AuthService {
   constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
   ) {}

   async signUp(signUpDto: signupDto): Promise<{token: string}> {

    const {email, password} = signUpDto

    const hashedPassword = await bcrypt.hash(password, 10)
   
    const userExists = await this.userModel.findOne({email})
    if(userExists) {
        throw new UnauthorizedException('User already exists')
    }

    const user = await this.userModel.create({
        email,
        password: hashedPassword
    })
     console.log(user)

    const token = this.jwtService.sign({ id: user._id })
    return { token }

   } 

   async login(loginDto: SigninDto): Promise<{ token: string }> {

    const { email, password } = loginDto

    const user = await this.userModel.findOne({ email })

    if (!user) {
        throw new UnauthorizedException('User with this email not found')
    }

    const matchedPassword = await bcrypt.compare(password, user.password)

    if (!matchedPassword) {
        throw new UnauthorizedException('Wrong Password')
    }

    const token = this.jwtService.sign({ id: user._id })

    return { token }
 }
}
