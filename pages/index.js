import React from "react";
import HeaderHtml from "../components/HeaderHtml";
import PostBanner from "../components/PostBanner";
import * as postsData from '../lib/posts.js';
import matter from "gray-matter";
import Image from 'next/image'

const Index = ({title, description, posts}) => {
    const RealData = posts.map((blog) => matter(blog));
    const ListItems = RealData.map((listItem) => listItem.data);
    return (
        <>
            <HeaderHtml description={description} title={title}/>
            <div class="m-10 flex shadow">
                <div class="bg-gray-100 border-r w-4/12 p-7 font-sans">
                    <div class="flex mt-3">
                        <Image src="/puzzle.png" alt="puzzle" width="40" height="40"/>
                        <h1 class="text-3xl font-normal ml-2">Fiona's Blog</h1>
                    </div>
                    <p class="mt-6 font-light text-gray-400">A Simple Markdown Blog build with Nextjs, including experience sharing.</p>
                </div>

                <div class="w-9/12 bg-gray-50 p-9 font-sans ">
                    <div class="mt-1 text-3xl font-normal text-gray-600">News and Stories</div>
                    <p class="mt-4 font-light text-gray-400">A Simple Markdown Blog build with Nextjs, including
                        experience sharing.</p>
                    {ListItems.map((blog, i) => (
                        <PostBanner key={i} blog={blog}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Index;


export async function getStaticProps() {
    const siteData = await import(`../config.json`);

    return {
        props: {
            title: siteData.default.title,
            description: siteData.default.description,
            posts: postsData.posts,
        },
    };
}
