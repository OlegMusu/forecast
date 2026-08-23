import { useEffect, useReducer } from "react";
import NoImages from "../../Images/no-pictures.png"
import { NewsTitle, NewsButton, GalleryNews } from "./News.styled";

import { NewsApi } from "../../Api-document/NewsApi";

const initialState = {
  query: "Interacting with our pets",
  news: [],
  loading: false,
  page: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NEWS":
      return { ...state, news: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
}

export default function News() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadMore = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  useEffect(() => {
    async function getNews() {
      try {
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });

        const data = await NewsApi(state.query, state.page);

        const fourNews = data.articles.slice(0, 4);

        dispatch({
          type: "SET_NEWS",
          payload: state.page === 1 ? fourNews : [...state.news, ...fourNews],
        });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }
    }

    getNews();
  }, [state.query, state.page]);

  return (
    <>
      <section>
        <div className="container">
          <NewsTitle>Interacting with our pets</NewsTitle>
          <GalleryNews>
            {state.news.map((item) => (
              <div key={item.url}>
                <img
                  src={item.urlToImage || NoImages}/>
                <p>{item.description}</p>
              </div>
            ))}
          </GalleryNews>

          {state.news.length > 0 && !state.loading && (
            <NewsButton onClick={loadMore}>See more</NewsButton>
          )}
        </div>
      </section>
    </>
  );
}
