import React from 'react';

const ApiBody = ({
    post
}) => {
    return ( <
        div >
        <
        p > {
            post.id + "" + post.title
        } < /p> <
        p > { post.body } < /p> < /
        div >






    )
}

export default ApiBody;