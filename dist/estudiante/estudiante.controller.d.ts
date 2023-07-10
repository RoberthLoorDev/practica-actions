import { ClienteService } from './estudiante.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Cliente;
    findAll(): Cliente[];
    findOne(id: number): Cliente;
    update(id: string, updateClienteDto: UpdateClienteDto): Cliente;
    remove(id: string): void;
}
