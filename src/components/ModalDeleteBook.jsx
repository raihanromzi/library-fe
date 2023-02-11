/* eslint-disable prettier/prettier */

import { axiosInstance } from "../config/config";

export default function ModalDeleteBook({ isVisible, closeModal, book, setChange }) {

    if (!isVisible) return null;
    function closeModalOnWrapper(e) {
        if (e.target.id === "wrapper") closeModal();
    }
    return <div id="wrapper"
        onClick={closeModalOnWrapper} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-30 py-12">
        <div className="flex flex-col h-2/6 w-2/6 rounded-2xl bg-red-400 border-4 border-black shadow-[10px_10px]">
            <div className="text-center py-2 font-bold">Delete Category</div>
            <hr className="border border-black" />
            <div className="flex grow flex-col items-center justify-center gap-5 bg-white rounded-b-xl">
                <div className="font-bold">
                    Are you sure want to delete this book ?
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={async () => {
                            const savedDataToken = localStorage.getItem("token");
                            if (savedDataToken) {
                                const res = await axiosInstance.delete("/books/" + book.id,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${savedDataToken}`
                                        },
                                    })
                                console.log(res);
                                if (res.status === 200) {
                                    setChange((prev) => prev + 1)
                                    closeModal()
                                } else {
                                    console.log("ada error");
                                }
                            }
                        }}
                        className="py-2 px-5 border-2 border-black shadow-[4px_4px]  rounded-md bg-amber-400 hover:bg-amber-500">
                        <div className="font-bold">
                            Yes
                        </div>
                    </button>
                    <button
                        onClick={() => {
                            closeModal()
                        }}
                        className="py-2 px-5 border-2 border-black shadow-[4px_4px]  rounded-md bg-cyan-400 hover:bg-cyan-500"
                    >
                        <div className="font-bold">
                            No
                        </div></button>
                </div>
            </div>
        </div >

    </div>

}