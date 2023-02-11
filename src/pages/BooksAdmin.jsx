/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import Select from 'react-select'
import { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { axiosInstance } from '../config/config';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import InfiniteScroll from 'react-infinite-scroll-component';
import NavBarAdmin from '../components/NavBarAdmin';
import ModalCreateBook from '../components/ModalCreateBook';
import BookCardAdmin from '../components/BookCardAdmin';


export default function BooksAdmin() {

    const [books, setBooks] = useState([]);
    const [tempLength, setTempLength] = useState(1);
    const [length, setLength] = useState(1);
    const [categories, setCategories] = useState([])
    const [hasMore, setHasMore] = useState(false);
    const [sort, setSort] = useState("ASC")
    const [showModal, setShowModal] = useState(false);
    const [options, setOptions] = useState("");
    const [change, setChange] = useState(1);

    async function fetchCategories() {
        const res = await axiosInstance.get("/categories");
        console.log("jalan cate");
        console.log(res.data);

        if (res.status === 200) {
            const listCategory = await res.data.map((category) => {
                return { value: category.id, label: category.category }
            })
            setOptions(listCategory)
        }
    }

    async function fetchBooks() {
        const savedDataToken = localStorage.getItem("token");

        const res = await axiosInstance
            .post(
                `/books?page=${length}&size=${9}&sort=${sort}`,
                { categories: categories },
                {
                    headers: { Authorization: `Bearer ${savedDataToken}` },
                }
            );
        console.log("res.data");
        console.log(res.data);
        if (res.status === 200) {
            setBooks([...books, ...res.data]);
            setTempLength((prev) => prev + res.data.length);
            setHasMore(Boolean(res.data.length));
        }
    }

    const fetchMore = () => {
        setLength(tempLength + 1)
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    useEffect(() => {
        fetchBooks()
    }, [length, categories, sort, change])





    const listBook = books.map((book) => {
        return <BookCardAdmin key={book.id} book={book} setChange={setChange} setBooks={setBooks} setTempLength={setTempLength} setHasMore={setHasMore} setLength={setLength} />
    })

    const MyFilter = () => (
        <div className='flex basis-10/12 justify-center items-center h-full gap-5'>
            <Select className='basis-11/12 focus:outline-none' options={options} onChange={(values) => {
                const listCategory = values.map((category) => {
                    return { id: category.value, category: category.label }
                })
                setBooks([])
                setTempLength(1)
                setHasMore(false)
                setLength(1)
                setCategories(listCategory)
            }} placeholder={"Select Category ..."} closeMenuOnSelect={false} isMulti isSearchable styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: 5,
                    fontSize: 20,
                    boxShadow: "8px 8px",
                    border: state.isFocused ? '4px solid black' : '4px solid black', '&:hover': {
                        backgroundColor: '4px solid black'
                    },
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    borderColor: "black"
                }),
                multiValue: (styles) => {
                    return {
                        ...styles,
                        fontSize: 20,
                        fontWeight: 700,
                        border: '2px solid black',
                        boxShadow: "5px 5px",
                        paddingLeft: 5,
                        paddingRight: 5,
                        borderRadius: 5
                    };
                },
                menuList: (styles) => {
                    return {
                        ...styles,
                        border: '2px solid black',

                    }
                },
                option: (styles) => {
                    return {
                        ...styles,
                        backgroundColor: "white",
                        fontWeight: "700",
                        '&:hover': {
                            backgroundColor: 'grey',
                            color: 'white'
                        },
                    }
                }


            }}
            />
            <div
                onClick={() => {
                    if (sort === "ASC") {
                        setBooks([])
                        setTempLength(1)
                        setHasMore(false)
                        setLength(1)
                        setSort("DESC")

                    } else {
                        setBooks([])
                        setTempLength(1)
                        setHasMore(false)
                        setLength(1)
                        setSort("ASC")
                    }
                    console.log(sort);

                }}
                className='basis-1/12 flex h-full rounded-md bg-slate-300 items-center justify-center p-1 hover:bg-slate-400 cursor-pointer border-4 border-black shadow-[8px_8px]'>
                {sort === "ASC" ?
                    <AiOutlineSortAscending className='w-1/2 h-full p-1' />
                    : <AiOutlineSortDescending className='w-1/2 h-full p-1' />
                }
            </div>
        </div>
    )

    return (
        <>
            <div className="flex divide-x-4 divide-black">
                <NavBarAdmin />
                <main className={`basis-5/6 p-7 gap-4 flex flex-col bg-purple-500`}>
                    <div className="flex justify-between items-center gap-4 px-2">
                        <MyFilter />
                        <div className='flex basis-2/12 justify-center items-center h-full'>
                            <div
                                onClick={() => {
                                    setShowModal(true)
                                }}
                                className="flex h-full w-full bg-green-400 p-2 cursor-pointer hover:bg-green-500 rounded-md items-center justify-center border-4 border-black shadow-[8px_8px]">
                                <div className='text-lg font-bold'>Create Book</div>
                                <GrFormAdd className='w-1/6 h-full p-2' />
                            </div>
                        </div>
                    </div>
                    <InfiniteScroll dataLength={books.length} className="grid grid-cols-2 gap-10 p-5"
                        next={fetchMore}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}>
                        {listBook}
                    </InfiniteScroll>
                </main>
                <ModalCreateBook
                    closeModal={() => setShowModal(false)}
                    isVisible={showModal}
                    setChange={setChange}
                />
            </div>
        </>
    );
}