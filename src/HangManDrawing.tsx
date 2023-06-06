const head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      background: "black",
      top: "110px",
      right: "0px",
    }}
  ></div>
);
const rightArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "black",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const lefttArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "black",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);
const rightLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "black",
      top: "200px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
const leftLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "black",
      top: "200px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const bodyParts = [head, body, rightArm, lefttArm, rightLeg, leftLeg];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangManDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {bodyParts.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", backgroundColor: "black" }}
      ></div>
    </div>
  );
}
