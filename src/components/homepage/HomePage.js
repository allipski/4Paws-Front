import styled from "styled-components";
import Header from "./Header.js";
import Product from "./Product.js";
import { useState, useEffect, useContext } from "react";
import { renderProducts } from "../services/ports.js";
import UserContext from "../../contexts/userContext.js";

export default function HomePage() {
  const { user, setUser } = useContext(UserContext);
  checkLogin();
  const [products, setProducts] = useState([]);

  function getLocal() {
    const user = JSON.parse(localStorage.getItem("session"));
    return user;
  }

  function checkLogin() {
    if (user._id === "" && getLocal()) {
      setUser(getLocal());
    } else if (!user) {
      alert("Sua sessão expirou! Por favor, faça o login novamente");
      navigate("/sign-in");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts(type) {
    const promise = renderProducts();
    promise.then((answer) => {
        if (!type) {
          setProducts(answer.data);
        } else if (type === "other") {
          setProducts(
            products.filter(
              (item) =>
                (item.type !== "cat") &&
                (item.type !== "dog") &&
                (item.type !== "bird") &&
                (item.type !== "reptile")
            )
          );
        } else {
          setProducts(answer.data.filter((item) => item.type === type));
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <Wrapper>
      <Header
        getProducts={getProducts}
        products={products}
        setProducts={setProducts}
      />
      <Products>
        {products.map((product) => (
          <Product
            id={product._id}
            name={product.name}
            price={product.price}
            img={product.img}
            type={product.type}
            quantity={product.quantity}
          />
        ))}
      </Products>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Products = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  width: 100%;
`;
