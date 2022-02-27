import { useEffect, useState } from "react";
import Loader from "components/Loader";
import Pagination from "components/Pagination";
import Result from "components/Result";
import Search from "components/Search";
import useSearch from "hooks/useSearch";
import { useDispatch, useSelector } from "react-redux";
import "styles/home.scss";
import { useDebounce } from "use-debounce";
import { fetchArticles } from "store/actions/articles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useSearch();
  const [page, setPage] = useState<number>(1);

  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
      dispatch(
        fetchArticles({query:debouncedSearch, page}),
      )
    navigate({pathname:'/', search: `?page=${page}${debouncedSearch ? `&q=${debouncedSearch}` : '' }`});
  }, [dispatch, navigate, debouncedSearch, page]);

  const articleReducer = useSelector((state) => state.articleReducer);

  const { isLoading, articles, total } = articleReducer;

  return (
    <div className="home">
      <Search label="Type search query terms in here:" />
      {isLoading ? (
        <Loader />
      ) : articles.length ? (
        <>
          <Result articles={articles} />
          <Pagination total={total} page={page} limit={10} setPage={setPage} />
        </>
      ) : (
        <h1 className="no-data">No Article Found</h1>
      )}
    </div>
  );
};

export default Home;
