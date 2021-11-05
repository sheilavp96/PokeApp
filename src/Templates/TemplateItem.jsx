import React from 'react';
import Error404 from '../Pages/404/Error404';
import BerriesDetails from '../Pages/Berries/BerriesDetails/BerriesDetails';
import ItemsDetail from '../Pages/Items/ItemsDetails/ItemsDetail';
import MachineDetails from '../Pages/Machine/MachineDetails/MachineDetails';
import MovesDetails from '../Pages/Moves/MovesDetails/MovesDetails';
import PokemonDetails from '../Pages/Pokemons/PokemonDetails/PokemonDetails';

const TemplateItem = ({ match, location }) => {
    let variable = match.params.item;
    const { pathname } = location;
    if (pathname.includes(`/berries/${variable}`)) {
        return <BerriesDetails />;
    }
    if (pathname.includes(`/pokemons/${variable}`)) {
        return <PokemonDetails />;
    }
    if (pathname.includes(`/items/${variable}`)) {
        return <ItemsDetail />;
    }
    if (pathname.includes(`/moves/${variable}`)) {
        return <MovesDetails />;
    }
    // if (pathname.includes('/')) {
    //     console.log('hola pokemons 2');
    //     return <Pokemons />;
    // }
    if (pathname.includes(`/machine/${variable}`)) {
        return <MachineDetails />;
    }
    return <Error404 />;
    // return <h1>HOLA</h1>;
};

export default TemplateItem;
