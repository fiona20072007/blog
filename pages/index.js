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
            <div>
                <Image src="/puzzle.png" alt="puzzle" width="64" height="64" />
                <h1 className="text-4xl font-bold">Fiona's Blog</h1>
            </div>
            <p>A Simple Markdown Blog build with Nextjs, including experience sharing.</p>
            <div>
                {ListItems.map((blog, i) => (
                    <PostBanner key={i} blog={blog}/>
                ))}
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
