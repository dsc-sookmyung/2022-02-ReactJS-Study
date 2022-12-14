import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps); // ex. {text: 'hello', id: 1668738843412}
  return { onBtnClick: () => dispatch(remove(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
