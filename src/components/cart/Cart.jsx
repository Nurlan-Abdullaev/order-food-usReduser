import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { CartItem } from "./CartItem";
import { styled } from "styled-components";
import { TotalAmount } from "./TotalAmount";
import { Button } from "../UI/Button";
import { CartContext } from "../../store/cart-context";

export const Cart = ({ onClose }) => {
  const { addedMeals, totalAmount } = useContext(CartContext);
  return (
    <Modal onClose={onClose}>
      <Content>
        <CartList>
          {addedMeals.map((meal) => (
            <CartItem
              title={meal.title}
              amount={meal.amount}
              price={meal.price}
              key={meal.id}
              id={meal.id}
            />
          ))}
        </CartList>
        <TotalAmount totalAmount={totalAmount} />
        <ActionsContainer>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => console.log("ORDER")}>Order</Button>
        </ActionsContainer>
      </Content>
    </Modal>
  );
};

const ActionsContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;
`;

const Content = styled("div")`
  padding: 1.5rem 1rem;
`;

const CartList = styled("ul")`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-height: 360px;
  overflow-y: scroll;
`;
