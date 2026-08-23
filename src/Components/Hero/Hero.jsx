import { useEffect, useState } from "react";
import Search from "../../Images/hero/search.svg";
import {
  HeroSection,
  HeroContainer,
  TitleHero,
  HeroWrapper,
  DataList,
  DataItem,
  SearchForm,
} from "./Hero.styled";

export default function Hero() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
  });
  return (
    <>
      <HeroSection>
        <HeroContainer className="container">
          <TitleHero>Weather dashboard</TitleHero>
          <HeroWrapper>
            <p>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </p>
            <span></span>
            <DataList>
              <DataItem>
                {date.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </DataItem>
              <DataItem>
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                })}
                , {date.getDate()}
              </DataItem>
            </DataList>
          </HeroWrapper>
          <SearchForm>
              <input type="text" placeholder="Search location..." />
              <button type="submit">
                <img src={Search} alt="search" />
              </button>
            </SearchForm>
        </HeroContainer>
      </HeroSection>
    </>
  );
}
