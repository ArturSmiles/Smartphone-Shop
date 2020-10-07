window.onload = function () {
    alert("Welcome to Artur's Online Shop")
};

const changeTitle = function (newTitle) {
    document.title = newTitle
    document.getElementsByTagName("h1")[0].innerHTML = newTitle;
}

const addClassToTitle = function () {
    let element = document.getElementById("Title");
    element.classList.add("redTitle");
  }

const removeClassFromTitle = function () {
    let element = document.getElementById("Title");
    element.classList.remove("redTitle");
  }

const changePContent = function () {
    let paragraph = document.querySelectorAll('div p');
    for(let i=0; i<paragraph.length; i++){
    paragraph[i].innerText= "Loser";
    }
};

const changeListTitle = function () {
  let content = document.getElementById("newTitle")
  let ListTitle = document.getElementById("listTitle")
  ListTitle.innerText = content.value
};

const addToTheSecond = function () {
  let content = document.getElementById("newli2")
  let secondList = document.getElementById("secondList")
  let newItem = document.createElement("li")
  newItem.innerText = content.value
  secondList.appendChild(newItem)
}

const firstUlDisappear = function () {
  firstUl = document.getElementById("firstList")
  firstUl.remove()
};

const paintItGreen = function () {
  let ulList = document.querySelectorAll("ul")
  for (let i = 0; i < ulList.length; i++) {
    ulList[i].style.backgroundColor= "green";
  }
};

const makeThemMagnifiable = function () {
  let tableCell = document.querySelectorAll('td');
  for(let i=0; i<tableCell.length; i++){       
      tableCell[i].style.fontSize="30px";   
}
};

document.getElementById("Table").addEventListener("mouseover", makeThemMagnifiable);

const toggleShowImages = function () {
  let image = document.getElementsByTagName("img")
  for(let i=0; i<image.length; i++){
      if(image[i].style.display==="none"){
      image[i].style.display="block";
     }else{
      image[i].style.display="none";
  }
}
};