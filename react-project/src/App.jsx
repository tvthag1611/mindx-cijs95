import Card from './Card.jsx'
import './App.css'

function App() {

  const cardList = [
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
      name: "Bulbasaur",
      no: "0001",
      arr: ["Grass", "Poison"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
      name: "Ivysaur",
      no: "0002",
      arr: ["Grass", "Poison"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
      name: "Venusaur",
      no: "0003",
      arr: ["Grass", "Poison"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
      name: "Charmander",
      no: "0004",
      arr: ["Fire"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
      name: "Charmeleon",
      no: "0005",
      arr: ["Fire"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
      name: "Charizard",
      no: "0006",
      arr: ["Fire", "Flying"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
      name: "Squirtle",
      no: "0007",
      arr: ["Water"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
      name: "Wartortle",
      no: "0008",
      arr: ["Water"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
      name: "Blastoise",
      no: "0009",
      arr: ["Water"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
      name: "Caterpie",
      no: "0010",
      arr: ["Bug"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
      name: "Metapod",
      no: "0011",
      arr: ["Bug"]
    },
    {
      image: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
      name: "Butterfree",
      no: "0012",
      arr: ["Bug", "Flying"]
    },
  ]

  return (
    <div className='app'>
      {
        cardList.map((card, index) => {
          return <Card item={card} key={index} />
        })
      }
    </div>
  )
}

export default App;
