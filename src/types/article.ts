export interface Headline {
  main: string;
}

export interface Article {
  _id?: string;
  id: string;
  web_url: string;
  main_headline: string;
  lead_paragraph: string;
  document_type?: string;
  pub_date: Date | string;
  headline?: Headline;
}

