import { Pet } from "@/application/entites/pet";
import { PetRepository } from "../pet-repository";

export class InMemoryPetReposotory extends PetRepository {
    public item: Pet[] = []

    async created(data: Pet) {
        const created = await new Pet({
            nome: data.nome,
            descricao: data.descricao,
            idade: data.idade,
            porte: data.porte,
            energia: data.energia,
            independencia: data.independencia,
            fotos: data.fotos,
            requisitos: data.requisitos,
            user: data.user,
        })

        this.item.push(created)
    }
}