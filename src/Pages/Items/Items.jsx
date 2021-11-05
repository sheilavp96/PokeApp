import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';

const Items = () => {
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/item?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data.results);
                setLoading(true);
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
        <div className='global-container'>
            <Navbar />
            <div className='table-container'>
                {loading ? (
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
                ) : (
                    <div className='spin-container'>
                        <Spiner />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Items;
