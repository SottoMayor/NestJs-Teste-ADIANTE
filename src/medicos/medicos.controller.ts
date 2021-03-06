import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateMedicoDto } from './DTO/create-medico.dto';
import { FilterMedicoDto } from './DTO/filter-medico.dto';
import { Medicos } from './medicos.entity';
import { MedicosService } from './medicos.service';

@Controller('medicos')
export class MedicosController {

    constructor(private medicosService: MedicosService){}

    @Get()
    public getMedicos(@Query() FilterMedicoDto: FilterMedicoDto): Promise<Medicos[]>{
        return this.medicosService.getMedicos(FilterMedicoDto)
    }

    @Get('/:id')
    public getMedicoById(@Param('id') id: string): Promise<any>{
        return this.medicosService.getMedicoById(id);
    }

    @Post()
    public createMedico(@Body() CreateMedicoDto: CreateMedicoDto): Promise<Medicos>{
        return this.medicosService.createMedico(CreateMedicoDto)
    }

    @Put('/:id')
    public uptadeMedicoById(@Param('id') id: string, 
    @Body() CreateMedicoDto: CreateMedicoDto): Promise<Medicos>{
        return this.medicosService.updatedMedicoById(id, CreateMedicoDto);
    }

    @Delete('/:id')
    public deleteMedicoById(@Param('id') id: string): void{
        this.medicosService.deleteMedicoById(id);
    }
    

}
