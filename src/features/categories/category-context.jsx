import { createContext, useContext, useState } from "react";

const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState();

    return (
        <categoryContext.Provider value={{ category, setCategory }}>
            {children}
        </categoryContext.Provider>
    )
}

const useCategoryContext = () => {
    return useContext(categoryContext)
}

export { useCategoryContext, CategoryProvider }