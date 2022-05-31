import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FiDelete } from "react-icons/fi";

const MainCart = () => {
  const { products, totalPrice } = useSelector((state) => state.CartReducer);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h3>Cart</h3>
        </div>
        <div className="container">
          <div className="row">
            <Left className="col-md-9">
              {products.length === 0 ? (
                <>
                  <h3>Your cart is empty</h3>
                </>
              ) : (
                <>
                  {products.map((val, index) => {
                    return (
                      <Product className="row" key={index}>
                        <div className="col-4">
                          <ImgDiv>
                            <img src={val.src} alt="" />
                          </ImgDiv>
                        </div>
                        <div className="col-3">
                          <Title>Product :</Title>
                          <Name>{val.name}</Name>
                        </div>
                        <div className="col-3">
                          <Title> Price:</Title>
                          <Name>Rs {val.discount}</Name>
                        </div>
                        <div className="col-2">
                          <Button
                            onClick={() => {
                              dispatch({
                                type: "RemoveFromCart",
                                payload: {
                                  id: val.id,
                                  discount: val.discount,
                                },
                              });
                            }}
                          >
                            <FiDelete className="icon" />
                          </Button>
                        </div>
                      </Product>
                    );
                  })}
                </>
              )}
            </Left>
            <div className="col-md-3">
              <TotalSection>
                <TotalItems>Total Items: {products.length}</TotalItems>
                <TotalPrice>Total Price: Rs {totalPrice}</TotalPrice>
                <CheckoutBtn>Checkout</CheckoutBtn>
              </TotalSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: inherit;
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
    img {
      height: inherit;
    }
  }
`;

const Title = styled.h3`
  color: black;
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: 25px;
  }
`;

const Name = styled.h5`
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Left = styled.div`
  border-right: 1px solid black;

  @media screen and (max-width: 768px) {
    border-right: 0;
    border-bottom: 1px solid black;
    padding-bottom: 30px;
  }
`;

const Product = styled.div`
  border: 1px solid #c7c7c7;
  margin-right: 5px;
  padding: 5px;
  border-radius: 7px;
  margin-top: 5px;
`;

const Button = styled.span`
  .icon {
    color: red;
    margin-top: 85px;
    font-size: 30px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .icon {
      margin-top: 40px;
      font-size: 20px;
    }
  }
`;

const TotalSection = styled.div`
  border: 1px solid gray;
  border-radius: 7px;
  padding: 10px;
`;

const TotalItems = styled.h3`
  color: green;
`;

const TotalPrice = styled.h4`
  color: blue;
`;

const CheckoutBtn = styled.button`
  color: white;
  background-color: blueviolet;
  padding: 5px 25px 5px 25px;
  border: none;
  border-radius: 5px;
`;

export default MainCart;
