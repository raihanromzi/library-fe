/* eslint-disable prettier/prettier */
import { useState } from "react";
import ModalDeleteBook from "./ModalDeleteBook";
import ModalUpdateBook from "./ModalUpdateBook";

export default function BookCardAdmin({ book, setChange, setBooks, setHasMore, setLength, setTempLength }) {
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    async function updateBook() {
        setShowModalUpdate(true)
    }
    function deleteBook() {
        setShowModalDelete(true)
    }

    return <div className="flex h-90 p-5 gap-5 rounded-md flex-auto bg-yellow-400 border-4 border-black">
        <div className='basis-2/6 w-2/6 border-4 border-black rounded-md'>
            <img src={book.image_url} alt="" className="w-full h-80 object-cover self-center rounded-sm  " />
        </div>
        <div className="flex flex-col px-1 basis-4/6 w-4/6">
            <div className="basis-5/6 ">
                <div className="flex flex-col px-2 py-1">
                    <div className='text-lg'>Title :</div>
                    <div className='font-bold '>{book.tittle}</div>
                </div>
                <div className="flex flex-col px-2 py-1 ">
                    <div className='text-lg'>Synopsis :</div>
                    <p className="truncate font-bold">{book.synopsis}</p>
                </div>
                <div className="flex flex-col px-2 py-1">
                    <div className='text-lg'>Author :</div>
                    <div className='font-bold '>{book.author}</div>
                </div>
                <div className="flex flex-col px-2 py-1 gap-1">
                    <div className='text-lg'>Categories :</div>
                    <div className="flex gap-2 flex-wrap">
                        {
                            book.categories.length ? book.categories.map((category) => {
                                // shadow-[4px_4px]
                                return <div key={category.id} className="px-2 py-1 rounded-md bg-gray-200 border border-black">
                                    <div className='font-bold'>{category.category}</div>
                                </div>
                            }) : null
                        }
                    </div>
                </div>
            </div>
            <div className="basis-1/6 flex py-2 gap-3 justify-end">
                <ModalUpdateBook
                    closeModal={() => setShowModalUpdate(false)}
                    isVisible={showModalUpdate}
                    book={book}
                    setChange={setChange}
                    setBooks={setBooks} setTempLength={setTempLength} setHasMore={setHasMore} setLength={setLength}
                />
                <ModalDeleteBook
                    closeModal={() => setShowModalDelete(false)}
                    isVisible={showModalDelete}
                    book={book}
                    setChange={setChange}
                />
                <div onClick={() => {
                    updateBook()
                }} className=" bg-orange-400 p-2 cursor-pointer hover:bg-orange-500 rounded-md border border-black hover:shadow-[4px_4px] transition-[top] hover:relative hover:-top-1 hover:-left-1 ease-linear duration-500 shadow-transparent hover:shadow-black">
                    <div className="font-bold">Update</div></div>
                <div onClick={() => {
                    deleteBook()
                }} className="bg-red-400 p-2 cursor-pointer hover:bg-red-500 rounded-md border border-black hover:shadow-[4px_4px] transition-[top] hover:relative hover:-top-1 hover:-left-1 ease-linear duration-500 shadow-transparent hover:shadow-black">
                    <div className="font-bold">Delete</div></div>
            </div>
        </div>
    </div>
}