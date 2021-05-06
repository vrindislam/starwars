import './App.css';
import MainRoutes from "./routes/MainRoutes";
import {useEffect} from "react";
import {fetchCharacters} from "./store/characters/charactersActions";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters())
  },[dispatch])
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;
