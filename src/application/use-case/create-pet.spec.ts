import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPetReposotory } from '@/repositoris/in-memory/in-memory-pet-repository'
import { CreatePet } from './create-pet'
import { InMemoryUsersRepository } from '@/repositoris/in-memory/in-memory-users-repository'
import { User } from '../entites/user'
import { Role } from '@prisma/client'
import { InvalidCredentialsError } from './Errors/invalid-credentials-error'

let userRepository: InMemoryUsersRepository
let petRepository: InMemoryPetReposotory
let sut: CreatePet
describe('Register Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    petRepository = new InMemoryPetReposotory()
    sut = new CreatePet(petRepository, userRepository)
  })
  it('should be able created a pet', async () => {
    const user = new User({
      nome: 'Marcos',
      email: 'marcos@marcos22.com',
      cep: 26170330,
      endereco: 'Av. brasil',
      numero: 4395,
      contato: 21993908503,
      password: '123456',
      role: Role.ORG,
    })

    const created = await userRepository.create(user)

    const { createdPet } = await sut.create({
      nome: 'Rex',
      descricao: 'Vira lata caramelo',
      idade: 1,
      porte: 'Medio',
      energia: 'Muita',
      independencia: 'Baixa',
      requisitos: 'Amor e carinho para cuidar',
      user: created.id
    })

    expect(createdPet.id).toEqual(expect.any(String))
  })

  it('should not be able created a pet', async () => {
    const user = new User({
      nome: 'Marcos',
      email: 'marcos@marcos22.com',
      cep: 26170330,
      endereco: 'Av. brasil',
      numero: 4395,
      contato: 21993908503,
      password: '123456',
      role: Role.MEMBER,
    })

    const created = await userRepository.create(user)

    await expect(() =>
      sut.create({
        nome: 'Rex',
        descricao: 'Vira lata caramelo',
        idade: 1,
        porte: 'Medio',
        energia: 'Muita',
        independencia: 'Baixa',
        requisitos: 'Amor e carinho para cuidar',
        user: created.id
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})