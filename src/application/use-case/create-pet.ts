import { PetRepository } from "@/repositoris/pet-repository"
import { Pet } from "../entites/pet"
import { UserRepository } from "@/repositoris/user-repository"
import { InvalidCredentialsError } from "./Errors/invalid-credentials-error"
import { userDidNotExistsError } from "./Errors/user-did-not-exists-error"

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
            throw new userDidNotExistsError()
        }

        if (userExist.role !== 'ORG') {
            throw new InvalidCredentialsError()
        }

        const createdPet = await new Pet({ nome, descricao, idade, porte, energia, independencia, fotos, requisitos, user })
        
        await this.petRepository.created(createdPet)
        return {
            createdPet
        }
    }
}