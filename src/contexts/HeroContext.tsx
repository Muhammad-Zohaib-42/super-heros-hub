import { createContext, useState, type FC } from "react";
import type { HeroContextType, HeroObj, HeroProviderProps } from "../types/types";

export const HeroContext = createContext<HeroContextType | null>(null)

export const HeroProvider: FC<HeroProviderProps> = ({children}) => {
    const [herosData, setHerosData] = useState<HeroObj[]>([])
    const [isDark, setIsDark] = useState<boolean>(false)
    const [searchHero, setSearchHero] = useState<HeroObj | null>(null)

    return <HeroContext.Provider value={{herosData, setHerosData, isDark, setIsDark, searchHero, setSearchHero}}>
        {children}
    </HeroContext.Provider>
}