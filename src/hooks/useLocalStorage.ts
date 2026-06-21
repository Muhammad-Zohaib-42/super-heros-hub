import type { HeroObj } from "../types/types";

export const useLocalStorage = (initialState?: HeroObj[]) => {
    if (initialState) {
        localStorage.setItem("herosData", JSON.stringify(initialState))
    }

    function setData(data: HeroObj[]) {
        localStorage.setItem("herosData", JSON.stringify(data))
    }

    function getData() {
        let data: HeroObj[] | null = null
        const dataJson = localStorage.getItem("herosData")

        if (dataJson) {
            data = JSON.parse(dataJson)
        }

        return data
    }

    return {setData, getData}
}