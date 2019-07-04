import React, { useGlobal } from "reactn";
import styled from '@emotion/styled';

const ItemContainer = styled.div`
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
  padding: 1em;

  position: relative;

  ${(props) => (
    (props.checkout) ?
    `
    display: flex;
    justify-content: space-between;
    ` :
    `display: block;`
  )}
`;

const Image = styled.img`
  ${(props) => (
    (props.checkout) ?
    `width: 40%;` :
    `width: 100%;`
  )}
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.25rem;

  display: flex;
  justify-content: space-between;

  margin-bottom: 1em;
`;

const Price = styled.div`
  margin-left: 1em;
`;

const Description = styled.div`
  font-style: italic;
  color: rgba(0, 0, 0, .75);

  margin-bottom: 1em;
`;

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 1.5em;

  color: white;
  background: #333;
  padding: 1em;
  margin-right: 1em;
`;

const Item = (props) => {
  const [items, setItems] = useGlobal('cart');
  const { item, checkout } = props;

  const isInCart = items.filter((_item) => item.name === _item.name).length === 1;

  const addToCart = () => {
    setItems(items.concat(item));
  }

  const removeFromCart = () => {
    setItems(
      items.filter((_item) => item.name !== _item.name)
    );
  }

  return (
    <ItemContainer checkout={checkout}>
      <div>
        <Image checkout={checkout} src={item.image} alt={item.name} />
      </div>
      <div>
        <Name>
          <div>
            {item.name}
          </div>
          <Price>
            ${item.price / 100}
          </Price>
        </Name>
        <Description>
          {item.description}
        </Description>
        <div>
          {(isInCart) ? (
            <Button onClick={removeFromCart}>Remove From Cart</Button>
          ) : (
            <Button onClick={addToCart}>Add To Cart</Button>
          )}
        </div>
      </div>
    </ItemContainer>
  )
}
Item.defaultProps = {
  checkout: false,
}

export default Item;