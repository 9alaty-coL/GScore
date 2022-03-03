import { createSlice } from "@reduxjs/toolkit";

const initialLeagueState = [
  {
    id: "2021",
    slug: "premier-league",
    name: "Premier League",
      logoSource: "/Leagues-logo/epl.png",
    },
    {
      id: "2014",
      slug: "la-liga",
      name: "La Liga",
      logoSource: "/Leagues-logo/laliga.png",
    },
    {
      id: "2015",
      slug: "ligue-1",
      name: "Ligue 1",
      logoSource: "/Leagues-logo/league1.png",
    },
    {
      id: "2002",
      slug: "bundes-liga",
      name: "Bundes Liga",
      logoSource: "/Leagues-logo/bundesliga.png",
    },
    {
      id: "2019",
      slug: "serie-a",
      name: "Serie A",
      logoSource: "/Leagues-logo/seriea.png",
    },
    {
      id: "2017",
      slug: "primeira-liga",
      name: "Primeira Liga",
      logoSource: "/Leagues-logo/primeiraliga.png",
    },
    {
      id: "2003",
      slug: "eredivisie",
      name: "Eredivisie",
      logoSource: "/Leagues-logo/eredivisie.png",
    },
  ];
  
const leaguesSlice = createSlice({
    name: 'leagues',
    initialState: initialLeagueState,
    reducers: {

    }
})

export default leaguesSlice