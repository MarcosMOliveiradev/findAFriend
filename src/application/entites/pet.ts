import { randomUUID } from "crypto"
import { Replace } from "./Replace"

interface IPet {
    nome: string
    descricao: string
    idade: number
    porte: string
    energia: string
    independencia: string
    fotos?: string[] | null
    requisitos?: string
    user: string
    created_at: Date
}

export class Pet {
    private _id: string
    private props: IPet

    constructor(props: Replace<IPet, { created_at?: Date}>) {
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

      public set descricao(descricao: string) {
        this.props.descricao = descricao
      }
    
      public get descricao() {
        return this.props.descricao
      }

      public set idade(idade: number) {
        this.props.idade = idade
      }
    
      public get idade() {
        return this.props.idade
      }

      public set porte(porte: string) {
        this.props.porte = porte
      }
    
      public get porte() {
        return this.props.porte
      }

      public set energia(energia: string) {
        this.props.energia = energia
      }
    
      public get energia() {
        return this.props.energia
      }

      public set independencia(independencia: string) {
        this.props.independencia = independencia
      }
    
      public get independencia() {
        return this.props.independencia
      }

      public set fotos(fotos: string[] | undefined | null) {
        this.props.fotos = fotos
      }
    
      public get fotos(): string[] | undefined | null {
        return this.props.fotos
      }

      public set requisitos(requisitos: string | undefined) {
        this.props.requisitos = requisitos
      }
    
      public get requisitos(): string | undefined {
        return this.props.requisitos
      }

      public set user(user: string) {
        this.props.user = user
      }
    
      public get user() {
        return this.props.user
      }
}