import requests from "../../Request";
import Main from "../component/Main";
import Row from "../component/Row";

function Home() {
  return (
    <div>
      <Main />
      <Row RowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row RowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row RowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row RowID="4" title="Horror" fetchURL={requests.requestHorror} />
      <Row RowID="5" title="Popular" fetchURL={requests.requestPopular} />
    </div>
  );
}

export default Home;
