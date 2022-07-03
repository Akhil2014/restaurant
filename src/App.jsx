import { useEffect, useState } from "react";
import "./App.css";
import Main, { Card } from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8888/data?_page=${page}&_limit=6`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <div className="sorting-button">
          <button className="button1">1 Rating</button>
          <button className="button1">2 Rating</button>
          <button className="button1">3 Rating</button>
          <button className="button1">4 Rating</button>
          <button className="button1">Cash only</button>
          <button className="button1">Card only</button>
          <button className="button1">UPI only</button>
          <button className="button1">Low to high</button>
          <button className="button1">High to low</button>
          <button className="button1">All</button>
        </div>
        <div className="grid">
          {data.map((e) => (
            <Card
              key={e.id}
              title={e.title}
              img={e.img}
              items={e.items}
              time={e.time}
              cost={e.cost}
              minprice={e.minprice}
              rating={e.rating}
              votes={e.votes}
              reviews={e.reviews}
            />
          ))}
        </div>
        <div className="div-button">
          <button
            disabled={page === 1}
            className="button1"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          {page}
          <button
            disabled={page === 5}
            className="button1"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
