import { User } from "@/application/entites/user";
import { UserRepository } from "../user-repository";
import { prisma } from "@/lib/prisma";

export class PrismaUserRepository extends UserRepository {
    findByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    async create(user: User): Promise<User> {
        const dados = await prisma.user.create({
            data: {
                id: user.id,
                nome: user.nome,
                email: user.email,
                cep: user.cep,
                endereco: user.endereco,
                numero: user.numero,
                contato: user.contato,
                password: user.password,
                avata: user.avata,
                role: user.role,
                created_at: new Date(),
            }
        })

        return dados
    }

}