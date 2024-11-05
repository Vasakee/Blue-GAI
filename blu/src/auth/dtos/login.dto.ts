import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator"


export class LoginDto {

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter correct email' })
    readonly email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @IsStrongPassword()
    readonly password: string
}