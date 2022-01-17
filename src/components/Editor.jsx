import { addText } from "../action";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

//Component begins

const Editor = ({ textState, newText }) => {
  //handling text on change
  const handleChange = (event) => {
    const text = event.target.value;
    newText(text);
  };

  //render
  return (
    <textarea
      className="col col-lg-5 col-md-9 col-11 bg-dark text-white rounded-3"
      onChange={handleChange}
      value={textState.text}
      id="editor"
    ></textarea>
  );
};

//Map state to props

const mapStateToProps = (state) => {
  return {
    textState: state,
  };
};

//Map Dispatch to Props

const mapDispatchToProps = (dispatch) => ({
  newText: (text) => dispatch(addText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
