import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
    
        <Post
          nomeUsuario={'Ana '}
          fotoUsuario={'https://picsum.photos/50/120'}
          fotoPost={'https://picsum.photos/200/200'}
        />

        <Post
          nomeUsuario={'Paulo '}
          fotoUsuario={'https://picsum.photos/50/240'}
          fotoPost={'https://picsum.photos/200/177'}
        />


      </div>
    );
  }
}

export default App;
