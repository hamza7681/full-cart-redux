import React, { useState } from "react";
import { ProductsList } from "../../Utils/ProductsData";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Filterings from "./Filterings";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [product, setProduct] = useState(ProductsList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.CartReducer);

  return (
    <>
      <div className="container-fluid">
        <div className="container  mt-5 mb-2">
          <h3>Products</h3>
        </div>
        <Filterings setProduct={setProduct} product={product} />
        <div className="container">
          <div className="row">
            {product.map((val, index) => (
              <div className="col-sm-4 mt-3 " key={index}>
                <Card style={{ width: "100%" }}>
                  <Image>
                    <img src={val.src} alt="product" />
                  </Image>
                  <Card.Body>
                    <Title>{val.name}</Title>
                    <Price>{val.price}</Price>
                    <DiscountPrice>
                      {val.price - (val.discount / 100) * val.price}
                    </DiscountPrice>

                    {products.find((item) => item.id === val.id) ? (
                      <>
                        <CartBtn
                          onClick={() => {
                            dispatch({
                              type: "RemoveFromCart",
                              payload: {
                                id: val.id,
                                discount:
                                  val.price - (val.discount / 100) * val.price,
                              },
                            });
                          }}
                        >
                          Remove from Cart
                        </CartBtn>
                      </>
                    ) : (
                      <>
                        <CartBtn
                          onClick={() => {
                            dispatch({
                              type: "AddToCart",
                              payload: {
                                id: val.id,
                                name: val.name,
                                discount:
                                  val.price - (val.discount / 100) * val.price,
                                src: val.src,
                              },
                            });
                          }}
                        >
                          Add to Cart
                        </CartBtn>
                      </>
                    )}

                    <ViewBtn
                      onClick={() =>
                        navigate(`/product/${val.name}`, {
                          state: {
                            id: val.id,
                            name: val.name,
                            price: val.price,
                            src: val.src,
                            discount: val.discount,
                            desc: val.desc,
                            variations: val.variations,
                          },
                        })
                      }
                    >
                      View
                    </ViewBtn>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Title = styled.h3`
  color: black;
`;

const Price = styled.h5`
  color: grey;
  text-decoration: line-through;
`;
const DiscountPrice = styled.p`
  color: black;
`;
const CartBtn = styled.button`
  background-color: #007bff;
  color: white;
  padding: 3px 12px 3px 12px;
  border: none;
  border-radius: 3px;
  margin-right: 5px;
`;
const ViewBtn = styled.button`
  background-color: #28a745;
  color: white;
  padding: 3px 12px 3px 12px;
  border: none;
  border-radius: 3px;
`;

const Image = styled.div`
  img {
    width: 100%;
    height: 400px;
  }
`;

export default Products;
