"use strict";

const skills = {
  data: [
    {
      name: "HTML",
      level: 40,
      bgImg: "html.svg",
    },
    {
      name: "CSS",
      level: 40,
      bgImg: "css.svg",
    },
    {
      name: "Python",
      level: 60,
      bgImg: "python.svg",
    },
    {
      name: "JS",
      level: 40,
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
        console.log("Сортировка по имени");
        break;
      
      case 'level':
        console.log("Сортировка по уровню");
        break;

      default:
        console.log("Неизвестная кнопка");
        break;
    }
  } 
});
