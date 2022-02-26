import ItemListContainer from "components/ItemListContainer/ItemListContainer";
import "./App.css";
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div>
      <header>
         <NavBar></NavBar>
         <ItemListContainer></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
