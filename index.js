function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested');
}

function increaseRankBy(n) {
  const listItems = document.querySelectorAll('ul.ranked-list');
  console.log(listItems);
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  return document.getElementById('grand-node');
}
