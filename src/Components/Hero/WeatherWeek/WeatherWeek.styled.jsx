import styled from "styled-components";

export const WeekSection = styled.section`
  padding: 0 20px;
`;

export const WeekTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const WeekList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 25px;
`;

export const WeekItem = styled.div`
  padding: 15px 10px;
  border-radius: 20px;
  background: #E8E8E8;
  text-align: center;
`;

export const WeekDate = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const WeekIcon = styled.img`
  width: 100px;
`;

export const WeekTemperature = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const WeekDescription = styled.div`
  margin-top: 5px;
  font-size: 12px;
  text-transform: capitalize;
`;