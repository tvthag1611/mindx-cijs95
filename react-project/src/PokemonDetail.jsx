import React from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const cardList = [
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
      name: "Bulbasaur",
      no: 1,
      // arr: ["Grass", "Poison"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png",
      name: "Ivysaur",
      no: 2,
      arr: ["Grass", "Poison"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png",
      name: "Venusaur",
      no: 3,
      arr: ["Grass", "Poison"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
      name: "Charmander",
      no: 4,
      arr: ["Fire"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png",
      name: "Charmeleon",
      no: 5,
      arr: ["Fire"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png",
      name: "Charizard",
      no: 6,
      arr: ["Fire", "Flying"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
      name: "Squirtle",
      no: 7,
      arr: ["Water"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png",
      name: "Wartortle",
      no: 8,
      arr: ["Water"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png",
      name: "Blastoise",
      no: 9,
      arr: ["Water"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png",
      name: "Caterpie",
      no: 10,
      arr: ["Bug"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png",
      name: "Metapod",
      no: 11,
      arr: ["Bug"],
    },
    {
      image:
        "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png",
      name: "Butterfree",
      no: 12,
      arr: ["Bug", "Flying"],
    },
  ];
  const hhfdjhfse = useParams();

  console.log(id);

  const pokemon = cardList.find((item) => item.no === parseInt(id, 10));

  return <div>{pokemon.name}</div>;
}
