export interface UserDetails {
    username: string;
    login: string;
    password: string;
    phone: string;
    email: string;
    address: string;
    userId?: number;
}

export class User {
    constructor(public user: UserDetails) {
        this.user = user;
        
        if (!user.userId) {
            this.user.userId = this.randomId(1000, 0);
        }
    }

    public randomId(upperLimit: number, lowerLimit: number): number {
        return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    }
}