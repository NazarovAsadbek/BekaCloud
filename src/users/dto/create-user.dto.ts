import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'mr.beka.2904@mail.ru',
  })
  email: string;

  @ApiProperty({
    default: 'Nazarov Asadbek',
  })
  fullName: string;

  @ApiProperty({
    default: 'coolGuy',
  })
  password: string;
}
