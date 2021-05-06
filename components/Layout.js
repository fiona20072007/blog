import HeaderHtml from "./HeaderHtml";
import Link from "next/link";
import Image from "next/image";
import RightSection from "./RightSection";
import React from "react";

export default function Layout({
                                   children,
                                   description = "A Simple Markdown Blog build with Nextjs.",
                                   title = "Fiona's Blog Site",
                                   ListItems
                               }) {
    return (
        <>
            <HeaderHtml description={description} title={title}/>
            <div className="m-10 flex shadow">
                <div className="bg-gray-100 border-r w-3/12 p-7 font-sans">
                    <Link href="/">
                        <div className="flex mt-3 cursor-pointer">
                            <div className="mt-1">
                                <Image priority src="/puzzle.png" alt="puzzle" width="25" height="25"/>
                            </div>
                            <h1 className="text-3xl font-normal ml-2">Fiona's Blog</h1>
                        </div>
                    </Link>
                    <p className="mt-6 font-light text-gray-400">A Simple Markdown Blog build with Nextjs, including
                        experience sharing.</p>
                </div>

                <div className="w-9/12 bg-gray-50 p-9 font-sans ">
                    {children}
                </div>
                <div className="w-4/12 bg-gray-50"><RightSection ListItems={ListItems}/></div>
            </div>
        </>
    )
}

