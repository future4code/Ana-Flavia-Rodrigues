import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg';

export function Post(props){
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentado, setComentado] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios,setComentarios] = useState([]);

  

  const onClickCurtida = () => {
        // verifica se, no estado, cutido é true ou false
        if (curtido) {
          
          // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
          setCurtido(!curtido)
          setNumeroCurtidas(numeroCurtidas - 1)  
      } else {
  
        // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
          setCurtido(!curtido)
          setNumeroCurtidas(numeroCurtidas + 1)
        
      }           
  
  };

  const onClickComentario = () => {setComentado(!comentado)};

  

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    setComentarios({
      comentarios: listaDeComentarios,
      comentado: false,
      numeroComentarios: numeroComentarios + 1
    })

  }

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentado ? (
    // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
    // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentarios}</p>
        </CommentContainer>
      )
    })
  )


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        {caixaDeComentario}
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post