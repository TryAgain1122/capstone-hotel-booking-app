import { UserType } from "@/interfaces";
import React from "react";
import Sidebar from "./sidebar";
import { UserButton, useUser } from "@clerk/nextjs";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";


function UserInfo({ loggedInUserData }: { loggedInUserData: UserType }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const { user } = useUser()
  return (
    <div>
      {user ? (
        <div className="flex gap-3 items-center">
          <UserButton />
          <RxHamburgerMenu 
            size={18} 
            onClick={() => setShowSidebar(!showSidebar)}
            className="cursor-pointer"
            />
        </div>
      ) : (
        <Link href='/sign-in'><RxAvatar size={18} className="cursor-pointer"/></Link>
      )}
      {showSidebar && <Sidebar 
        loggedInUserData={loggedInUserData}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        />}
    </div>
  );
}

export default UserInfo;
