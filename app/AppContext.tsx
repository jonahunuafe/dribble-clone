"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context state
interface AppState {
    openExpenseWindowObject: {
        openExpensewindow: boolean;
        setOpenExpensewindow: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

// Create a default state

const defaultState: AppState = {
    openExpenseWindowObject: {
        openExpensewindow: false,
        setOpenExpensewindow: () => {},
    }
}