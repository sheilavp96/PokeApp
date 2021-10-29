import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';

const ItemsDetail = () => {
    const [Item, setItem] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/item/${params.name}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItem(data);
            });
    }, []);
    return <div>helo</div>;
};

export default ItemsDetail;
