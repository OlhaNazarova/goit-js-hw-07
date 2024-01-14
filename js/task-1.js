const listEl = document.querySelector("#categories");
const allItemEl = listEl.querySelectorAll(".item");
console.log(`Number of categories: ${allItemEl.length}`);

console.log("");

const categorys = allItemEl.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
  console.log("");
});