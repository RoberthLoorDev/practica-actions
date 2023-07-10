import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {

  private clientes: Cliente[]=[
    {id:1, nombre:'Roberth', identificacion:'13244565' },
    {id:2,nombre:'David', identificacion:'123345456' },
  ]

  create( createClienteDto: CreateClienteDto) {
    const cliente = new Cliente();
    cliente.id=  Math.max( ... this.clientes.map(elemento => elemento.id),0 )+1 ;
    cliente.nombre= createClienteDto.nombre;
    cliente.identificacion= createClienteDto.identificacion;
    this.clientes.push(cliente);
    return cliente;
  }

  findAll() : Cliente[] {
    return this.clientes;
  }

  findOne(id: number) {
    const cliente =  this.clientes.find(cliente=> cliente.id===id);
    if (!cliente) throw new NotFoundException(`ID ${id} not found`)
    return cliente;
  }

  update(id2: number, updateClienteDto: UpdateClienteDto) {
    const { id, nombre, identificacion} = updateClienteDto;
    const cliente = this.findOne(id2);
    if (nombre) cliente.nombre= nombre;
    if (identificacion) cliente.identificacion= identificacion;

    this.clientes =  this.clientes.map( elemento=> {
      if (elemento.id===id2) return cliente;
      return elemento;
    } )

    return cliente;

  }

  remove(id: number) {
    this.findOne(id);
    this.clientes =  this.clientes.filter(elemento=> elemento.id!== id);
  }
}
