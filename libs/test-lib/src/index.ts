import { OmitType } from '@nestjs/swagger';

export class ADTO {
  public declare readonly foo: '';
}

export class BDTO extends OmitType(ADTO, ['foo']) {}
