"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("./entities/cliente.entity");
let ClienteService = class ClienteService {
    constructor() {
        this.clientes = [
            { id: 1, nombre: 'Roberth', identificacion: '13244565' },
            { id: 2, nombre: 'David', identificacion: '123345456' },
        ];
    }
    create(createClienteDto) {
        const cliente = new cliente_entity_1.Cliente();
        cliente.id = Math.max(...this.clientes.map(elemento => elemento.id), 0) + 1;
        cliente.nombre = createClienteDto.nombre;
        cliente.identificacion = createClienteDto.identificacion;
        this.clientes.push(cliente);
        return cliente;
    }
    findAll() {
        return this.clientes;
    }
    findOne(id) {
        const cliente = this.clientes.find(cliente => cliente.id === id);
        if (!cliente)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return cliente;
    }
    update(id2, updateClienteDto) {
        const { id, nombre, identificacion } = updateClienteDto;
        const cliente = this.findOne(id2);
        if (nombre)
            cliente.nombre = nombre;
        if (identificacion)
            cliente.identificacion = identificacion;
        this.clientes = this.clientes.map(elemento => {
            if (elemento.id === id2)
                return cliente;
            return elemento;
        });
        return cliente;
    }
    remove(id) {
        this.findOne(id);
        this.clientes = this.clientes.filter(elemento => elemento.id !== id);
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)()
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=estudiante.service.js.map