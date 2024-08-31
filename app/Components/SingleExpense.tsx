import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function SingleExpense() {
    return (
        <div className="w-full bg-white rounded-lg border border-slate-100 shadow-md flex gap-3 items-center justify-between p-5 py-6">
            <div className="flex gap-3 items-center">
                <div>
                    <div className="bg-purple-200 rounded-lg p-2 flex items-center justify-center">
                        <HomeOutlinedIcon 
                            className="text-purple-600"
                            sx={{ fontSize: "27px" }}
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="font-bold">Expense Name</span>
                    <div className="flex">
                        <span className="text-slate-400 text-[13px] p-[2px]">Wallet</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-11 font-bold items-center">
                <span className="text-[16px]">99 $</span>
                <div className="flex gap-2 items-center">
                    <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer">
                        <EditOutlinedIcon
                            sx={{ fontSize: "17px" }}
                            className="text-purple-600"
                        />
                    </div>

                    <div className="rounded-lg p-2 flex items-center justify-center cursor-pointerbg-slate-200 hover:bg-slate-300">
                        <DeleteOutlinedIcon 
                            sx={{ fontSize: "17px" }}
                            className="text-slate-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleExpense;