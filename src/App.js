import Categories from "./components/Categories";
import Header from "./components/Header";
import Menu from "./components/Menu";
import data from './data/db';
import { useState } from "react";

const allCategories = ['all', ...new Set(data.map(item => item.category))];

function App() {
  const [ items, setItems ] = useState(data);
  const [ categoryItems, setCategoryItems ] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data);
      return;
    }
    setCategoryItems(categoryItems);

    const newItems = data.filter(item => item.category === category)
    setItems(newItems);
}

  return (
    <main className="app">
      <section className="app_container">
        <Header />
        <Categories categoryItems={ categoryItems } items={ items } filterItems={ filterItems }/>
        <Menu items={ items }/>
      </section>
    </main>
  );
}

export default App;
