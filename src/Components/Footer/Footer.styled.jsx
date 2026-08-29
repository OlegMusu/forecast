import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #ffb36c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 179px;
  padding: 30px 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    min-height: 160px;
  }

  @media (max-width: 600px) {
    min-height: auto;
    padding: 30px 15px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  display: flex;
  gap: 111px;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 0 0 10px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const AddressText = styled.span`
  font-weight: 500;
  font-size: 12px;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    gap: 15px;
  }
`;

export const FooterItem = styled.li`
  width: 40px;
  height: 40px;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  &:hover {
    transform: scale(1.15);
  }

  &:active {
    transform: scale(1);
  }
`;