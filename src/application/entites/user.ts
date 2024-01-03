import { randomUUID } from "crypto"
import { Replace } from "./Replace"
import { Role } from "@prisma/client"

interface IUser {
    nome: string
    email: string
    cep: number
    endereco: string
    numero: number
    contato: number
    password: string
    avata?: string
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

      public set cep(cep: number) {
        this.props.cep = cep
      }
    
      public get cep() {
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

      public set contato(contato: number) {
        this.props.contato = contato
      }
    
      public get contato() {
        return this.props.contato
      }

      public set password(password: string) {
        this.props.password = password
      }
    
      public get password() {
        return this.props.password
      }

      public set avata(avata: string | undefined) {
        this.props.avata = avata
      }
    
      public get avata(): string | undefined {
        return this.props.avata
      }

      public set role(role: Role) {
        this.props.role = role
      }
    
      public get role() {
        return this.props.role
      }
}