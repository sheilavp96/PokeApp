import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import './pokemon.css';

const PokemonDetails = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(null);

    const params = useParams();
    console.log(props);
    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async function () {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.item}`);
            if (!res.ok) throw new Error(`Pokemon no encontrado (${res.status})`);

            const data = await res.json();
            console.log(data);
            setPokemon(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const back = () => {
        props.history.push('/pokemons');
    };

    return (
        <div className='container-card container-pokemon'>
            <button className='btn' onClick={() => back()}>
                Regresar
            </button>
            {error && <div className='error'>{error}</div>}
            <div className='card'>
                {pokemon.sprites ? <img className='img-pokemon' src={pokemon.sprites.other.dream_world.front_default} /> : null}
                <h1 className='name'>{pokemon.name}</h1>
                <div className='datos-container'>
                    <p className='id'> Id: {pokemon.id}</p>
                    <p className='order'> Order: {pokemon.order}</p>
                    <p className='weight'> Weight: {pokemon.weight}</p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(PokemonDetails);
