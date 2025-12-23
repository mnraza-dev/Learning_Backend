import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService) { }

    /**
     * GET /users
     * GET /users/:id
     * POST /users
     * PATCH /users/:id
     * DELETE /users/:id
     */

    @Get()       // GET /users or users?role=value
    getAllUsers(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
        return [
           []
        ];
    }

    @Get(':id')  // GET /users/:id
    getUserById(@Param('id') id: string): { id: string } {
        return {
            id
        };
    }

    @Post()  // POST /users
    createUser(@Body() user: { name: string, email: string, role: string }): { name: string, email: string, role: string } {
        return user;
    }

    @Patch(':id')  // PATCH /users/:id
    updateUser(@Param('id') id: string, @Body() user: { name?: string, email?: string, role?: string }): { id: string, name?: string, email?: string, role?: string } {
        return {
            id,
            ...user
        };
    }

    @Delete(':id')  // DELETE /users/:id
    deleteUser(@Param('id') id: string): { message: string } {
        return {
            message: `User with id ${id} deleted successfully`
        };
    }
}
