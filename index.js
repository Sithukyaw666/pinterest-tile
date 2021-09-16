const cardColor = ["#159", "blue", "green", "yellow"];
function gridTile({ size, selector, value }) {
  const section = document.querySelector(`.${selector}`);
  const div = document.querySelectorAll(`.${selector}>div`);
  div.forEach((d) => {
    d.style.gridRowEnd = `span ${d.clientHeight}`;
    d.style.margin = "15px 10px";
    d.style.backgroundColor =
      cardColor[Math.floor(Math.random() * cardColor.length)];
  });

  section.style.display = "grid";

  switch (size) {
    case "small":
      section.style.gridTemplateColumns = `repeat(auto-fit,minmax(200px,1fr)`;
      break;
    case "medium":
      section.style.gridTemplateColumns = `repeat(auto-fit,minmax(250px,1fr)`;
      break;
    case "large":
      section.style.gridTemplateColumns = `repeat(auto-fit,minmax(230px,1fr)`;
      break;
    case "custom":
      section.style.gridTemplateColumns = `repeat(auto-fit,minmax(${
        value ?? "250px"
      },1fr)`;
      break;

    default:
      section.style.gridTemplateColumns = `repeat(auto-fit,minmax(250px,1fr)`;
      break;
  }
}
exports.gridTile = gridTile;
