/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-openlibz.png';

export default function NavBarAdmin() {
    return (
        <nav className="basis-1/6 sticky top-0 flex flex-col bg-blue-500 h-screen ">
            <Link to="/admin/dashboard" className="p-7">
                <img src={Logo} alt="" className="h-1/2" />
            </Link>
            <hr className="border border-black" />
            <ul className="flex flex-col gap-2 p-3 ">
                <li>
                    {/* hover:bg-gray-300  */}
                    <Link
                        to="/admin/dashboard/books"
                        className="flex px-4 py-2 hover:bg-gray-300  rounded-md cursor-pointer font-bold hover:shadow-[5px_5px] hover:shadow-lime-500">
                        Books
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/dashboard/categories"
                        className="flex px-4 py-2 hover:bg-gray-300  rounded-md cursor-pointer font-bold hover:shadow-[5px_5px] hover:shadow-lime-500">
                        Categories
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/dashboard/loans"
                        className="flex px-4 py-2  hover:bg-gray-300 rounded-md cursor-pointer font-bold hover:shadow-[5px_5px] hover:shadow-lime-500">
                        Loans
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
