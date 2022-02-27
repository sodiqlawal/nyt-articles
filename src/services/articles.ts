import axios from "axios";
import { env } from "config/environment";
import { FetchArticlePayload } from "store/actions/articles";

export const fetchArticleService = async ({
  query = "",
  page = 1,
}: FetchArticlePayload) =>
  await axios(
    `${env.baseUrl}/articlesearch.json?facet_fields=document_type&fl=document_type%2C%20lead_paragraph%2C%20headline%2C%20pub_date%2C%20web_url%2C%20_id&fq=article&q=${query}&page=${page}&api-key=${env.apiKey}`
  );
