import { IsNumber, IsString } from "class-validator";

export class CreateFacturaDto {

    @IsNumber()
    factura : number;
    @IsString()
    fecha: string;
    @IsString()
    cliente: string;  
}
