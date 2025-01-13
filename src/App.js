import React, { useEffect, useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import KekItem from "./components/KekItem";
import { fetchKekItems } from "./network/KekService";

const KekItemData = (title, text) => {
  return {
    title,
    text,
  };
};

const App = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const fetchMoreData = () => {
    console.log("page", page);

    if (items.length >= 500) {
      setHasMore(false);
      return;
    }

    fetchKekItems(page, 10).then((newItems) => {
      setItems([...items, ...newItems]);
    });

    setPage(page + 1);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const onDelete = (index) => {
    console.log("onDelete", index);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const onCopy = (index) => {
    console.log("onCopy", index);
    const newItems = [...items];
    newItems.splice(index, 0, items[index]);
    setItems(newItems);
  };

  return (
    <div>
      <h1>demo: react-infinite-scroll-component</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((i, index) => (
          <div key={index}>
            <KekItem
              title={i.title}
              text={i.text}
              onDelete={() => onDelete(index)}
              onCopy={() => onCopy(index)}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default App;
