import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'

const SearchBar = () => {
    return (
        <div className=" ml-10 searchDiv grid gap-10 bg-blue-200 rounded-[10px] p-10">
            <form action="">
                <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white px-5 py-3 shadow-lg shadow-greyIsh-700">
                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className="bg-transparent text-blue-500
                            focus:outline-none w-[100%] " placeholder="Tìm kiếm môn học" />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className="bg-transparent text-blue-500
                            focus:outline-none w-[100%] " placeholder="Tìm kiếm giảng viên" />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>
                    <button className="bg-blueColor h-full p-2 px-5 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
                        Search
                    </button>
                </div>
            </form>

            <div className="secDiv flex items-center gap-10 justify-center">
                <div className=" singleSearch flex items-center gap-2">
                    <label htmlFor="relevance" className="text-[#808080] rounded-[3px] px-4  "> Sort by: </label>
                    <select name="" id="relevance" className="bg-white rounded-[3px] px-4 ">
                        <option value="">Giá</option>
                        <option value="">Ngày tạo</option>
                        <option value="">Số lượng học viên</option>
                    </select>
                </div>
                <div className=" singleSearch flex items-center gap-2">
                    <label htmlFor="relevance" className="text-[#808080] rounded-[3px] px-4  "> Sort by: </label>
                    <select name="" id="relevance" className="bg-white rounded-[3px] px-4 ">
                        <option value="">Giảm dần</option>
                        <option value="">Tăng dần</option>
                    </select>
                </div>
                <div className=" singleSearch flex items-center gap-2">
                    <label htmlFor="relevance" className="text-[#808080] rounded-[3px] px-4  "> Sort by: </label>
                    <select name="" id="relevance" className="bg-white rounded-[3px] px-4 ">
                        <option value="">Toán</option>
                        <option value="">Vật lý</option>
                        <option value="">Hóa học</option>
                        <option value="">Sinh học</option>
                    </select>
                </div>
            </div>

        </div>
    )
}
export default SearchBar