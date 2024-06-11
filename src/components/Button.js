import styled from "styled-components";

const SButton = styled.button`
    cursor: pointer;
    padding: 18px 8px;
    width: 100%;
    color: #ffffff;
    background-color: #000000;
    font-size: 18px;
    border: 0;
    border-radius: 8px;
`;


/**
 * @param {HTMLCollection} children
 * @param {Function} onClick
 * @param {Boolean} isLoading
 */

function Button({ children, onClick, isLoading = false }) {
    return (
        <SButton onClick={onClick} disabled={isLoading}>
            {isLoading ? "Carregando..." : children}
        </SButton>
    );
}

export default Button;