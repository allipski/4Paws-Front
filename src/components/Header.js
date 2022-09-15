import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <div>
        <img src="https://i.ibb.co/SDSfsSq/logo.png" />
        <Menu>
          <span>Mais Vendidos</span>
          <span>Gatos</span>
          <span>Cães</span>
          <span>Pássaros</span>
          <span>Répteis</span>
          <span>Outros Pets</span>
        </Menu>
        <Buttons>
          <span>
            <ion-icon name="bag-handle-outline"></ion-icon>
          </span>
          <div>
            <span>Login</span>
            <span>|</span>
            <span>Cadastro</span>
          </div>
        </Buttons>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 78px;
  background-color: #edf6f9;
  position: fixed;
  top: 0;
  z-index: 99;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    gap: 60px;
    object-fit: contain;
  }

  img {
    height: 50px;
    width: auto;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 10px;

  span {
    white-space: nowrap; 
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  ion-icon {
    font-size: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
`;