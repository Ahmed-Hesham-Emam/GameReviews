"use strict";

class GameFetcher {
  constructor() {
    this.games = [];
    this.gamesData = document.getElementById("games-data");
    this.mmorpg = document.getElementById("mmorpg");
    this.shooter = document.getElementById("shooter");
    this.sailing = document.getElementById("sailing");
    this.permaDeath = document.getElementById("perma-death");
    this.superHero = document.getElementById("super-hero");
    this.pixel = document.getElementById("pixel");

    this.mmorpg.addEventListener("click", () => {
      this.fetchGames("mmorpg");
      this.mmorpg.classList.add("active");
      this.shooter.classList.remove("active");
      this.sailing.classList.remove("active");
      this.permaDeath.classList.remove("active");
      this.superHero.classList.remove("active");
      this.pixel.classList.remove("active");
    });
    this.shooter.addEventListener("click", () => {
      this.fetchGames("shooter");
      this.mmorpg.classList.remove("active");
      this.shooter.classList.add("active");
      this.sailing.classList.remove("active");
      this.permaDeath.classList.remove("active");
      this.superHero.classList.remove("active");
      this.pixel.classList.remove("active");
    });

    this.sailing.addEventListener("click", () => {
      this.fetchGames("sailing");
      this.mmorpg.classList.remove("active");
      this.shooter.classList.remove("active");
      this.sailing.classList.add("active");
      this.permaDeath.classList.remove("active");
      this.superHero.classList.remove("active");
      this.pixel.classList.remove("active");
    });

    this.permaDeath.addEventListener("click", () => {
      this.fetchGames("permadeath");
      this.mmorpg.classList.remove("active");
      this.shooter.classList.remove("active");
      this.sailing.classList.remove("active");
      this.permaDeath.classList.add("active");
      this.superHero.classList.remove("active");
      this.pixel.classList.remove("active");
    });

    this.superHero.addEventListener("click", () => {
      this.fetchGames("superhero");
      this.mmorpg.classList.remove("active");
      this.shooter.classList.remove("active");
      this.sailing.classList.remove("active");
      this.permaDeath.classList.remove("active");
      this.superHero.classList.add("active");
      this.pixel.classList.remove("active");
    });

    this.pixel.addEventListener("click", () => {
      this.fetchGames("pixel");
      this.mmorpg.classList.remove("active");
      this.shooter.classList.remove("active");
      this.sailing.classList.remove("active");
      this.permaDeath.classList.remove("active");
      this.superHero.classList.remove("active");
      this.pixel.classList.add("active");
    });

    this.fetchGames("mmorpg");
  }

  async fetchGames(genre) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "017dcae89fmsh665dd24863a169ap1ab1c0jsn3c4b915af181",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const http = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,
      options
    );
    const response = await http.json();

    this.games = response;
    this.displayGames();
  }

  displayGames() {
    let Cartona = "";
    for (let i = 0; i < this.games.length; i++) {
      // console.log(this.games[i]);
      this.games[i].short_description =
        this.games[i].short_description.substring(0, 50) + "...";
      Cartona += `<div class="games-container col-md-3 col-12 mb-3">
                                
                                <div class="games">
                                    <div class="d-flex flex-column align-items-center">
                                        <img src="${this.games[i].thumbnail}">
                                        <p class="text-white pt-1">${this.games[i].title}</p>
                                        <p class="text-white opacity-50">${this.games[i].short_description}</p>         
                                    </div>
                                    <div class="border-top"></div>
                                    <div class="games-footer">
                                    <p class="text-white d-flex justify-content-between"
                                    ><span>${this.games[i].genre}</span><span>${this.games[i].platform}</span>
                                    </p>
                                    </div>
                                </div>
                                </div>`;
    }

    this.gamesData.innerHTML = Cartona;
  }
}

new GameFetcher();

class GameId extends GameFetcher {
  constructor(id) {
    super();
    this.GameContainer = document.getElementById("game-details-container");
    this.close = document.getElementById("close"); // Define gameDetails variable
    this.close.addEventListener("click", () => {
      this.GameContainer.classList.add("d-none");
    });
  }

  async fetchGameId(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "017dcae89fmsh665dd24863a169ap1ab1c0jsn3c4b915af181",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let http1 = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    let fetchID = await http1.json();
    //  console.log(fetchID);

    this.games;
    this.fetchID = fetchID;
    let gameCartona = "";
    for (let i = 0; i < this.games.length; i++) {
      let gameDetails = document.getElementsByClassName("games-container");
      gameDetails[i].addEventListener("click", () => {
        let id = this.games[i].id;
        this.fetchGameId(id);
        console.log(id);

        console.log(this.fetchID);

        //   this.GameContainer.classList.remove("d-none");
        //   gameCartona += `<div class="games-details position-relative row">
        //   <p
        //     role="button"
        //     class="text-white-50 position-absolute d-block"
        //     id="close"
        //   >
        //     <i class="fa-solid fa-x"></i>
        //   </p>
        //   <div class="col-5 d-flex flex-column align-items-center mt-4">
        //     <p class="text-white">Details Game</p>
        //     <img class="w-50" src="${fetchID.thumbnail}" />
        //   </div>
        //   <div class="games-details-footer col-7 mt-5 position-relative">
        //     <p class="text-white">Title: ${fetchID.title}</p>
        //     <p class="text-white">Category: ${fetchID.genre}</p>
        //     <p class="text-white">Platform: ${fetchID.platform}</p>
        //     <p class="text-white">Status: ${fetchID.status}</p>

        //     <p class="text-white">${fetchID.description}></p>

        //     <a
        //       role="button"
        //       class="btn btn-outline-warning"
        //       href="${fetchID.game_url}"
        //       >Show Game</a
        //     >
        //   </div>
        // </div>`;
      });
      // this.GameContainer.innerHTML = gameCartona;
      // console.log(this.gameCartona);
    }
  }
}

new GameId().fetchGameId();
