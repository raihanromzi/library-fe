/* eslint-disable prettier/prettier */
import { axiosInstance } from "../config/config";

export default function ModalCategoryAdmin({ isVisible, closeModal, purpose, category, setCategory }) {
    const savedDataToken = localStorage.getItem("token");

    async function createHandler() {
        console.log(savedDataToken);
        if (savedDataToken) {
            const res = await axiosInstance.post("/categories",
                category
                , {
                    headers: {
                        Authorization: `Bearer ${savedDataToken}`
                    },
                })
            console.log(res);
            if (res.status === 200) {
                closeModal()
            } else {
                console.log("ada error");
            }
            console.log(category);
        }
    }

    async function updateHandler() {
        console.log(savedDataToken);
        if (savedDataToken) {
            const res = await axiosInstance.patch("/categories/" + category.id,
                category
                , {
                    headers: {
                        Authorization: `Bearer ${savedDataToken}`
                    },
                })
            console.log(res);
            if (res.status === 200) {
                closeModal()
            } else {
                console.log("ada error");
            }
            console.log(category);
        }
    }


    async function deleteHandler() {
        console.log(savedDataToken);
        if (savedDataToken) {
            const res = await axiosInstance.delete("/categories/" + category.id,
                {
                    headers: {
                        Authorization: `Bearer ${savedDataToken}`
                    },
                })
            console.log(res);
            if (res.status === 200) {
                closeModal()
            } else {
                console.log("ada error");
            }
            console.log(category);
        }
    }


    if (!isVisible) return null;
    function closeModalOnWrapper(e) {
        if (e.target.id === "wrapper") closeModal();
    }
    return (
        <div id="wrapper"
            onClick={closeModalOnWrapper} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-20">
            {purpose === "create" ?
                <div className="flex flex-col h-2/6 w-2/6 rounded-2xl bg-green-400  border-4 border-black shadow-[10px_10px]">
                    <div className="text-center py-2 font-bold">Create New Category</div>
                    <hr className="border border-black" />
                    <div className="flex grow flex-col items-center justify-center gap-5 bg-white rounded-b-xl">
                        <div className="flex gap-2">
                            <input type="text" placeholder="Category" onChange={(e) => { setCategory({ ...category, category: e.target.value }) }} value={category["category"]}
                                className="rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none" />
                            <button onClick={() => {
                                createHandler()
                            }} className="py-2 px-3 rounded-md bg-violet-400 hover:bg-violet-500 border-2 border-black shadow-[4px_4px]">
                                <div className="font-bold">Create</div>
                            </button>
                        </div>
                    </div>
                </div>
                : purpose === "update" ?
                    <div className="flex flex-col h-2/6 w-2/6 rounded-2xl bg-orange-400 border-4 border-black shadow-[10px_10px]">
                        <div className="text-center py-2 font-bold">Update Category</div>
                        <hr className="border border-black" />
                        <div className="flex grow flex-col items-center justify-center gap-5 bg-white rounded-b-xl">
                            <div className="flex gap-2">
                                <input type="text" placeholder="Category" onChange={(e) => { setCategory({ ...category, category: e.target.value }) }} value={category["category"]}
                                    className=" rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none" />
                                <button onClick={() => {
                                    updateHandler()
                                }} className="py-2 px-3 rounded-md bg-yellow-400 hover:bg-yellow-500 border-2 border-black shadow-[4px_4px]">
                                    <div className="font-bold ">Update</div>

                                </button>
                            </div>
                        </div>
                    </div>
                    : purpose === "delete" ?
                        <div className="flex flex-col h-2/6 w-2/6 rounded-2xl bg-red-400 border-4 border-black shadow-[10px_10px]">
                            <div className="text-center py-2 font-bold">Delete Category</div>
                            <hr className="border border-black" />
                            <div className="flex grow flex-col items-center justify-center gap-5 bg-white rounded-b-xl">
                                <div className="font-bold">
                                    Are you sure want to delete this category ?
                                </div>
                                <div className="flex gap-2">
                                    <button className="py-2 px-5 border-2 border-black shadow-[4px_4px]  rounded-md bg-amber-400 hover:bg-amber-500"
                                        onClick={() => {
                                            deleteHandler()
                                        }}
                                    >
                                        <div className="font-bold">
                                            Yes
                                        </div>
                                    </button>
                                    <button className="py-2 px-5 border-2 border-black shadow-[4px_4px]  rounded-md bg-cyan-400 hover:bg-cyan-500"
                                        onClick={() => {
                                            closeModal()
                                        }}
                                    >
                                        <div className="font-bold">
                                            No
                                        </div></button>
                                </div>
                            </div>
                        </div>
                        : null
            }
        </div>
    )
}
