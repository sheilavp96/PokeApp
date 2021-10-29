import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import './pokemon.css';

const PokemonDetails = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
        const pokemonInfo = await data.json();
        setPokemon(pokemonInfo);
    };

    const back = () => {
        props.history.push('/pokemons');
    };

    return (
        <div className='container-card'>
            <button className='btn' onClick={() => back()}>
                Regresar
            </button>
            <div className='card'>
                {pokemon.sprites ? <img className='img-pokemon' src={pokemon.sprites.other.dream_world.front_default} /> : null}
                <h1 className='name'>{pokemon.name}</h1>
                <div className='datos'>
                    <p className='id'> Id: {pokemon.id}</p>
                    <p className='order'> Order: {pokemon.order}</p>
                    <p className='weight'> Weight: {pokemon.weight}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
