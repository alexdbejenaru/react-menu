import Categories from "./components/Categories";
import Header from "./components/Header";
import Menu from "./components/Menu";
import data from './data/db';
import { useState } from "react";

function App() {
  const [ items, setItems ] = useState(data);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data);
      return;
    }
    
    const newItems = items.filter(item => item.category === category)
    setItems(newItems);
}

  return (
    <main className="app">
      <section className="app_container">
        <Header />
        <Categories filterItems={ filterItems }/>
        <Menu items={ items }/>
      </section>
    </main>
  );
}

export default App;
