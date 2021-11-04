import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/item?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data.results);
            });
    }, [offset]);

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
                <Table
                    columns={columns}
                    dataSource={items}
                    size={'small'}
                    pagination={{
                        pageSize: 20,
                        total: 954,
                        onChange: (page, pageSize) => {
                            let newOffSet = (page - 1) * 20;
                            setOffset(newOffSet);
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Items;
