import { useEffect, useReducer } from "react";
import NoImages from "../../Images/no-pictures.png";
import { NewsTitle, NewsButton, GalleryNews } from "./News.styled";

import { NewsApi } from "../../Api-document/NewsApi";

const initialState = {
  query: "forecast",
  news: [],
  loading: false,
  page: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NEWS":
      return {
        ...state,
        news: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };

    default:
      return state;
  }
}

export default function News() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadMore = () => {
    if (!state.loading) {
      dispatch({
        type: "NEXT_PAGE",
      });
    }
  };

  useEffect(() => {
    let isMounted = true;

    async function getNews() {
      try {
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });

        const data = await NewsApi(state.query, state.page);

        if (!isMounted) {
          return;
        }

        const fourNews = data.articles
          .filter((article) => article.title)
          .slice(0, 4);

        dispatch({
          type: "SET_NEWS",
          payload:
            state.page === 1
              ? fourNews
              : [...state.news, ...fourNews],
        });
      } catch (error) {
        console.error("Ошибка загрузки новостей:", error);
      } finally {
        if (isMounted) {
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }
      }
    }

    getNews();

    return () => {
      isMounted = false;
    };
  }, [state.query, state.page]);

  return (
    <section>
      <div className="container">
        <NewsTitle>Weather News</NewsTitle>

        <GalleryNews>
          {state.news.map((item, index) => (
            <div key={`${item.url}-${index}`}>
              <img
                src={item.urlToImage || NoImages}
                alt={item.title || "Weather news"}
                onError={(event) => {
                  event.currentTarget.src = NoImages;
                }}
              />
              <p>
                {item.description || "No description available."}
              </p>
            </div>
          ))}
        </GalleryNews>

        {state.news.length > 0 && !state.loading && (
          <NewsButton type="button" onClick={loadMore}>
            See more
          </NewsButton>
        )}

        {state.loading && <p>Loading...</p>}
      </div>
    </section>
  );
}
