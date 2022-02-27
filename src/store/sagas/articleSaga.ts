import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesError,
} from "../actions/articles";

import { fetchArticleService } from "services/articles";
import { toastError } from "lib/utils/toasters";
import { getErrorMessage } from "lib/utils/errorMessage";
import { Article } from "types/article";

function* fetchArticlesSaga(action: ReturnType<typeof fetchArticles>) {
  try {
    const {
      data: { response },
    } = yield call(fetchArticleService, action.payload);
    const articles = response?.docs?.length ? response?.docs.map(({_id, headline, ...rest}:Article) => ({
      ...rest,
      id: _id,
      main_headline: headline?.main as string,
    })):[];
    yield put(
      fetchArticlesSuccess({
        articles,
        total: response?.meta?.hits || 0
      })
    );
  } catch (error) {
    if (error instanceof Error)
      yield put(
        fetchArticlesError({
          error,
        })
      );
    toastError(getErrorMessage(error));
  }
}

function* articleSaga() {
  yield takeLatest(fetchArticles, fetchArticlesSaga);
}

export default articleSaga;
