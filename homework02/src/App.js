import "./App.css";
import Header from "./Header";
import Cinema from "./Cinema";
import Blog from "./Blog";
import Cities from "./Cities";

function App() {
  const article = {
    title: "Lorem ipsum",
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    date: new Date().toLocaleDateString(),
    tags: ["#fyp", "#programming", "#tags"],
  };

  const country = {
    countryName: "Scotland",
    countryCities: [
      {
        name: "Glasgow",
        summary:
          "Glasgow is the most populous city in Scotland, the third-most populous city in the United Kingdom, and the 27th-most populous city in Europe.",
        imagePath:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Glasgow_Coat_of_Arms_1996.svg/800px-Glasgow_Coat_of_Arms_1996.svg.png",
        population: 632.35,
        area: 174,
      },
      {
        name: "Edinburgh",
        summary:
          "Edinburgh is the capital city of Scotland and one of its 32 council areas. The city is located in south-east Scotland, and is bounded to the north by the Firth of Forth estuary and to the south by the Pentland Hills.",
        imagePath:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Coat_of_Arms_of_the_Edinburgh_City_Council.svg/800px-Coat_of_Arms_of_the_Edinburgh_City_Council.svg.png",
        population: 506.52,
        area: 263,
      },
    ],
  };

  return (
    <div className="App">
      <Header />

      <Cinema
        name="In Bruges"
        summary="After a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be."
        poster="https://m.media-amazon.com/images/M/MV5BMTUwOGFiM2QtOWMxYS00MjU2LThmZDMtZDM2MWMzNzllNjdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
        shows={[
          {
            session: "16:00",
            cinema: "cinemaplus",
            hall: "hall 5",
            price: "20$",
          },
          {
            session: "12:00",
            cinema: "cinemaplus",
            hall: "hall 3",
            price: "20$",
          },
        ]}
      />

      {/* <Blog data={article} /> */}

      {/* <Cities data={country} /> */}
    </div>
  );
}

export default App;
