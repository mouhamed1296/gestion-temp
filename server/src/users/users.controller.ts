import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConsoleLogger,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EmailAlreadyExistsException } from './exceptions/emailAlreadyExists.exception';
import { Role } from './dto/login-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuthGuard';
import RoleGuard from 'src/auth/guards/roleGuard';

@Controller('users')
export class UsersController {
  logger = new ConsoleLogger();
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    //Verifier si un compte avec le meme mail existe déja
    const user = await this.usersService.findOne(createUserDto.email);
    if (user) {
      throw new EmailAlreadyExistsException();
    }
    //creer le compte si le mail n'existe pas encore
    return this.usersService.create(createUserDto);
  }

  //Récupérer tous les utilisateur
  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  //Récuperer un utilisateur à travers son mail
  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  //Recupérer un utilisateur à travers son matricule
  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Get('search/:matricule')
  search(@Param('matricule') matricule: string) {
    return this.usersService.search(matricule);
  }

  //Modifier un utilisateur à travers son id
  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Patch('switch/:id')
  switch(@Param('id') id: string) {
    return this.usersService.switch(id);
  }

  //Archiver un utilisateur à travers son id
  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  //Desarchiver un utilisateur à travers son id
  @UseGuards(JwtAuthGuard, RoleGuard(Role.Admin))
  @Patch('restore/:id')
  restore(@Param('id') id: string) {
    return this.usersService.restore(id);
  }
}
