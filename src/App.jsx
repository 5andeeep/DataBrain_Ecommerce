import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";
import Sidebar from "./Components/Sidebar";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  var filterData = products.filter((item) => {
    if (category == "All") {
      return item.title
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    } else {
      return (
        item.title.trim().toLowerCase().includes(search.trim().toLowerCase()) &&
        item.category == category
      );
    }
  });

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="sidebar-container">
          <Sidebar filterData={filterData} />
        </div>
        <div className="products-container">
          <div className="searchAndCategories">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="categories">
              <div onClick={() => setCategory("All")}>All</div>
              <div onClick={() => setCategory("smartphones")}>Smartphones</div>
              <div onClick={() => setCategory("laptops")}>Laptops</div>
              <div onClick={() => setCategory("fragrances")}>Fragrances</div>
              <div onClick={() => setCategory("skincare")}>Skincare</div>
              <div onClick={() => setCategory("groceries")}>Groceries</div>
              <div onClick={() => setCategory("home-decoration")}>
                Home Decoration
              </div>
            </div>
          </div>
          <div className="cards-container">
            {filterData?.map((product, key) => (
              <div key={key}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
