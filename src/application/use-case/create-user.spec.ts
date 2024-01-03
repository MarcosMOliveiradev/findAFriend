import { expect, describe, it, beforeEach } from 'vitest'
import { compare } from 'bcrypt'
import { InMemoryUsersRepository } from '@/repositoris/in-memory/in-memory-users-repository'
import { CreateUser } from './create-user'
import { PrismaUserRepository } from '@/repositoris/prisma/prisma-user-repository'
import { Role } from '@prisma/client'

let usersRepository: InMemoryUsersRepository
let sut: CreateUser
describe('Register Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateUser(usersRepository)
  })
  // Testa se a senha foi criptografada
  it('should be abled hash user password upon registration', async () => {
    const { user } = await sut.create({
      nome: 'Marcos',
      email: 'marcos@marcos22.com',
      cep: 26170330,
      endereco: 'Av. brasil',
      numero: 4395,
      contato: 21993908503,
      password: '123456',
      role: Role.MEMBER,
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'marcos@marcos.com'

    await sut.create({
      nome: 'Marcos',
      email: 'marcos@marcos22.com',
      cep: 26170330,
      endereco: 'Av. brasil',
      numero: 4395,
      contato: 21993908503,
      password: '123456',
      role: Role.MEMBER,
    })

    await expect(() =>
      sut.create({
        nome: 'Marcos',
        email: 'marcos@marcos22.com',
        cep: 26170330,
        endereco: 'Av. brasil',
        numero: 4395,
        contato: 21993908503,
        password: '123456',
        role: Role.MEMBER,
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})