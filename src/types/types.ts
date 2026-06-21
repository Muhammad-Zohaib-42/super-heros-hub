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
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

type Biography = {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
};

type Appearance = {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

type Work = {
    occupation: string;
    base: string;
}

type Connections = {
    groupAffiliation: string;
    relatives: string;
}

type Image = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

export type HeroObj = {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
};
