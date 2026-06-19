import { createContext, useState, type FC } from "react";
import type { HeroContextType, HeroObj, HeroProviderProps } from "../types/types";

export const HeroContext = createContext<HeroContextType | null>(null)

export const HeroProvider: FC<HeroProviderProps> = ({children}) => {
    const [herosData, setHerosData] = useState<HeroObj[]>([])
    const [isDark, setIsDark] = useState<boolean>(false)

    return <HeroContext.Provider value={{herosData, setHerosData, isDark, setIsDark}}>
        {children}
    </HeroContext.Provider>
}