import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPetReposotory } from '@/repositoris/in-memory/in-memory-pet-repository'
import { CreatePet } from './create-pet'
import { InMemoryUsersRepository } from '@/repositoris/in-memory/in-memory-users-repository'

let userRepository: InMemoryUsersRepository
let petRepository: InMemoryPetReposotory
let sut: CreatePet
describe('Register Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    petRepository = new InMemoryPetReposotory()
    sut = new CreatePet(petRepository, userRepository)
  })
  // Testa se a senha foi criptografada
  it('should be abled hash user password upon registration', async () => {
    
  })

  it('should not be able to register with same email twice', async () => {
   
  })
})