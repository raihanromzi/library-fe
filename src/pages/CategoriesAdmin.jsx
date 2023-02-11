/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import ModalCategoryAdmin from "../components/ModalCategoryAdmin";
import NavBarAdmin from "../components/NavBarAdmin";
import { axiosInstance } from "../config/config";

export default function CategoriesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [purpose, setPurpose] = useState("");
    const [category, setCategory] = useState({ id: 0, category: "" });
    const [categories, setCategories] = useState([])

    function updateCategory(category) {
        setCategory(category)
        setShowModal(true)
        setPurpose("update")
    }

    function deleteCategory(category) {
        setCategory(category)
        setShowModal(true)
        setPurpose("delete")
    }

    async function fetchCategories() {
        const res = await axiosInstance.get("/categories");
        if (res.status === 200) {
            setCategories(res.data)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [showModal])

    const content = categories.map((category) => {
        return <li key={category.id} className="flex items-center justify-between border-2 border-black w-full p-3 rounded-md shadow-[5px_5px]">
            <div className="font-bold">{category.category}</div>
            <div className="flex gap-3">
                <div onClick={() => {
                    updateCategory(category)
                }} className=" bg-orange-400 p-2 cursor-pointer hover:bg-orange-500 rounded-md border border-black shadow-[4px_4px]"><div className="text-white font-bold">Update</div></div>
                <div onClick={() => {
                    deleteCategory(category)
                }} className="bg-red-400 p-2 cursor-pointer hover:bg-red-500 rounded-md border border-black shadow-[4px_4px]"><div className="text-white font-bold">Delete</div></div>
            </div>
        </li>
    })

    return (
        <>
            <div className={"flex divide-x-4 divide-black"}>
                <NavBarAdmin />
                <main className="basis-5/6 p-7 flex flex-col divide-y-2 divide-black gap-3">
                    <div className="flex justify-end p-2">
                        <div
                            onClick={() => {
                                setCategory({ id: 1, category: "" })
                                setShowModal(true)
                                setPurpose("create")

                            }} className="flex gap-1p-2 cursor-pointer rounded-md items-center font-bold">
                            <div>Create Category</div>
                            <MdAdd />
                        </div>
                    </div>
                    <ul className="grid grid-cols-4 w-full px-1 py-4 gap-4">
                        {
                            content
                        }
                    </ul>
                </main>
            </div >
            <ModalCategoryAdmin
                closeModal={() => setShowModal(false)}
                isVisible={showModal}
                purpose={purpose}
                category={category}
                setCategory={setCategory}
            />
        </>
    );
}


