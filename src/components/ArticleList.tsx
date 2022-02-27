import type { FC } from "react";
import { Article } from "types/article";
import { Link } from "react-router-dom";
import { stripId } from "lib/utils/stripId";

const ArticleList: FC<{ article: Article }> = ({ article }) => {
  return (
    <Link to={`/articles/${stripId(article.id as string)}`}>
      <li data-testid="ArticleList">{article.main_headline}</li>
    </Link>
  );
};

export default ArticleList;
