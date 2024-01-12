import { User } from "@/application/entites/user";

export abstract class UserRepository {
    abstract findByEmail( email: string ): Promise<User | null>
    abstract findById( id: string ): Promise< User | null>
    abstract create( data: User ): Promise<User>
}