export declare class User {
    id: number;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
