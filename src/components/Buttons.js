import "./Buttons.css";

function Buttons() {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <div className="button button1">Button 1</div>
      <div className="button button2">Button 2</div>
      <div className="button button3">Button 3</div>
      <div className="button button4">Button 4</div>
      <div className="button button5">Button 5</div>
      <div className="button button6">Button 6</div>
    </div>
  );
}

export default Buttons;
