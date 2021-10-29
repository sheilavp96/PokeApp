import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/item')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setItems(data.results);
            });
    }, []);

    const columns = [
        {
            key: '3',
            title: 'Item',
            dataIndex: 'name',
            render: (item) => (
                <>
                    <Link to={`/items/${item}`}>{item}</Link>
                </>
            ),
            className: 'table',
        },
    ];
    return (
        <div>
            <Navbar />
            <div className='table-container'>
                <Table columns={columns} dataSource={items} size={'small'} />
            </div>
        </div>
    );
};

export default Items;
