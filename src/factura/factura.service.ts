import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Injectable()
export class FacturaService {
  factura = []
  create(createFacturaDto: CreateFacturaDto) {
    this.factura.push(createFacturaDto)
    return 'factura creada con exito';
  }

  findAll() {
    return this.factura;
  }

  findOne(numero: number) {
    const facturaBuscada = this.factura.find(factura => factura.factura === numero)
    if (facturaBuscada == undefined)
    return `factura con factura ${numero}, no existe`;
  else
  return facturaBuscada
  }

  update(id: number, _updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  remove(codigo: number) {
    const indice = this.factura.findIndex(factura => factura.factura === codigo)
    if(indice === -1)
      return `la factura sin factura: ${codigo}, No existe`
    else{
      this.factura.splice(indice,1)
      return `la factura con factura: ${codigo}, fue elimidado`;
    }
   
  }
    
  }

