import HeaderHtml from "./HeaderHtml";
import Link from "next/link";
import Image from "next/image";
import RightSection from "./RightSection";
import React from "react";

export default function Layout({
                                   children,
                                   description = "A Simple Markdown Blog build with Nextjs.",
                                   title = "Fiona's Blog Site"
                               }) {
    return (
        <>
            <HeaderHtml description={description} title={title}/>
            <div class="m-10 flex shadow">
                <div class="bg-gray-100 border-r w-3/12 p-7 font-sans">
                    <Link href="/">
                        <div class="flex mt-3 cursor-pointer">
                            <Image priority src="/puzzle.png" alt="puzzle" width="35" height="35"/>
                            <h1 className="text-3xl font-normal ml-2">Fiona's Blog</h1>
                        </div>
                    </Link>
                    <p class="mt-6 font-light text-gray-400">A Simple Markdown Blog build with Nextjs, including
                        experience sharing.</p>
                </div>

                <div class="w-9/12 bg-gray-50 p-9 font-sans ">
                    {children}
                </div>
                <div class="w-4/12 bg-gray-50"><RightSection/></div>
            </div>
        </>
    )
}

