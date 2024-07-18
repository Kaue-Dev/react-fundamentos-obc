const games = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    releaseDate: "2017-03-03",
    platform: "Nintendo Switch",
  },
  {
    id: 2,
    name: "Super Mario Odyssey",
    releaseDate: "2017-10-27",
    platform: "Nintendo Switch",
  },
  {
    id: 3,
    name: "The Witcher 3: Wild Hunt",
    releaseDate: "2015-05-19",
    platform: "PlayStation 4",
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    releaseDate: "2018-10-26",
    platform: "PlayStation 4",
  },
  {
    id: 5,
    name: "The Last of Us Part II",
    releaseDate: "2020-06-19",
    platform: "PlayStation 4",
  },
  {
    id: 6,
    name: "God of War",
    releaseDate: "2018-04-20",
    platform: "PlayStation 4",
  },
];

export const App = () => {
  return (
    <div>
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
};
