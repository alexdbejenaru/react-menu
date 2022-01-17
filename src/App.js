import Categories from "./components/Categories";
import Header from "./components/Header";
import Menu from "./components/Menu";
import items from './data/db';

function App() {
  console.log(items);
  
  return (
    <main className="app">
      <section className="app_container">
        <Header />
        <Categories />
        <Menu />
      </section>
    </main>
  );
}

export default App;
