import type { Dispatch, ReactNode, SetStateAction } from "react";

export type HeroContextType = {
    herosData: HeroObj[] | string[];
    setHerosData: Dispatch<SetStateAction<HeroObj[] | string[]>>,
    isDark: boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>,
    searchHero: HeroObj[],
    setSearchHero: Dispatch<SetStateAction<HeroObj[]>>,
    searchError: string,
    setSearchError: Dispatch<SetStateAction<string>>
};

export type HeroProviderProps = {
  children: ReactNode;
};

type Powerstats = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};

type Biography = {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
};

type Appearance = {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    "eye-color": string;
    "hair-color": string;
}

type Work = {
    occupation: string;
    base: string;
}

type Connections = {
    "group-affiliation": string;
    relatives: string;
}

type Image = {
    url: string
}

export type HeroObj = {
  response: string;
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
} | string;
