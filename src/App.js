import Categories from "./components/Categories";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
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
