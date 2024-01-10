import { Pet } from "@/application/entites/pet";

export abstract class PetRepository {
    abstract created(data: Pet): Promise<void>
}