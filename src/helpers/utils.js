import {ENV} from '../consts/env'

export const imageUrl = (pokemon) => {
    
    let split = pokemon.url.split("/");
    let id = split[split.length - 2];
    let img = `${ENV.IMAGE_URL}${id}.png`;

    return img
}