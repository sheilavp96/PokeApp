import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router';
import Spiner from '../../../components/Spiner/Spiner';
import Error404 from '../../404/Error404';
import './machine.css';

const MachineDetails = (props) => {
    const [machine, setMachine] = useState({});
    const [secondMachine, setSecondMachine] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        const getMachine = async () => {
            fetch(`https://pokeapi.co/api/v2/machine/${params.item}`)
                .then((res) => {
                    if (res.status === 404) throw new Error(`Machine no encontrado (${res.status})`);
                    if (!res.ok) throw new Error(`something when wrong`);
                    return res.json();
                })
                .then((data) => {
                    setMachine(data);
                    setLoading(false);
                    //segunda peticion
                    const machineFetch = data.item.url;
                    fetch(`${machineFetch}`)
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            setSecondMachine(data);
                        });
                })
                .catch((err) => {
                    setLoading(false);
                    setError(err.message);
                });
        };
        getMachine();
    }, []);

    const back = () => {
        props.history.push('/machine');
    };

    if (loading) {
        return (
            <div className='container-card container-machine'>
                <button className='btn btn-move' onClick={() => back()}>
                    Regresar
                </button>
                <Spiner />
            </div>
        );
    }
    if (error) {
        return <Error404 message={'Machine no encontrado'} />;
    }
    return (
        <div className='container-card container-machine'>
            <button className='btn btn-machine' onClick={() => back()}>
                Regresar
            </button>
            {/* {error && <div className='error'>{error}</div>} */}

            <div className='card card-machine'>
                {secondMachine.sprites ? <img className='img-card' src={secondMachine.sprites.default} /> : null}
                <h1 className='name'>{machine.item.name}</h1>

                <div className='container-datos'>
                    <p className='datos-machine'>Id: {machine.id}</p>
                    {machine.move ? <p className='datos-machine'>Move: {machine.move.name}</p> : null}
                    {machine.move ? <p className='datos-machine'>Version group: {machine.version_group.name}</p> : null}
                </div>
            </div>
        </div>
    );
};

export default withRouter(MachineDetails);
