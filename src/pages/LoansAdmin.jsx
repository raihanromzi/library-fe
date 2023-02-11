/* eslint-disable prettier/prettier */
import moment from "moment";
import { useEffect, useState } from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import { axiosInstance } from "../config/config";

export default function LoansAdmin() {
    const savedDataToken = localStorage.getItem("token");
    const [loans, setLoans] = useState([])

    async function fetchLoans() {
        if (savedDataToken) {
            const res = await axiosInstance.get("/loans", {
                headers: { Authorization: `Bearer ${savedDataToken}` },
            });
            if (res.status === 200) {
                setLoans(res.data)
            }

        }

    }

    useEffect(() => {
        fetchLoans()
    }, [])

    const content = loans.map((loan) => {
        const date = moment(loan.loan_time).format("MMM DD/MM/YYYY HH:mm:ss ")
        return <div key={loan.id} className="flex h-64 border p-2 rounded-md flex-auto divide-x-2">
            <img src={loan.book.image_url} alt="" className="px-3 basis-1/6 w-1/6 h-60 object-cover self-center" />
            <div className="flex flex-col px-1 basis-1/6 w-1/6">
                <div className="basis-5/6 ">
                    <div className="px-2 py-1">Loan Details :</div>
                    <div className="flex flex-col p-2 ">
                        <div>- Loans Time</div>
                        <div>{date}</div>
                    </div>
                    <div className="flex flex-col p-2 ">
                        <div>- Return</div>
                        <div>{loan.return.toString()}</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-1 basis-2/6 w-2/6">
                <div className="basis-5/6 ">
                    <div className="px-2 py-1">Book Details :</div>
                    <div className="flex flex-col p-2">
                        <div>- Title</div>
                        <div>{loan.book.tittle}</div>
                    </div>
                    <div className="flex flex-col p-2">
                        <div>- Synopsis</div>
                        <p className="truncate">{loan.book.synopsis}</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <div>- Author</div>
                        <div>{loan.book.author}</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-1 basis-2/6 w-2/6">
                <div className="basis-5/6 ">
                    <div className="px-2 py-1">User Details :</div>
                    <div className="flex flex-col p-2 ">
                        <div>- NIM</div>
                        <div>{loan.user.nim}</div>
                    </div>
                    <div className="flex flex-col p-2 ">
                        <div>- Username</div>
                        <div>{loan.user.username}</div>
                    </div>
                    <div className="flex flex-col p-2">
                        <div>- Email</div>
                        <div>{loan.user.email}</div>
                    </div>
                </div>
            </div>

        </div>
    })

    return (
        <div className="h-screen">
            <div className="flex divide-x-4 divide-black ">
                <NavBarAdmin />
                <main className="basis-5/6 p-7 gap-4 grid grid-cols-1">
                    {content}
                </main>

            </div>
        </div>
    );
}