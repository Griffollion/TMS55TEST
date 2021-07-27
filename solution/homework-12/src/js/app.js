function renderMovie(obj) {
  return `
       
        <div class="movie__container">
          <div class="movie__pic">
            <img
            class="pic"
              src="${obj.pic}"
              alt=""
            />
          </div>
          <div class="movie__name">${obj.name}</div>
          <div class="movie__data">
            <div class="movie__data-icon ic-clock"></div>
            <div class="movie__data-text">${obj.date}</div>
          </div>
          <div class="movie__price">
            <div class="movie__price-icon ic-ticket"></div>
            <div class="movie__price-text">${obj.price}.</div>
          </div>
        </div>
      
        `;
}

async function getDataMovieBase() {
  const response = await fetch("/solution/homework-12/src/data/movie.json");
  const data = await response.json();
  data.forEach((key) => {
    let cards_container = document.querySelector('.cards_container')
    cards_container.insertAdjacentHTML("beforeend", renderMovie(key));
  });
}
getDataMovieBase();
