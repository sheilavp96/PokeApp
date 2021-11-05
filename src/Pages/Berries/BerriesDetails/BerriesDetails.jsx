import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import Spiner from '../../../components/Spiner/Spiner';
import Error404 from '../../404/Error404';

const BerriesDetails = (props) => {
    const [berry, setBerry] = useState({});
    const [secondBerry, setSecondBerry] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        const getBerries = async () => {
            fetch(`https://pokeapi.co/api/v2/berry/${params.item}`)
                .then((res) => {
                    if (res.status === 404) throw new Error(`Berri no encontrado (${res.status})`);
                    if (!res.ok) throw new Error(`something when wrong`);
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setBerry(data);
                    setLoading(false);
                    // segunda peticion
                    const berri = data.item.url;
                    fetch(`${berri}`)
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            setSecondBerry(data);
                        });
                })
                .catch((err) => {
                    setLoading(false);
                    setError(err.message);
                });
        };
        getBerries();
    }, []);

    const back = () => {
        props.history.push('/berries');
    };
    // onClick={() => back()}

    if (loading) {
        return (
            <div className='container-card container-berrie'>
                <button className='btn btn-move' onClick={() => back()}>
                    Regresar
                </button>
                <Spiner />
            </div>
        );
    }
    if (error) {
        return <Error404 message={'Berrie no encontrado'} />;
    }
    return (
        <div className='container-card container-berrie'>
            <button className='btn btn-berrie' onClick={() => back()}>
                Regresar
            </button>
            {/*  {error && (
                <div className='error'>
                    <Error404 />
                    {error}
                </div>
            )} */}
            <div className='card card-berrie'>
                {secondBerry.sprites ? <img className='img-card' src={secondBerry.sprites.default} /> : null}
                <h1 className='name'>{berry.name}</h1>

                <div className='container-datos'>
                    <p className='datos'> Id: {berry.id}</p>
                    <p className='datos'> Size: {berry.size}</p>
                    <p className='datos'> Smoothness: {berry.smoothness}</p>
                    <p className='datos'> Gift Power: {berry.natural_gift_power}</p>
                    <p className='datos'> Growth Time: {berry.growth_time}</p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(BerriesDetails);
