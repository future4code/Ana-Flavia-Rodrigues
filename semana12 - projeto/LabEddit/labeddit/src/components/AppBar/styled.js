import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

//estilizar os botões da barra header
//flex-grow:1 => o quanto o elemento pode crescer no espaço vazio 
//justify-content: space-between => espaço entre os botões
//styled(Typography)=> estilizar um componente do material-ui, esta entre () pq ele não permite só colocar .(ponto)
export const BtContainer = styled.div`

display: flex;
flex-grow:1;
justify-content: space-between;
`
export const AppBarTitle = styled(Typography)`
padding-left: 16px;
`