// _rfc this will create the boiler plate for our code
import Image from "next/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md p-5 md:px-10">
      {/* left did */}
      <div className="relative flex items-center h-10  cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      {/* middle div */}
      <div className="flex items-center  md:border-2 rounded-full py-2 ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600  placeholder-gray-400"
          type="text"
          placeholder="start your search"
        />
        <MagnifyingGlassIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right div */}
      <div className="flex justify-end items-center space-x-4">
        <p className="hidden md:inline">became host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex justify-end items-center space-x-2 border rounded-full p-2">
          <Bars3Icon className="h-8" />
          <UserCircleIcon className="8" />
        </div>
      </div>
    </header>
  );
}
