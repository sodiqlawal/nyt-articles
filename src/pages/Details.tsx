import capitalize from "lib/utils/capitalize";
import { formatDate } from "lib/utils/formatDate";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import "styles/details.scss";

const Details = () => {
  const articles = useSelector((state) => state.articleReducer.articles);
  const {id} = useParams<{id:string}>()
  const article = articles.find(article => article.id?.includes(id as string)) || null;

  if(!article) return <Navigate to="/" />
  return (
    <div className="details">
      <Link to="/">
        <div className="back">
          <MdOutlineKeyboardArrowLeft size={20} />
          <p>Go to results page</p>
        </div>
      </Link>

      <div className="content">
        <h1>{capitalize(article?.main_headline as string)}</h1>

        <p>{formatDate(article?.pub_date)}</p>

        <p>
          {capitalize(article?.lead_paragraph as string)}
        </p>

        <a target="_blank" rel="noreferrer" href={article?.web_url}>Read the full article</a>
      </div>
    </div>
  );
};

export default Details;
