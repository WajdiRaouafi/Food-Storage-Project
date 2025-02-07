import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<User | null>;
    register(username: string, password: string): Promise<User>;
    generateToken(user: User): Promise<{
        access_token: string;
    }>;
}
