export function pick_random(array) {
  const index = Math.floor(array.length * Math.random());
  return array[index];
}
export function sleep(ms) {
  return new Promise((fullfil) => {
    setTimeout(fullfil, ms);
  });
}
export function load_image(src) {
  return new Promise((fullfil, reject) => {
    const img = new Image();
    img.onload = () => fullfil(img);
    img.onerror = reject;
    img.src = src;
  });
}
