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

  sortMode: null,
};

const skillList = document.querySelector("dl.skill-list");

skills.generateList(skillList);

const skillsBtn = document.querySelector('.skills-button');
console.log(skillsBtn);

skillsBtn.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName == "BUTTON") {
    switch(target.dataset.type) {
      case 'name':
        sortList("name");
        break;
      
      case 'level':
        sortList("level");
        break;

      default:
        console.log("Неизвестная кнопка");
        break;
    }
  } 
});


function sortList(prop) {
  const data = skills.data; 

  if (skills.sortMode == prop) {
    data.reverse();
    console.log("Инвертировали порядок сортировки");
  }
  
  else {
    data.sort(getComparer(prop));
    skills.sortMode = prop;
    console.log("Отсортировали данные");
  }

  skills.generateList(skillList);

  console.log(data);
};


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

