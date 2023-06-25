import { Injectable, UnauthorizedException, NotFoundException, ConflictException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
    private readonly salt: string;
    private jwtService: JwtService;

    constructor(@InjectRepository(User) usersRepository: Repository<User>){
        super(usersRepository);
        this.salt = bcrypt.genSaltSync(10);
    }
    async checkPassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return await bcrypt.compare(password, hash);
    }

    async createUser(user: CreateUserDto): Promise<User> {
        const newUser = new User();
        return this.repo.save({ ...newUser, ...user });
    }
    async login(loginUserDto: LoginUserDto): Promise<{ token: string }> {
        this.jwtService = new JwtService({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60s' }
        })

        const { email, password } = loginUserDto;
        const user = await this.repo.findOne({ where: { email } });

        if (!user) {
            throw new UnauthorizedException('User does not exist');
        }

        if (!(await this.checkPassword(password))) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { sub: user.id };
        const token = this.jwtService.sign(payload);
        return { token };
    }

    async getListOfUsers(): Promise<User[]> {
        let users: User[] = [];
        users = await this.repo.find();
        return users;
    }
}