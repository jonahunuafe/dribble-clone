import Image from "next/image";

import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";


import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ReceiptLongOutlinedIcon  from "@mui/icons-material/ReceiptLongOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SingleExpense from "./SingleExpense";


export function AllExpenses() {
    return (
        <div className="mt-16">
            <ListHeader />
            <ExpensesList />
        </div>
    );
}


function ListHeader() {
    return (
        <div className="flex justify-between mb-4 items-center px-1">
            <div>
                <span className="font-bold text-[15px] text-slate-700">
                    August 22th 2024
                </span>
            </div>


            <div className="flex gap-7 text-slate-400 text-[11px] font-semibold">
               <span>Number of transaction: 03</span> 
               <span>Value: $2100</span> 
            </div>
        </div>
    );
}


function ExpensesList() {
    return (
        <div className="flex pt-1 mt-4 items-center flex-col gap-5 h-[400px] overflow-y-auto">
            <SingleExpense />
        </div>
    )
}