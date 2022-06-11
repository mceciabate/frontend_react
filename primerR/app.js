const create = React.createElement; 
const h1 = create("h1", {key: 1}, "Con lo visto hasta ahora");
const h2 = create("h2", {key: 2}, "Replica este html");
const h3 = create("h3", {key: 3}, "usando");
const h4 = create("h4", {key:4}, "React.js")
const footer = create("footer", {key: 5}, "Adios!");

const divo = create("div", null, [h1, h2, h3, h4, footer]);

ReactDOM.render(divo, document.getElementById("root"));



