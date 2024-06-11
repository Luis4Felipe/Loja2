import styled from "styled-components";

const SDvix = styled.div`
    height: 260px;
    padding: 10px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: pointer;

    img {
        width: 100%/
        height: 140px;
        border-radius: 5px;
    }
`;

const SDivInfo = styled.div`
    padding: 15px;

    p {
        font-size: 15px;
    }

    span {
        font-size: 20px;
        font-weight: bold;
    }
`;

/**
 * @param {Object} product
 * @param {Function} onClick
 */

function Product({ product, onClick }) {
    return (
        <SDiv onClick={() => onClick(product)}>
            <img src={product.image} alt={product.name} />
            <SDivInfo>
                <p>{product.name}</p>
                <span>R${product.price}</span>
            </SDivInfo>
        </SDiv>
    );
}

const SSection = styled.section`
    overflow: auto;
    padding: 20px;
    display: grid;
    grid=template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 230px;
    gap: 20px;
`;

/**
 * @param {Object[]} products
 * @param {Function} onClick
 */

function Products({ products, onClick, isLoading = false }) {
    return (
        <SSection>
            {isLoading
                ? "Carregando..."
                : products.length > 0
                ? products.map((product) => (
                    <Product key={product.id} product={product} onClick={onClick} />
                ))
                : "Nenhum produto encontrado!"}
        </SSection>
    );
}

export default Products;