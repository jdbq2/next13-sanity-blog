import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2 justify-between">
        <Link href={"/"}>
          <Image
            src={
              "https://logodownload.org/wp-content/uploads/2017/10/starbucks-logo-1.png"
            }
            width={50}
            height={50}
            className={"rounded-full"}
            alt="logo"
          />
        </Link>
        <h1>The Blog Site</h1>
      </div>
      <div>
        <Link
          target="_blank"
          href={"/studio"}
          className="px-5 py-3 text-sm  bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Go to Admin Panel !
        </Link>
      </div>
    </header>
  );
};

export default Header;
