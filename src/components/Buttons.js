import "./Buttons.css";

function Buttons() {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className="button button1">Button 1</div>
      <div className="button button2">Button 2</div>
    </div>
  );
}

export default Buttons;
