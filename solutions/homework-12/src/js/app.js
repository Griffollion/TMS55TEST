const container = document.querySelector('#app')

function makeCardsList(arr) {
    let section = document.createElement('section')
    section.className = 'section-cards'
    arr.forEach((element) => {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card-film";
    cardDiv.innerHTML = `
    <div class="card-img">
        <img src="${element.img}"></img>
    </div>
    <div class="card-title">
        ${element.title}
    </div>
    <div class="card-date">
        ${element.date}
    </div>
    <div class="card-price">
        ${element.price}
    </div>
        `;
    section.append(cardDiv)
  });
  return section
}

async function getDataFromServer(){
    const response = await fetch ('/solutions/homework-12/src/data/movies.json')
    const data = await response.json()
    
}

