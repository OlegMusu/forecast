import styled from "styled-components";

export const WeekSection = styled.section`
  padding: 0 20px;

  @media (max-width: 600px) {
    padding: 0 15px;
  }
`;

export const WeekTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`;

export const WeekList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const WeekItem = styled.div`
  padding: 15px 10px;

  border-radius: 20px;

  background: #e8e8e8;

  text-align: center;

  @media (max-width: 600px) {
    padding: 12px 6px;
    border-radius: 15px;
  }
`;

export const WeekDate = styled.div`
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const WeekIcon = styled.img`
  width: 100px;
  max-width: 100%;

  @media (max-width: 600px) {
    width: 70px;
  }
`;

export const WeekTemperature = styled.div`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const WeekDescription = styled.div`
  margin-top: 5px;

  font-size: 12px;
  text-transform: capitalize;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;