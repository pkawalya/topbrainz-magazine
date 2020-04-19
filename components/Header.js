import styled from '@emotion/styled'

function Header({ isDark }) {
    return (
        <HeaderStyled isDark={isDark}>
            <div className="container">
                <div className="logo">
                    <img src="/images/logo.svg" alt="Logo" />
                    <span className="logo-text"></span>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    // background: #efefef;
    background: ${props => props.theme.colors.primary};
`

export default Header