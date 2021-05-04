import React from "react";
import PostBanner from "../components/PostBanner";
import * as postsData from '../lib/posts.js';
import matter from "gray-matter";
import Layout from "../components/Layout.js"

const Index = ({posts}) => {
    const RealData = posts.map((blog) => matter(blog));
    const ListItems = RealData.map((listItem) => listItem.data);

    return (
        <Layout>
            <div className="mt-1 text-3xl font-normal text-gray-600">News and Stories</div>
            <p className="mt-4 font-light text-gray-400">A Simple Markdown Blog build with Nextjs, including
                experience sharing.</p>
            {ListItems.map((blog, i) => (
                <PostBanner key={i} blog={blog}/>
            ))}
        </Layout>
    );
};

export default Index;


export async function getStaticProps() {

    return {
        props: {
            posts: postsData.posts,
        },
    };
}

