const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

const Header= (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="play-name">
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score"> {props.score} </span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={props.initialPlayers.length}
      />

      {/*Players List */}
      {props.initialPlayers.map( player =>
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      )}
    </div>
  );
}


ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);

// console.log(title);

//var url = "https://squarespace.zendesk.com/api/v2/help_center/en-us/categories/200290338/articles.json?"
//
//url = $.map(url, function(page, i) {
//    return (page + "page=" (pageNumber + 1);
//})
//
//_.each(url, function(page) {
//  url[]
//})


//var map = {};
//  _.each(sections, function(section){
//    map[section.id] = section.category_id;
//  });
//  return map;
//};

// pageNumber = 1;
//
// function page(number) {
//   pageNumber += 1++;
// }
//
// console.log(pageNumber);
