import { createContext, useState, type FC } from "react";
import type { HeroContextType, HeroObj, HeroProviderProps } from "../types/types";
import { data } from "../utils/data";

export const HeroContext = createContext<HeroContextType | null>(null)

export const HeroProvider: FC<HeroProviderProps> = ({children}) => {
    const [herosData, setHerosData] = useState<HeroObj[] | string[]>(data)
    const [isDark, setIsDark] = useState<boolean>(true)
    const [searchHero, setSearchHero] = useState<HeroObj[]>([])
    const [searchError, setSearchError] = useState<string>("")

    return <HeroContext.Provider value={{herosData, setHerosData, isDark, setIsDark, searchHero, setSearchHero, searchError, setSearchError}}>
        {children}
    </HeroContext.Provider>
}