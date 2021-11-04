import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import './item.css';

const ItemsDetail = (props) => {
    const [item, setItem] = useState([]);
    const [attribute, setAttribute] = useState('');
    const [error, setError] = useState(null);

    const params = useParams();
    console.log(params);
    // console.log(props);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/item/${params.item}`)
            .then((res) => {
                if (!res.ok) throw new Error(`Item no encontrada (${res.status})`);
                return res.json();
            })
            .then((data) => {
                let attributes = data.attributes;
                let array = [];
                attributes.forEach((element) => {
                    array.push(element.name);
                });
                let stringAttributes = array.toString();
                setAttribute(stringAttributes);
                setItem(data);
            })
            .catch((err) => setError(err.message));
    }, []);

    const back = () => {
        props.history.push('/items');
    };

    // console.log(item.category.name);
    return (
        <div className='container-card'>
            <button className='btn btn-item' onClick={() => back()}>
                Regresar
            </button>
            {error && <div className='error'>{error}</div>}

            <div className='card card-item'>
                {item.sprites ? <img className='img-item' src={item.sprites.default} /> : null}
                <h1 className='name'>{item.name}</h1>

                <div className='container-datos container-item'>
                    <p className='datos '> Id: {item.id}</p>
                    <p className='datos '> Costo: {item.cost}</p>
                    <p className=' datos-attributes '>Atributos: {attribute}</p>
                    {/* <p className='datos'> Categoria: {item.category.name}</p> */}
                </div>
            </div>
        </div>
    );
};

export default withRouter(ItemsDetail);
