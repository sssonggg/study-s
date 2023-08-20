import React, { useMemo } from "react";
import PropTypes from "prop-types";

function Button({ text, onClick, fontSize }) {
  console.log(text, "렌더링 됨!");
  return <button onClick={onClick} style={{fontSize}}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

const MemoizedButton = React.memo(Button);

export default MemoizedButton;
