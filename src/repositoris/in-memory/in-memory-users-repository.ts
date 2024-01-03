// import { User } from "@/application/entites/user";
import { User } from "@/application/entites/user";
import { UserRepository } from "../user-repository";
import { Prisma } from "@prisma/client";

export class InMemoryUsersRepository extends UserRepository {
    public item: User[] = []

    async findByEmail(email: string) {
        const user = await this.item.find((itens) => itens.email === email)
        if (!user) {
            return null
        }

        return user
    }

    async create(data: Prisma.UserCreateInput) {
        const created = {
            id: data.id,
            nome: data.nome,
            email: data.email,
            cep: data.cep,
            endereco: data.endereco,
            numero: data.numero,
            contato: data.contato,
            password: data.password,
            avata: data.avata,
            role: data.role,
            created_at: new Date(),
        }

        this.item.push(created)
    }
}