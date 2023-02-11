/* eslint-disable prettier/prettier */
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { axiosInstance } from "../config/config";

export default function ModalCreateBook({ isVisible, closeModal, book, setChange }) {
    console.log("mybook");
    console.log(book);

    const inputFileRef = useRef(null);
    const [enable, setEnable] = useState(false);
    const [bookCover, setBookCover] = useState(null)
    const [image_url, setImageUrl] = useState("")

    const formik = useFormik({
        initialValues: {
            id: 0,
            tittle: "",
            synopsis: "",
            author: "",
            stock: 0,
            image: bookCover,
        },
        onSubmit: async () => {
            const formData = new FormData();
            formData.append("image", bookCover)
            formData.append(
                "id",
                formik.values.id,
            );
            formData.append(
                "tittle",
                formik.values.tittle,
            );
            formData.append(
                "synopsis",
                formik.values.synopsis,
            );
            formData.append(
                "author",
                formik.values.author,
            );
            formData.append(
                "stock",
                formik.values.stock,
            );
            const res = await axiosInstance.post("/books/v1", formData)
            if (res.status === 200) {
                console.log(res);
                setChange((prev) => prev + 1)
                closeModal()
            }
        }
    })

    useEffect(() => {
        let { tittle, synopsis, author, image, stock } = formik.values;
        if (tittle && synopsis && author && image && stock) {
            setEnable(true);
        } else {
            setEnable(false);
        }
    }, [formik.values]);


    // const Modal = ({ tittle, bgColorHeader, buttonName }) => {
    //     return <div className={`flex flex-col h-4/6 w-1/2 rounded-2xl ${bgColorHeader} border-4 border-black shadow-[15px_15px]`}>
    //         <div className="text-center py-2 font-bold">{tittle}</div>
    //         <hr className="border border-black" />
    //         <div className="flex grow items-center justify-evenly gap-2 bg-white rounded-b-xl">
    //             {
    //                 <div className="w-1/3 h-2/3 flex items-center justify-center cursor-pointer rounded-md border-2 border-black shadow-[8px_8px]"
    //                     onClick={() => inputFileRef.current.click()}
    //                 >
    //                     {image_url ? <img src={image_url} alt="" className="w-full h-full object-cover rounded-md" />
    //                         : bookCover ?
    //                             <img src={URL.createObjectURL(bookCover)} alt="" className="w-full h-full object-cover rounded-md" />
    //                             :
    //                             <MdOutlineAddPhotoAlternate className="w-2/5 h-2/5 object-cover text-black" />}
    //                 </div>
    //             }
    //             <div className="basis-1/2 flex flex-col gap-2">
    //                 <div className="w-5/6 flex flex-col">
    //                     <label htmlFor="tittle" className="font-bold">Tittle</label>
    //                     <input id="tittle" type="text" placeholder="Tittle" defaultValue={formik.values.tittle}
    //                         onChange={(e) => {
    //                             console.log(formik.values.tittle);
    //                             formik.setFieldValue("tittle", e.target.value)
    //                         }}
    //                         className="rounded-md p-2  border-2 border-black shadow-[4px_4px] focus:outline-none" />
    //                 </div>
    //                 <div className="w-5/6 flex flex-col">
    //                     <label htmlFor="synopsis" className="font-bold">Synopsis</label>
    //                     <textarea id="synopsis" name="synopsis" placeholder="Synopsis" cols="30" rows="3"
    //                         value={formik.values.synopsis} onChange={(e) => formik.setFieldValue("synopsis", e.target.value)}
    //                         className="rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none"></textarea>
    //                 </div>
    //                 <div className="w-5/6 flex flex-col">
    //                     <label htmlFor="author" className="font-bold">Author</label>
    //                     <input id="author" type="text" placeholder="Author" value={formik.values.author}
    //                         onChange={(e) => formik.setFieldValue("author", e.target.value)}
    //                         className="rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none" />
    //                 </div>
    //                 <div className="w-5/6 flex flex-col">
    //                     <label htmlFor="stock" className="font-bold">Stock</label>
    //                     <input id="stock" type="text" placeholder="Book Stock" value={formik.values.stock}
    //                         onChange={(e) => formik.setFieldValue("stock", e.target.value)}
    //                         className="rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none" />
    //                 </div>
    //                 <input type="file" placeholder="Book Cover" ref={inputFileRef}
    //                     accept="image/png, image/jpeg"
    //                     onChange={(e) => {
    //                         formik.setFieldValue("image", e.target.files[0])
    //                         setImageUrl("")
    //                         setBookCover(e.target.files[0])
    //                     }} className="border rounded-md p-2 w-5/6 hidden" />

    //                 <button onClick={() => {
    //                     console.log("formik.values");
    //                     console.log(formik.values);
    //                 }}
    //                     disabled={!enable}
    //                     className="mt-3 rounded-md p-4 w-5/6 bg-gray-400 hover:bg-gray-500 cursor-pointer border-2 border-black shadow-[4px_4px] disabled:cursor-not-allowed">
    //                     <div className="font-bold">{buttonName}</div>
    //                 </button>
    //                 <div className="text-red-500 font-bold ">error bad request</div>

    //             </div>
    //         </div>
    //     </div>
    // }
    // useEffect(() => {
    //     setCurrentBook(book)
    // }, [book])



    if (!isVisible) return null;
    function closeModalOnWrapper(e) {
        if (e.target.id === "wrapper") closeModal();
    }
    return (
        <div id="wrapper"
            onClick={closeModalOnWrapper} className="fixed inset-0 z-50 flex flex-col items-center bg-black justify-center bg-opacity-30 py-12">
            {/* {purpose === "create" ?
                <Modal tittle={"Create new book"} buttonName={"Create"} bgColorHeader={"bg-green-400"} />
                : purpose === "update" ?
                    <Modal tittle={"Update Book"} buttonName={"Update"} bgColorHeader={"bg-orange-400"} />
                    : purpose === "delete" ?
                        <ModalDelete />
                        : null
            } */}
            <div className={`flex flex-col h-4/6 w-1/2 rounded-2xl bg-green-400 border-4 border-black shadow-[15px_15px]`}>
                <div className="text-center py-2 font-bold">Create new book</div>
                <hr className="border border-black" />
                <div className="flex grow items-center justify-evenly gap-2 bg-white rounded-b-xl">
                    {
                        <div className="w-1/3 h-2/3 flex items-center justify-center cursor-pointer rounded-md border-2 border-black shadow-[8px_8px]"
                            onClick={() => inputFileRef.current.click()}
                        >
                            {image_url ? <img src={image_url} alt="" className="w-full h-full object-cover rounded-md" />
                                : bookCover ?
                                    <img src={URL.createObjectURL(bookCover)} alt="" className="w-full h-full object-cover rounded-md" />
                                    :
                                    <MdOutlineAddPhotoAlternate className="w-2/5 h-2/5 object-cover text-black" />}
                        </div>
                    }
                    <div className="basis-1/2 flex flex-col gap-2">
                        <div className="w-5/6 flex flex-col">
                            <label htmlFor="tittle" className="font-bold">Tittle</label>
                            <input id="tittle" type="text" placeholder="Tittle" defaultValue={formik.values.tittle}
                                onChange={(e) => {
                                    console.log(formik.values.tittle);
                                    formik.setFieldValue("tittle", e.target.value)
                                }}
                                className="rounded-md p-2  border-2 border-black shadow-[4px_4px] focus:outline-none" />
                        </div>
                        <div className="w-5/6 flex flex-col">
                            <label htmlFor="synopsis" className="font-bold">Synopsis</label>
                            <textarea id="synopsis" name="synopsis" placeholder="Synopsis" cols="30" rows="3"
                                defaultValue={formik.values.synopsis} onChange={(e) => formik.setFieldValue("synopsis", e.target.value)}
                                className="rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none"></textarea>
                        </div>
                        <div className="w-5/6 flex flex-col">
                            <label htmlFor="author" className="font-bold">Author</label>
                            <input id="author" type="text" placeholder="Author" defaultValue={formik.values.author}
                                onChange={(e) => formik.setFieldValue("author", e.target.value)}
                                className="rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none" />
                        </div>
                        <div className="w-5/6 flex flex-col">
                            <label htmlFor="stock" className="font-bold">Stock</label>
                            <input id="stock" type="text" placeholder="Book Stock" defaultValue={formik.values.stock}
                                onChange={(e) => formik.setFieldValue("stock", e.target.value)}
                                className="rounded-md p-2 border-2 border-black shadow-[4px_4px] focus:outline-none" />
                        </div>
                        <input type="file" placeholder="Book Cover" ref={inputFileRef}
                            accept="image/png, image/jpeg"
                            onChange={(e) => {
                                formik.setFieldValue("image", e.target.files[0])
                                setImageUrl("")
                                setBookCover(e.target.files[0])
                            }} className="border rounded-md p-2 w-5/6 hidden" />

                        <button onClick={formik.handleSubmit}
                            disabled={!enable}
                            className="mt-3 rounded-md p-4 w-5/6 bg-gray-400 hover:bg-gray-500 cursor-pointer border-2 border-black shadow-[4px_4px] disabled:cursor-not-allowed">
                            <div className="font-bold">Create</div>
                        </button>
                        <div className="text-red-500 font-bold ">error bad request</div>

                    </div>
                </div>
            </div>

        </div>
    )
}
