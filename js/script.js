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
      let dt = document.createElement("dt");
      let dd = document.createElement("dd");
      let div = document.createElement("div");

      dt.className = "skill-item";
      dt.textContent = item.name;
      dt.style.backgroundImage = `url("../img/skill/${item.bgImg}")`;

      div.style.width = `${item.level}%`;
      div.textContent = `${item.level}%`;

      dd.className = "skill-level";

      dd.append(div);
      parentElement.append(dt, dd);
    });
  },
};

const skillList = document.querySelector("dl.skill-list");

skills.generateList(skillList);
