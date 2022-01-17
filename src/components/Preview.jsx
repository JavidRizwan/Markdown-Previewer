import { connect } from "react-redux";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";

marked.setOptions({
  breaks: true,
});
const renderer = new marked.Renderer();

//Component
const Preview = ({ textState }) => {
  return (
    <div
      className="col col-lg-5 col-md-9 col-11 bg-light text-dark rounded-3"
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(textState.text, { renderer: renderer }),
      }}
    ></div>
  );
};

//Map state to props

const mapStateToProps = (state) => {
  return {
    textState: state,
  };
};

export default connect(mapStateToProps)(Preview);
