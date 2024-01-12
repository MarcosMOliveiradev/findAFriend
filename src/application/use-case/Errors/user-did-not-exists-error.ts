export class userDidNotExistsError extends Error {
    constructor(){
        super(`user didn't exists.`)
    }
}