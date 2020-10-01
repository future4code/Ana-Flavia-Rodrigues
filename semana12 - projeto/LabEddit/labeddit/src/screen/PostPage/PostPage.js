import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const  PostPage = () => {
    useProtectedPage()
    return(
        <div>
           Pagina de Post
        </div>
    )
}

export default PostPage