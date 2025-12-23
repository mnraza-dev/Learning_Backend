import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Amit Sharma",
            "email": "amit.sharma@example.com",
            "role": "admin"
        },
        {
            "id": 2,
            "name": "Neha Verma",
            "email": "neha.verma@example.com",
            "role": "user"
        },
        {
            "id": 3,
            "name": "Rahul Mehta",
            "email": "rahul.mehta@example.com",
            "role": "moderator"
        },
        {
            "id": 4,
            "name": "Priya Singh",
            "email": "priya.singh@example.com",
            "role": "user"
        },
        {
            "id": 5,
            "name": "Arjun Patel",
            "email": "arjun.patel@example.com",
            "role": "user"
        }
    ]
    getAllUsers(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }
    getUserById(id: number) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    createUser(user: { name: string, email: string, role: 'INTERN' | 'ADMIN' | 'ENGINEER' }) {
        const newUser = {
            id: this.users.length + 1,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id: number, user: { name?: string, email?: string, role?: 'INTERN' | 'ADMIN' | 'ENGINEER' }) {
        const existingUser = this.users.find(user => user.id === id);
        if (existingUser) {
            Object.assign(existingUser, user);
            return existingUser;
        }
        return null;
    }
    deleteUser(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return { message: `User with id ${id} deleted successfully` };
        }
        return { message: `User with id ${id} not found` };
    }
}