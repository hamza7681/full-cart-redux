import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { ProductsList } from "../../Utils/ProductsData";

const Filterings = ({ product, setProduct }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filterData = product.filter((pro) => {
        return pro.name.toLowerCase().includes(search.toLowerCase());
      });
      setProduct(filterData);
    }
  };
  const resetHandler = (e) => {
    if (e.target.value === "") {
      setProduct(ProductsList);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <InputDiv>
              <input
                type="text"
                placeholder="Find your products"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  resetHandler(e);
                }}
                onKeyDown={(e) => handleSearch(e)}
              />
              <span>
                <FaSearch />
              </span>
            </InputDiv>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
    </>
  );
};

const InputDiv = styled.div`
  border: 1px solid grey;
  width: fit-content;
  padding: 6px 10px 6px 10px;
  border-radius: 3px;
  input {
    border: none;
    outline: none;
    width: 300px;
  }
  span {
    border-left: 1px solid grey;
    padding-left: 5px;
  }

  @media screen and (max-width: 768px) {
    input {
      width: 250px;
    }
  }
`;

export default Filterings;
