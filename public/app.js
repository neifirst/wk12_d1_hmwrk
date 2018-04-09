const createUl = function () {
  let ul = document.createElement("ul");
  ul.classList.add("cat");
  return ul;
}

const createLi = function (data) {
  let li = document.createElement("li");
  li.innerHTML = data;
  return li;
}

const appendList = function (ul, li) {
  ul.appendChild(li);
}

const fixNewBlock = function (parent, child) {
  let location = document.querySelector(parent);
  debugger;
  location.appendChild(child);
}

const addCat = function(name, food, img) {
  let ul = createUl();
  let li1 = createLi(name);
  let li2 = createLi(food);
  let img1 = `<img width="500" src="${img}">`;
  let li3 = createLi(img1);

  appendList(ul, li1);
  appendList(ul, li2);
  appendList(ul, li3);
  fixNewBlock("#cats", ul);
}




const app = function () {
addCat('Dave', 'Cheese', 'http://78.media.tumblr.com/8d3e7364417a8f7e0abc04a223857b12/tumblr_otox3fKZ9Y1s05s0mo9_1280.png');
}

window.onload = app;
