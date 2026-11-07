"use strict";

const skills = {
  data: [
    {
      name: "HTML",
      level: 30,
      bgImg: "html.svg",
    },
    {
      name: "CSS",
      level: 40,
      bgImg: "css.svg",
    },
    {
      name: "Python",
      level: 50,
      bgImg: "python.svg",
    },
    {
      name: "JS",
      level: 60,
      bgImg: "javascript.svg",
    },
  ],

  sortMode: null,

  generateList: function (parentElement) {
    parentElement.innerHTML = "";
    this.data.forEach((item) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      const div = document.createElement("div");

      const itemLevel = item.level

      dt.className = "skill-item";
      dt.textContent = item.name;
      dt.style.backgroundImage = `url("img/skill/${item.bgImg}")`;

      div.style.width = `${itemLevel}%`;
      div.textContent = `${itemLevel}%`;

      dd.className = "skill-level";

      dd.append(div);
      parentElement.append(dt, dd);
    });
  },

  sortList: function (prop, parentElement) {
    if (this.sortMode == prop) {
      this.data.reverse();
      console.log("Инвертировали порядок сортировки");
    }
    
    else {
      this.data.sort(getComparer(prop));
      this.sortMode = prop;
      console.log("Отсортировали данные");
    }

    this.generateList(parentElement);

    console.log(this.data);
  },
};

const skillList = document.querySelector("dl.skill-list");
const skillsBtn = document.querySelector('.skills-button');

skills.generateList(skillList);

skillsBtn.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName == "BUTTON") {
    switch(target.dataset.type) {
      case 'name':
        skills.sortList("name", skillList);
        break;
      
      case 'level':
        skills.sortList("level", skillList);
        break;

      default:
        console.log("Неизвестная кнопка");
        break;
    }
  } 
});


function getComparer (prop) {
  return function compare(a, b) {
    if (a[prop] < b[prop]) {
      return -1;
    }

    if (a[prop] > b[prop]) {
      return 1;
    }

    return 0;
  }
}


const mainNav = document.querySelector(".main-nav");
const btnNav = document.querySelector(".nav-btn");
console.log(mainNav);
console.log(btnNav);

btnNav.addEventListener("click", (e) => {
  let target = e.target;

  if (target.tagName == "BUTTON") {
    console.log("Нажата кнопка закрытия");
  }
});


function closeMenu () {
  mainNav.classList.add('main-nav_closed');
  btnNav.classList.remove('nav-btn_close');
  btnNav.classList.add('nav-btn_open');
  btnNav.innerHTML = '<span class="visually-hidden">Открыть меню</span>'
};
closeMenu();