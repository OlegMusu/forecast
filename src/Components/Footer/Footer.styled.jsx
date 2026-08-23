import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #ffb36c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 179px;
`;

export const FooterContainer = styled.div`
  width: 1160px;
  display: flex;
  gap: 111px;
  align-items: center;
  justify-content: left;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const AddressText = styled.span`
  font-weight: 500;
  font-size: 12px;
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const FooterItem = styled.li`
  width: 40px;
  height: 40px;
  
  img {
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
    
    &:active {
      transform: scale(1);
    }
  }
`;