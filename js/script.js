"use strict";

const data = [
    {
        name: "HTML",
        level: 40,
        uniqueClass: "skill-item_html"
    },
    {
        name: "CSS",
        level: 40,
        uniqueClass: "skill-item_css"
    },
    {
        name: "Python",
        level: 60,
        uniqueClass: "skill-item_python"
    },
    {
        name: "JS",
        level: 40,
        uniqueClass: "skill-item_js"
    }
];

const skillList = document.querySelector('dl.skill-list');

data.forEach((item) => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    let div = document.createElement('div');

    dt.className = `skill-item ${item.uniqueClass}`;
    dt.textContent = item.name;
    
    div.style.width = `${item.level}%`;
    div.textContent = `${item.level}%`;
    
    dd.className = "skill-level";

    dd.append(div);
    skillList.append(dt, dd)
});
