import { User } from "@/application/entites/user";

export abstract class UserRepository {
    abstract create(data: User): Promise<void>
}