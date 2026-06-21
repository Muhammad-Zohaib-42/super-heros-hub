import { createContext, useState, type FC } from "react";
import type { HeroContextType, HeroObj, HeroProviderProps } from "../types/types";
import { data } from "../utils/data";

export const HeroContext = createContext<HeroContextType | null>(null)

export const HeroProvider: FC<HeroProviderProps> = ({children}) => {
    const [herosData, setHerosData] = useState<HeroObj[]>(data.slice(0, 9))
    const [isDark, setIsDark] = useState<boolean>(true)
    const [searchHero, setSearchHero] = useState<HeroObj[]>([])
    const [searchError, setSearchError] = useState<string>("")
    const [showProfile, setShowProfile] = useState<HeroObj | null>(null)

    return <HeroContext.Provider value={{herosData, setHerosData, isDark, setIsDark, searchHero, setSearchHero, searchError, setSearchError, showProfile, setShowProfile}}>
        {children}
    </HeroContext.Provider>
}