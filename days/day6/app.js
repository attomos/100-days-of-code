const hue = document.getElementById("hue");
const hueRange = document.getElementById("hue-range");
const saturation = document.getElementById("saturation");
const saturationRange = document.getElementById("saturation-range");
const lightness = document.getElementById("lightness");
const lightnessRange = document.getElementById("lightness-range");

const circle = document.getElementById("circle");
const box = document.getElementById("box");

hue.innerText = hueRange.value;
saturation.innerText = saturationRange.value;
lightness.innerText = lightnessRange.value;

function updateBackgroundColors(h, s, l) {
  circle.style = `background-color: hsl(${h}, ${s}%, ${l}%);`;

  // https://math.stackexchange.com/a/1319623/21727
  let oppositeH = (h + 180) % 360;
  if (h + 180 >= 360) {
    oppositeH = (h - 180) % 360;
  }
  // console.log(h, s, l);
  // console.log(oppositeH, s, l);
  box.style = `background-color: hsl(${oppositeH}, ${s}%, ${l}%);`;
}

updateBackgroundColors(
  hueRange.value,
  saturationRange.value,
  lightnessRange.value
);

hueRange.addEventListener("input", function (e) {
  hue.innerText = hueRange.value;
  updateBackgroundColors(
    hueRange.value,
    saturationRange.value,
    lightnessRange.value
  );
});

saturationRange.addEventListener("input", function (e) {
  saturation.innerText = saturationRange.value;
  updateBackgroundColors(
    hueRange.value,
    saturationRange.value,
    lightnessRange.value
  );
});

lightnessRange.addEventListener("input", function (e) {
  lightness.innerText = lightnessRange.value;
  updateBackgroundColors(
    hueRange.value,
    saturationRange.value,
    lightnessRange.value
  );
});
