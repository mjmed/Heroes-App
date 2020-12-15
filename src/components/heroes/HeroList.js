import React, { useMemo } from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher( publisher );
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero } />  // con { ...hero } le mando todas las propiedades necesarias
                ))
            }
            
        </div>
    )
}


// *useMemo* cuando se tiene procesos pesados se puede memorizar los resultados si sus
// dependencias se mantienen igual, asi evitamos el renderizado