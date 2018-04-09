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
  location.appendChild(child);
}


const addCats = function(name, food, img) {

  let ul = createUl();
  let li1 = createLi(`Name: ${name}`);
  let li2 = createLi(`Favourite Food: ${food}`);
  let img1 = `<img width="500" src="${img}">`;
  let li3 = createLi(img1);

  appendList(ul, li1);
  appendList(ul, li2);
  appendList(ul, li3);
  fixNewBlock("#cats", ul);
}




const allTheCats = [
  {name: 'Dave', faveFood: 'Cheese', img: 'http://78.media.tumblr.com/8d3e7364417a8f7e0abc04a223857b12/tumblr_otox3fKZ9Y1s05s0mo9_1280.png'},
  {name: 'Boba', faveFood: 'Sock Fluff', img: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  {name: 'Barnaby', faveFood: 'Tuna', img: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'},
  {name: 'Max', faveFood: 'Whiskas Temptations', img: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'}
];



const app = function () {

  for (let cat of allTheCats) {
    let name = cat.name;
    let food = cat.faveFood;
    let img = cat.img;

    addCats(name, food, img);
  }
}


window.onload = app;
