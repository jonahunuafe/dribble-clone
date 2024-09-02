"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context state
interface AppState {
    openExpenseWindowObject: {
        openExpenseWindow: boolean;
        setOpenExpenseWindow: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

// Create a default state

const defaultState: AppState = {
    openExpenseWindowObject: {
        openExpenseWindow: false,
        setOpenExpenseWindow: () => {},
    }
}


// create the context with the default values
const AppContext = createContext<AppState>(defaultState);

// Create a provider comnponent
export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [openExpenseWindow, setOpenExpenseWindow] = useState(false)
    return (
        <AppContext.Provider 
            value={{ 
                openExpenseWindowObject: { openExpenseWindow, setOpenExpenseWindow },
            }}
        >
            children
        </AppContext.Provider>
    )
}

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);