
export default function User() {
    return (
        <div className="w-100% h-190 bg-black text-white  ">


            <div className="grid grid-cols-2 items-center mb-4">
                <h1 className="text-2xl font-bold pl-8 pt-4">User</h1>
                <div className="flex justify-end">
                    <button className=" text-white px-1 py-1 font-bold pr-1  border-2 mr-2 rounded">
                        Create User
                    </button>
                </div>
            </div>


            <div className="grid gap-4 items-center p-4 bg-black-100 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

                <div>
                    <input type="date" className="border rounded px-2 py-1 w-full" />
                </div>


                <div>
                    <select className="border border-gray-300 rounded px-2 py-1 w-full bg-black bg-opacity-50">
                        <option>Priority Level</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>


                <div>
                    <select className="border border-gray-300 rounded px-2 py-1 w-full bg-black bg-opacity-50">
                        <option>Department</option>
                        <option>HR</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                    </select>
                </div>


                <div>
                    <select className="border border-gray-300 rounded px-2 py-1 w-full bg-black bg-opacity-50">
                        <option>Status</option>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Closed</option>
                    </select>
                </div>


                <div>
                    <select className="border border-gray-300 rounded px-2 py-1 w-full bg-black bg-opacity-50">
                        <option>Services</option>
                        <option>VM</option>
                        <option>CloudSec</option>
                        <option>DRP</option>
                    </select>
                </div>


                <div>
                    <button className=" text-white py-1  rounded w-full border ">
                        Search
                    </button>

                </div>



            </div>


            <div className="grid grid-cols-7  p-4 pl-10 items-center  rounded border mr-1 ml-1">

                <span className="px-2 py-1 ">ID ◆</span>


                <span className="px-2 py-1 ">Assignee ◆</span>


                <input type="date" className="px-2 py-1  text-white rounded outline-none " />


                <div className="relative flex items-center">
                    <select className="appearance-none px-2 py-1 pr-6  outline-none bg-black bg-opacity-50 ">
                        <option>Priority Level</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                    <span className="absolute right-1 text-lg">◆</span>
                </div>


                <div className="relative flex items-center">
                    <select className="appearance-none px-2 py-1 pr-6  outline-none bg-black bg-opacity-50 ">
                        <option>Department</option>
                        <option>HR</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                    </select>
                    <span className="absolute right-1 text-lg">◆</span>
                </div>


                <div className="relative flex items-center ">
                    <select className="appearance-none px-2 py-1 pr-6  outline-none text-white shadow-md bg-black bg-opacity-50 ">
                        <option>Status</option>
                        <option>Open</option>
                        <option>Closed</option>
                        <option>In Progress</option>
                    </select>
                    <span className="absolute right-1 text-lg">◆</span>
                </div>


                <div className="relative flex items-center">
                    <select className="appearance-none px-2 py-1 pr-6  outline-none bg-black bg-opacity-50 ">
                        <option>Services</option>
                        <option>VM</option>
                        <option>CloudSec</option>
                        <option>DRP</option>
                    </select>
                    <span className="absolute right-1 text-lg">◆</span>
                </div>
            </div>




            <div className="data p-4  border ml-1 mr-1 ">

                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#34304</span>
                    <span>Alex Will</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-cyan-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">7 Alerts</span>
                    </div>

                    <span>15/02/2025</span>
                    <span className="text-orange-800">High</span>
                    <span>HR</span>
                    <span>Open</span>
                    <span className="border border-white rounded px-2 py-1 inline-block w-20">VM</span>
                    <span>⋮</span>
                </div>



                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#34304</span>
                    <span>Jim</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-cyan-500 text-red-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">9 Alerts</span>
                    </div>

                    <span>10/02/2025</span>
                    <span className="text-green-800">Low</span>
                    <span>Marketing</span>
                    <span>Contained</span>
                    <span className="border border-white rounded px-2 py-1 inline-block  w-20">MDR</span>
                    <span>⋮</span>
                </div>





                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#31596</span>
                    <span>Jack</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-cyan-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">4 Alerts</span>
                    </div>

                    <span>5/02/2025</span>
                    <span className=" text-cyan-500">Medium</span>
                    <span>Sales</span>
                    <span>Remediated</span>
                    <span className="border border-white rounded px-2 py-1 inline-block  w-20 ">CloudSec
                    </span>
                    <span>⋮</span>
                </div>




                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#34304</span>
                    <span>Jim</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-red-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">9 Alerts</span>
                    </div>

                    <span>10/02/2025</span>
                    <span className="text-green-800">Low</span>
                    <span>Marketing</span>
                    <span>Contained</span>
                    <span className="border border-white rounded px-2 py-1 inline-block  w-20">MDR</span>
                    <span>⋮</span>
                </div>






                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#34927</span>
                    <span>John Wick</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-red-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">4 Alerts</span>
                    </div>

                    <span>9/02/2025</span>
                    <span className="text-red-800">Critical</span>
                    <span>Finance</span>
                    <span>Acknowledged</span>
                    <span className="border border-white rounded px-2 py-1 inline-block  w-20">DRP
                    </span>
                    <span>⋮</span>
                </div>






                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#31596</span>
                    <span>Jack</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-cyan-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">6 Alerts</span>
                    </div>

                    <span>5/02/2025</span>
                    <span className="text-cyan-800">Medium</span>
                    <span>Sales</span>
                    <span>Remediated</span>
                    <span className="border border-white rounded px-2 py-1 inline-block  w-20">CloudSec
                    </span>
                    <span>⋮</span>
                </div>






                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#34927</span>
                    <span>John Wick</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-red-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">4 Alerts</span>
                    </div>

                    <span>9/02/2025</span>
                    <span className="text-red-800">Critical</span>
                    <span>Finance</span>
                    <span>Acknowledged</span>
                    <span className="border border-white rounded px-2 py-1 inline-block  w-20">DRP
                    </span>
                    <span>⋮</span>
                </div>







                <div className="grid grid-cols-9 gap-x-2 p-4 text-white relative left-5">
                    <span>#34304</span>
                    <span>Alex Will</span>

                    <div className="relative flex flex-col items-start">

                        <span className="absolute -top-7 -left-4 text-sm font-bold border rounded-full p-1 text-cyan-500">Customers</span>

                        <span>Sumit</span>


                        <span className="absolute -bottom-3 -left-1 text-sm p-1">7 Alerts</span>
                    </div>

                    <span>15/02/2025</span>
                    <span className="text-orange-800">High</span>
                    <span>HR</span>
                    <span>Open</span>
                    <span className="border border-white rounded px-2 py-1 inline-block w-20">VM</span>
                    <span>⋮</span>
                </div>











            </div>


        
        </div>
    );
}
