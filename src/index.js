import React from "react";
import ReactDOM from "react-dom";
import { ReactTinyLink } from "react-tiny-link";
// import linPreview from "sa-link-preview";
import "./styles.css";
function linkPreview(url, deepVideo = false, timeout = 100000) {
  if (!url || url === "")
    return Promise.reject({ message: "You must add a valid url" });
  if (!url.match(/^http(s)?:\/\/[a-z]+\.[a-z]+(.)+/i))
    return Promise.resolve(getError(url));
  return linkPreview.makeRequest(url, timeout).then(({ response, body }) => {
    if (!response) return getError(url);
    if (response.statusCode === 200)
      return collectMeta(cheerio.load(body), url, deepVideo);
    return getError(url);
  });
}
function App() {
  return (
    <div className="App">
      <h1>React Tiny Link Example</h1>
      <h3>No Graphics</h3>
      <linkPreview />
      <ReactTinyLink
        cardSize="small"
        showGraphic={false}
        maxLine={2}
        minLine={1}
        url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
      />
      <h3>Small </h3>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
      />
      <h3>Large </h3>
      <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
