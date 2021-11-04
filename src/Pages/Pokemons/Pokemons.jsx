import React from 'react';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pokemons.css';
import Navbar from '../../components/Navbar/Navbar';
const Pokemons = () => {
    const [currentPage, setCurrentPage] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                let pokeList = data.results;

                setCurrentPage(pokeList);
            })
            .catch((err) => console.log(err));
    }, [offset]);

    const columns = [
        {
            key: '1',
            title: 'Pokemon',
            dataIndex: 'name',
            render: (fila) => (
                <>
                    <Link to={`/pokemons/${fila}`}>{fila}</Link>
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
                    dataSource={currentPage}
                    size={'small'}
                    pagination={{
                        pageSize: 20,
                        total: 1118,
                        onChange: (page, pageSize) => {
                            let newOffSet = (page - 1) * 20;
                            setOffset(newOffSet);
                        },
                    }}
                ></Table>
            </div>
        </div>
    );
};
/* pagination={{
                    pageSize:20,
                    onChange={handleChangePage}
                }} */
export default Pokemons;
