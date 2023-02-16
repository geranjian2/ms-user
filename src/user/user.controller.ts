import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserDTO } from './dto/user.sto';
import { UserService } from './user.service';
import { UserMSG } from '../common/contants';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @MessagePattern(UserMSG.CREATE)
  create(@Payload() _userDTO: UserDTO) {
    return this.userService.create(_userDTO);
  }
  @MessagePattern(UserMSG.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }
  @MessagePattern(UserMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.userService.findOne(id);
  }
  @MessagePattern(UserMSG.UPDATE)
  update(@Payload() payload: any) {
    return this.userService.update(payload.id, payload._userDTO);
  }
  @MessagePattern(UserMSG.DELETE)
  delete(@Payload() id: string) {
    this.userService.delete(id);
  }
  @MessagePattern(UserMSG.VALIDATE_USER)
  async validateUser(@Payload() payload) {
    const user = await this.userService.findByUsername(payload.username);
    const isValidatePassword = await this.userService.heckPassword(
      payload.password,
      user.password,
    );
    if (user && isValidatePassword) return user;
    return null;
  }
}
