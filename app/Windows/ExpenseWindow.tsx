"use client"

import HomeOutlinedIcon  from "@mui/icons-material/HomeMaxOutlined";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import ReceiptLongOutlinedIcon  from "@mui/icons-material/ReceiptLongOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useAppContext } from "../AppContext";

export function ExpenseWindow() {
    const { openExpenseWindowObject: { openExpenseWindow, setOpenExpenseWindow }, } = useAppContext(); 
    return (
        <div className={`${openExpenseWindow ? "block" : "hidden"} w-[48%] max-sm:w-[82%] z-50 p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-md shadow-md`}>
            <Header />
            <form className="flex flex-col gap-2 pt-8 px-7 mt-3">
                <ExpenseInput />
                <div className="flex mt-3 gap-3 justify-between">
                    <AmountInput />
                    <WalletSelection />
                </div>
            </form>
            <Footer />
        </div>
    )
}

function Header() {
    const { openExpenseWindowObject: { openExpenseWindow, setOpenExpenseWindow }, } = useAppContext(); 
    return (
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">
                <div className="p-[7px] bg-purple-200 rounded-lg flex items-center justify-center">
                    <ReceiptLongOutlinedIcon 
                        sx={{ fontSize: "21px" }}
                        className="text-purple-600"
                    />
                </div>
                <span className="font-semibold text-lg">Add Expense</span>
            </div>

            <CloseOutlinedIcon 
                onClick={() => setOpenExpenseWindow(false)}
                sx={{ fontSize: "18px" }}
                className="text-slate-300 cursor-pointer"
            />
        </div>
    )
}


function ExpenseInput() {
    return (
        <div className="flex  flex-col gap-2">
            <span className="text-[14px] font-medium text-slate-600">Expense Name</span>
            <div className="flex gap-3 justify-between">
                <div className="w-full">
                    <input
                        placeholder="Enter Expense Name..." 
                        className="p-[10px] text-[13px] w-full rounded-md border outline-none"
                    />
                    <p className="text-[11px] mt-2 text-red-500">This is an error</p>
                </div>

                <div className="w-12 h-10 text-white flex items-center justify-center bg-purple-600 rounded-md">
                    <ReceiptLongOutlinedIcon sx={{ fontSize: "21px" }} />
                </div>
            </div>
        </div>
    )
}

function AmountInput() {
    return (
        <div className="flex gap-2 flex-col mt-2 w-full">
            <span className="text-[14px] font-medium text-slate-600">Amount</span>
            <div className="flex gap-3 items-center">
                <div className="w-full">
                    <input
                        placeholder="Enter the Amount..."
                        className="p-[10px] text-[13px] w-full rounded-md border outline-none"
                    />
                    <p className="text-[11px] mt-2 text-red-500">This ia an error</p>
                </div>
            </div>
        </div>
    )
}


function WalletSelection() {
    return (
        <div className="flex gap-2 flex-col mt-2 w-full">
            <span className="text-[14px] font-medium text-slate-600">Wallet</span>
            <div className="border p-[9px] rounded-md flex items-center justify-between gap-2">
                <div className="flex gap-2 items-center">
                    <HomeOutlinedIcon
                        sx={{ fontSize: "22px" }}
                        className="text-purple-600"
                    />
                    <span className="text-[13px] mt-[2px]">Home Wallet</span>
                </div>

                <KeyboardArrowDownOutlined
                    fontSize="small" 
                />
            </div>
        </div>
    )
}


function Footer() {
    const { openExpenseWindowObject: { openExpenseWindow, setOpenExpenseWindow }, } = useAppContext();
    return (
        <div className="w-full p-[12px] mt-8 mb-4 flex gap-3 justify-end px-7 items-center">
            <button
                onClick={() => setOpenExpenseWindow(false)} 
                className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md hover:border-slate-300 transition-all"
            >
                Cancel
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white text-[13px] p-2 px-3 rounded-md transition-all">
                Add Expense
            </button>
        </div>
    ) 
}