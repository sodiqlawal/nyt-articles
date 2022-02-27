import type { FC } from "react";
import { Article } from "types/article";
import ArticleList from "./ArticleList";

const Result:FC<{articles:Article[]}> = ({articles}) => {
  return (
    <div className="result">
      <ul>
        {articles.map(article => (
         <ArticleList article={article} key={article.id} />
        ))}
      </ul>
    </div>
  );
};

export default Result;
