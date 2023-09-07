import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_BACKEND_BASE_URL);
  return (
    <div className="App">
<h1>{process.env.REACT_APP_BACKEND_BASE_URL}</h1>
    </div>
  );
}

export default App;
