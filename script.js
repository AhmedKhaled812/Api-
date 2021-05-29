const api = 'https://www.breakingbadapi.com/api/characters';

async function get() {
  const response = await fetch(api);
  const data = await response.json();

  printdata(data);
}

function printdata(data) {
  const header = document.querySelector('.header');
  const content = document.querySelector('#content');

  header.innerHTML += `  <select class="form-cotrol"  onchange="getch(this.value)">

  <option>chosse...</option>

${data.map(actor => `<option>${actor.name} </option>`)}

</select>

`;
}
async function getch(name) {
  if (name !== 'chosse...') {
    const response = await fetch(`${api}?name=${name}`);
    const data = await response.json();

    content.innerHTML = `<h2>${data[0].name}</h2>
   <h4> (${data[0].portrayed})</h4>
   <img src="${data[0].img}" width="250"}" >`;
  }
}
get();
