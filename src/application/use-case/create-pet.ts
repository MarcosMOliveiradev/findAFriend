import { PetRepository } from "@/repositoris/pet-repository"
import { Pet } from "../entites/pet"
import { UserRepository } from "@/repositoris/user-repository"

interface ICreatePet {
    nome: string
    descricao: string
    idade: number
    porte: string
    energia: string
    independencia: string
    fotos?: string[]
    requisitos?: string
    user: string
}

export class CreatePet {
    constructor(private petRepository: PetRepository, private userRepository: UserRepository) {}

    async create({nome, descricao, idade, porte, energia, independencia, fotos, requisitos, user}: ICreatePet){

        const userExist = await this.userRepository.findById(user)

        if (userExist === null || userExist === undefined) {
            throw new Error('Usuario não existe!')
        }

        const createdPet = await new Pet({ nome, descricao, idade, porte, energia, independencia, fotos, requisitos, user })
        
        await this.petRepository.created(createdPet)
    }
}