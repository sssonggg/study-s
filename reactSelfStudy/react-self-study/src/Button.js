import React, { useMemo } from "react";
import PropTypes from "prop-types";

function Button({ text, onClick }) {
  console.log(text, "렌더링 됨!");
  return <button onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

function MemoizedButton(props) {
  return useMemo(() => <Button {...props} />, [props.text, props.onClick]);
}

export default MemoizedButton;
