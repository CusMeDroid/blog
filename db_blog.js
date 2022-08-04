let url = 'https://docs.google.com/spreadsheets/d/1QfSy1t10qZKRmbdyOYCzAWqIYv2-UTN9Am34W2u2DQo/gviz/tq?';
const lkjs = document.querySelector('.lkjs');
const query = encodeURIComponent('Select B,C,D,E');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('class', 'row marbo');
    data.table.rows.forEach((main)=>{
    lkjs.append(container);
    console.log(main.c[0]);
    const imgna = main.c[0];
    console.log(main.c[1]);
    const titlena = main.c[1];
    console.log(main.c[2]);
    const descna = main.c[2];
    console.log(main.c[3]);
    const linkna = main.c[3];
    var fullLink = imgna.v;
    var fullTit = titlena.v;
    var fullDes = descna.v;
    var fullHref = linkna.v;
    console.log(fullLink);
    var column = document.createElement('div');
    var card = document.createElement('div');
    var link = document.createElement('a');
    var elem = document.createElement('img');
    var huah = document.createElement('h2');
    var desc = document.createElement('p');
    var bbtn = document.createElement('button');
    var hreff = document.createElement('a');
    column.setAttribute('class', 'column2');
    card.setAttribute('class', 'card');
    link.setAttribute('href', fullLink);
    link.setAttribute('target', '_blank');
    link.setAttribute('title', 'CusMeDroid');
    link.setAttribute('style', 'display: block;');
    elem.setAttribute('src', fullLink);
    elem.setAttribute('title', fullTit);
    elem.setAttribute('alt', fullTit);
    elem.setAttribute('class', 'card-img');
    huah.innerHTML = fullTit;
    huah.setAttribute('class', 'black Audiowide padd-8');
    desc.innerHTML = fullDes;
    desc.setAttribute('class', 'padd-8 Trirong');
    bbtn.setAttribute('class', 'Trirong green radius-20 blog-btn');
    hreff.setAttribute('href', fullHref);
    hreff.setAttribute('target', '_blank');
    hreff.setAttribute('title', 'Read More '+fullTit);
    hreff.innerHTML = 'More...';
    hreff.setAttribute('class', 'padd-4 Trirong white size-16');

    container.appendChild(column);
    column.appendChild(card);
    card.appendChild(link);
    link.appendChild(elem);
    card.appendChild(huah);
    card.appendChild(desc);
    bbtn.appendChild(hreff);
    card.appendChild(bbtn);
  })
  console.log(data);
})
