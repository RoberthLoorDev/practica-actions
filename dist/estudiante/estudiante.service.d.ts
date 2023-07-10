import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
export declare class ClienteService {
    private clientes;
    create(createClienteDto: CreateClienteDto): Cliente;
    findAll(): Cliente[];
    findOne(id: number): Cliente;
    update(id2: number, updateClienteDto: UpdateClienteDto): Cliente;
    remove(id: number): void;
}
