import "./App.scss";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "bootstrap/dist/css/bootstrap.min.css";

//App
function App() {
  return (
    <div className="App">
      <div className="title rounded-3">
        <h1 className="bg-gradient bg-light text-black">Markdown Previewer</h1>
      </div>
      <div className="container-xl">
        <div className="row">
          <Editor />
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default App;
