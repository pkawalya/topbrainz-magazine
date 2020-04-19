import styled from '@emotion/styled'

function Header(){
    return(
       <HeaderStyled>Now I am a real header</HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    // background: #efefef;
    background: ${props => props.theme.colors.primary};
`

export default Header