import logo from "./logo.svg";
import "./App.css";
import Weather from "./weather.js";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <p>
          This project was coded by Ava Khalili and is{" "}
          <a href="https://github.com/AvaKhA/weather-react" target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and hosted on Netlify
        </p>
      </footer>
    </div>
  );
}

export default App;
