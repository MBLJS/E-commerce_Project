function Btn({ title, bgColor, color, border, width, clickFunc}) {
  const BtnStyle = {
    background: bgColor,
    color: color,
    borderRadius: "5px",
    cursor: "pointer",
    padding: "15px 30px",
    border: border ? border : "none",
    outline: "none",
    display: "inline-block",
    margin: "10px",
    width: width,
  }

  return (
    <div>
      <button style={BtnStyle} onClick={clickFunc}>{title}</button>
    </div>
  );
}

export default Btn;