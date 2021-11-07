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
      <div className="button button7">Button 7</div>
      <div className="button button8">Button 8</div>
      <button className="button button9">Button 9</button>
      <div className="button button10">Button 10</div>
      <div className="button button11">Button 11</div>
      <div className="button button12">
        <span></span>Button 12
      </div>
      <div className="button button13">Button 13</div>
      <div className="button button14">
        <span>Button 14</span>
      </div>
      <div className="button button15">Button 15</div>
    </div>
  );
}

export default Buttons;
