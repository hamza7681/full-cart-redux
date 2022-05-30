import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ViewProduct = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.CartReducer);
  //   console.log(state);
  const { id, name, price, desc, src, discount, variations } = state;
  const [newPrice, setNewPrice] = useState(price);
  const [toggle, setToggle] = useState(false);
  const selectVariations = (color) => {
    variations.filter((val) => {
      if (val.color === color) {
        setNewPrice(val.price);
      }
    });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5 mb-5">
          <ProDetail>Product Detail</ProDetail>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <ImgDiv>
                <img src={src} alt="product" />
              </ImgDiv>
            </div>
            <div className="col-sm-6">
              <table>
                <tr>
                  <td>
                    <Title>{name}</Title>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Price>Sale Price:</Price>
                  </td>
                  <td>
                    <PriceNo>Rs {newPrice}</PriceNo>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DiscPrice>Final Price:</DiscPrice>
                  </td>
                  <td>
                    <DiscPriceNo>
                      Rs {newPrice - (discount / 100) * newPrice}
                    </DiscPriceNo>
                  </td>
                </tr>
              </table>
              <div className="mt-4 ">
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Show Variations"
                    onClick={() => {
                      setToggle(!toggle);
                      if (toggle) {
                        setNewPrice(price);
                      }
                    }}
                  />
                </Form>
              </div>
              {!toggle ? (
                ""
              ) : (
                <>
                  <div className="mt-1">
                    <VariHeading>Variations</VariHeading>
                    {variations.map((val, index) => {
                      return (
                        <ColorBox
                          key={index}
                          style={{ backgroundColor: `${val.color}` }}
                          onClick={() => {
                            // setColor(val.color);
                            selectVariations(val.color);
                          }}
                        ></ColorBox>
                      );
                    })}
                  </div>
                </>
              )}
              <div className="mt-4">
                <DescHeading>Description:</DescHeading>
                <DescPara>{desc}</DescPara>
              </div>

              <Button
                onClick={() => {
                  dispatch({
                    type: "AddToCart",
                    payload: {
                      id: id,
                      name: name,
                      discount: newPrice - (discount / 100) * newPrice,
                      src: src,
                    },
                  });
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ImgDiv = styled.div`
  border: 2px solid #c9c9c7;
  padding: 10px;

  img {
    width: 100%;
  }
`;

const ProDetail = styled.h3`
  text-decoration: underline;
`;

const DescHeading = styled.h3`
  color: black;
`;
const DescPara = styled.p`
  color: grey;
`;

const Title = styled.h1`
  color: blueviolet;
  margin-bottom: 40px;
`;

const Price = styled.h4`
  color: "black";
`;
const PriceNo = styled.h5`
  color: "black";
  text-decoration: line-through;
`;
const DiscPrice = styled.h4`
  color: "black";
`;
const DiscPriceNo = styled.h4`
  color: green;
`;

const VariHeading = styled.h4`
  color: black;
`;

const ColorBox = styled.div`
  width: 70px !important;
  height: 30px !important;
  display: inline-block;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = styled.button`
  color: white;
  background-color: #0d6efd;
  padding: 5px 25px 5px 25px;
  border: none;
  border-radius: 6px;
`;

export default ViewProduct;
