import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function ProjectTitle() {
  const router = useRouter();
  return (
    <div
      className="p-5 text-2xl font-bold cursor-pointer flex items-center"
      onClick={() => {
        router.push("/");
      }}
    >
      <Image 
        src={'/Images/logo.png'}
        alt="no-image"
        width={60}
        height={60}
        className="rounded-full"
      />
      <span className="md:block hidden">Urban Deca Tower</span>
    </div>
  );
}

export default ProjectTitle;
