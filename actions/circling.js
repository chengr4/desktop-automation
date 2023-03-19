import robot from "robotjs";

// keep curcor drawing circle smoothly
export default function circling() {
  setInterval(() => {
    let oldMousePos = robot.getMousePos();
    let newMousePos = { x: oldMousePos.x + 150, y: oldMousePos.y + 150 };
    robot.moveMouseSmooth(newMousePos.x, newMousePos.y);
    oldMousePos = robot.getMousePos();
    newMousePos = { x: oldMousePos.x + 150, y: oldMousePos.y - 150 };
    robot.moveMouseSmooth(newMousePos.x, newMousePos.y);
    oldMousePos = robot.getMousePos();
    newMousePos = { x: oldMousePos.x - 150, y: oldMousePos.y - 150 };
    robot.moveMouseSmooth(newMousePos.x, newMousePos.y);
    oldMousePos = robot.getMousePos();
    newMousePos = { x: oldMousePos.x - 150, y: oldMousePos.y + 150 };
    robot.moveMouseSmooth(newMousePos.x, newMousePos.y);
  }, 200);
}
