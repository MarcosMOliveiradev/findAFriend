import { UserRepository } from "@/repositoris/user-repository"
import { User } from "../entites/user"
import { hash } from "bcrypt"
import { Role } from "@prisma/client"

interface ICreateUserRequest {
    nome: string
    email: string
    cep: number
    endereco: string
    numero: number
    contato: number
    password: string
    avata?: string
    role: Role
}

interface IUserResponse {
    user: User
}

export class CreateUser {
    constructor(private userRepository: UserRepository) {}

    async create(request: ICreateUserRequest): Promise<IUserResponse> {
        const { nome, email, cep, endereco, numero, contato, password, avata, role } = request

        const isEmailExist = await this.userRepository.findByEmail(email)

        if (isEmailExist) {
            throw new Error('Email ja cadastrado!')
        }

        const password_hash = await hash(password, 6)
        const user = await new User({
            nome,
            email,
            cep,
            endereco,
            numero,
            contato,
            password: password_hash,
            avata,
            role,
        })

        if (user.role === undefined) {
            throw new Error('erro de permissão')
        }

        await this.userRepository.create(user)

        return {
            user,
        }
    }
}