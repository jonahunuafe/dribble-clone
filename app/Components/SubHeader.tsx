import KeyboardArrowDownOutlinedIcon  from "@mui/icons-material/KeyboardArrowDownOutlined";
import HomeOutlinedIcon  from "@mui/icons-material/HomeMaxOutlined";

function SubHeader() {
    return (
        <div className='mt-[90px] flex justify-between'>

        </div>
    )
}

export default SubHeader;


function WalletOptions() {
    return (
        <div className='border p-2 rounded-md flex items-center gap-2 cursor-pointer'>
            <HomeOutlinedIcon className='text-purple-600' sx={{ fontSize:'27px' }} />
            <span className='text-[15px] mt-1 text-slate-500'>Home Wallet</span>
            <KeyboardArrowDownOutlinedIcon 
                fontSize='small'
                className='mt-[4px] text-slate-500'
            />
        </div>
    )
}

function ClearAllBtn() {
    return (
        <button className='border transition-all text-slate-500 px-6 hover:bg-slate-50 flex text-sm rounded-md items-center justify-center'>
            <span className=''>Clear All</span>
        </button>
    )
}