import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
const Spiner = () => {
    return <Spin indicator={antIcon} />;
};

export default Spiner;
