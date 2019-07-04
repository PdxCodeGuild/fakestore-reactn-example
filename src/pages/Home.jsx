import React, { useGlobal } from "reactn";
import styled from "@emotion/styled";

import Item from '../components/Item';
import inventory from "../data/inventory";

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
`;



const Home = () => {
  const [items, setItems] = useGlobal('cart');

  return (
    <>
      <div>Home Page</div>
      <Items>
        {inventory.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Items>
      <div>
        {JSON.stringify(items)}
      </div>
    </>
  )
}

export default Home;