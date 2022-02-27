import { createAction } from "@reduxjs/toolkit";
import { ArticleActionTypes } from "./actionTypes";
import withPayloadType from "lib/utils/withPayloadType";
import { Article } from "types/article";

// fetch all articles
export interface FetchArticlePayload {
  query: string;
  page: number
}

interface FetchArticleErrorPayload {
  error: Error;
}

export interface FetchArticleSuccessPayload {
  total:number;
  articles: Article[];
}

export const fetchArticles = createAction(ArticleActionTypes.FETCH_ARTICLES, withPayloadType<FetchArticlePayload>());

export const fetchArticlesSuccess = createAction(
  ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
  withPayloadType<FetchArticleSuccessPayload>()
);

export const fetchArticlesError = createAction(
  ArticleActionTypes.FETCH_ARTICLES_ERROR,
  withPayloadType<FetchArticleErrorPayload>()
);
