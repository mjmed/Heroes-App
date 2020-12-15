import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) => {

    // Crea una validación por si el usuario envía un "publisher" no válido
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // Si no encuentra los datos lanza un error
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto.`);
    }
    // Si publisher es correcto, filtra los datos en el arreglo heroes
    return heroes.filter( hero => hero.publisher === publisher );
}