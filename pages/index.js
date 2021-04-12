import React from "react";
import HeaderHtml from "../components/HeaderHtml";
import * as postsData from '../lib/posts.js';
import matter from "gray-matter";
import Link from "next/link";

const Index = ({title, description, posts}) => {
    const RealData = posts.map((blog) => matter(blog));
    const ListItems = RealData.map((listItem) => listItem.data);
    return (
        <>
            <HeaderHtml description={description} title={title}/>
            <h1>Fiona's Blog ✍ </h1>
            <div>
                <ul>
                    {ListItems.map((blog, i) => (
                        <li key={i}>
                            <Link href={`/${blog.slug}`}>
                                <a>{blog.title}</a>
                            </Link>
                            <p>{blog.description}</p>
                        </li>
                    ))}
                </ul>
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
