const randomColor = () => {
  const vals = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const selection = ["#"];
  for (let i = 0; i < 6; i++) {
    const r = vals[Math.floor(Math.random() * vals.length) | 0];
    selection.push(r);
  }
  return selection.join("");
};

const yospan = document.querySelector("span.yo");

yospan.addEventListener("mouseover", (e) => {
  console.log("-= Y O =-");
});

yospan.addEventListener("click", (e) => {
  console.log("click");
  yospan.style.color = randomColor();
});
