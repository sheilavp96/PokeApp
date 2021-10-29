import React from 'react';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableForm = () => {
    // fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then((res) => res.json())
    //     .then((data) => console.log(data.results));
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((res) => res.json())
            .then((data) => {
                let pokeName = data.results;
                console.log(pokeName);
                setDataSource(pokeName);
                // console.log(dataSource);
            })
            .catch((err) => console.log(err));
    }, []);

    // const dataS = [
    //     {
    //         name: 'name1',
    //         age: 10,
    //         address: 'Address 1',
    //         key: '1',
    //     },
    //     {
    //         name: 'name2',
    //         age: 11,
    //         address: 'Address 2',
    //         key: '2',
    //     },
    //     {
    //         name: 'name3',
    //         age: 12,
    //         address: 'Address 3',
    //         key: '3',
    //     },
    // ];

    const columns = [
        {
            key: '1',
            title: 'Pokemon',
            dataIndex: 'name',
        },
        {
            key: '2',
            title: 'url',
            dataIndex: 'url',
            render: (fila) => (
                <>
                    <li>{fila}</li>
                </>
            ),
        },
    ];
    return (
        <div>
            {' '}
            <Table columns={columns} dataSource={dataSource} size={'small'}></Table>{' '}
        </div>
    );
};

export default TableForm;
