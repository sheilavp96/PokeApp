import React from 'react';
import BerriesDetails from '../Pages/Berries/BerriesDetails';
import ItemsDetail from '../Pages/Items/ItemsDetail';
import MachineDetails from '../Pages/Machine/MachineDetails';
import MovesDetails from '../Pages/Moves/MovesDetails';
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
    return <div>404 not found</div>;
    // return <h1>HOLA</h1>;
};

export default TemplateItem;
