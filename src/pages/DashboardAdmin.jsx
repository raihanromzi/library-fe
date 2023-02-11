/* eslint-disable prettier/prettier */
import NavBarAdmin from "../components/NavBarAdmin";

export default function DashboardAdmin() {

    return (
        <div className="h-screen">
            <div className="flex divide-x-4 divide-black">
                <NavBarAdmin />
                <main className="basis-5/6 p-7 flex items-center justify-center">
                    Welcome to Admin Dashboard
                </main>
            </div>
        </div>
    );
}