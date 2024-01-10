import { randomUUID } from "crypto"
import { Replace } from "./Replace"
import { Role } from "@prisma/client"

interface IUser {
    nome: string
    email: string
    cep: number | bigint
    endereco: string
    numero: number
    contato: number | bigint
    password: string
    avata?: string | null
    role: Role
    created_at: Date
}

export class User {
    private _id: string
    private props: IUser

    constructor(props: Replace<IUser, { created_at?: Date}>) {
        this._id = randomUUID()
        this.props = {
            ...props,
            created_at: props.created_at ?? new Date(),
        }
    }

    public get id(){
        return this._id
    }

    public set nome(nome: string) {
        this.props.nome = nome
      }
    
      public get nome() {
        return this.props.nome
      }

      public set email(email: string) {
        this.props.email = email
      }
    
      public get email() {
        return this.props.email
      }

      public set cep(cep: number | bigint) {
        this.props.cep = cep
      }
    
      public get cep(): number | bigint {
        return this.props.cep
      }

      public set endereco(endereco: string) {
        this.props.endereco = endereco
      }
    
      public get endereco() {
        return this.props.endereco
      }

      public set numero(numero: number) {
        this.props.numero = numero
      }
    
      public get numero() {
        return this.props.numero
      }

      public set contato(contato: number | bigint) {
        this.props.contato = contato
      }
    
      public get contato(): number | bigint {
        return this.props.contato
      }

      public set password(password: string) {
        this.props.password = password
      }
    
      public get password() {
        return this.props.password
      }

      public set avata(avata: string | undefined | null) {
        this.props.avata = avata
      }
    
      public get avata(): string | undefined | null {
        return this.props.avata
      }

      public set role(role: Role) {
        this.props.role = role
      }
    
      public get role() {
        return this.props.role
      }
}