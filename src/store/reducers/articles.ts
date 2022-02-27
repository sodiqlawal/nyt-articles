import { createReducer } from "@reduxjs/toolkit";
import * as articleActions from "store/actions/articles";
import { Article } from "types/article";

export interface ArticlesState {
  total: number;
  articles: Article[];
  isLoading: boolean;
  error?: Error;
}

export const initialState: ArticlesState = {
  total: 0,
  articles: [],
  isLoading: false,
};

export const articleReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(articleActions.fetchArticles, (state) => {
      state.isLoading = true;
    })
    .addCase(articleActions.fetchArticlesSuccess, (state, action) => {
      state.total = action.payload.total;
      state.articles = action.payload.articles;
      state.isLoading = false;
    })
    .addCase(articleActions.fetchArticlesError, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
);

export default articleReducer;
