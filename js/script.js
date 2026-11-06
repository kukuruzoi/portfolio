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
        sortByName();
        break;
      
      case 'level':
        sortByLevel();
        break;

      default:
        console.log("Неизвестная кнопка");
        break;
    }
  } 
});


function sortByName() {
  skillList.innerHTML = "";
  
  const data = skills.data;

  data.sort(getComparer("name"));
  skills.generateList(skillList);

  console.log("Сортировка по имени");
  console.log(data);
};


function sortByLevel() {
  skillList.innerHTML = "";

  const data = skills.data;

  data.sort(getComparer("level"));
  skills.generateList(skillList);

  console.log("Сортировка по уровню");
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

