import React from 'react';
import { Result, Button, message } from 'antd';
import { withRouter } from 'react-router-dom';

const Error404 = (props) => {
    const backHome = () => {
        props.history.push('/pokemons');
    };
    return (
        <div>
            <Result
                status='404'
                title='404'
                subTitle={props.message}
                extra={
                    <Button type='primary' onClick={() => backHome()}>
                        Back Home
                    </Button>
                }
            />
        </div>
    );
};

export default withRouter(Error404);
