const container = document.querySelector("#app");

function makeCardsList(arr) {
  let section = document.createElement("section");
  section.className = "section-cards wrapper";
  arr.forEach((element) => {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card-film";
    cardDiv.innerHTML = `
    <a href="${element.URL}">
        <div class="card-img">
            <img src="${element.img}"></img>
        </div>
        <div class="card-title">
            ${element.title}
        </div>
        <div class="card-info">
            <div class="mb-5">
            <span class="ic-icon1 mr-5 bg-red"></span> 
            <span>${element.date}</span>   
            </div>
            <div>
            <span class="ic-icon2 mr-5 bg-red"></span>  
            <span>${element.price}</span>  
            </div>
        </div>
    </a>
        `;
    section.append(cardDiv);
  });
  return section;
}

async function getDataFromServer() {
  const response = await fetch("/solutions/homework-12/src/data/movies.json");
  const data = await response.json();
  container.append(makeCardsList(data));
}
const h1 = document.createElement("h1");
h1.innerHTML = `Фильмы в кинотеатрах Минска`;
container.append(h1);

getDataFromServer();
