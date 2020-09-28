import React from 'react';
import LogoLabex from '../../assets/img/LogoLabex.png'
import { HeaderContainer,LogoL } from './styled';


 const Header = () => {
    return(
        <HeaderContainer>
        <LogoL src={LogoLabex}/>
        </HeaderContainer>
    )
}

export default Header