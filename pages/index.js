import React from "react";
import {useRouter} from "next/router";
import PostBanner from "../components/PostBanner";
import * as postsData from '../lib/posts.js';
import matter from "gray-matter";
import Layout from "../components/Layout.js"

const Index = ({posts}) => {

    const RealData = posts.map((blog) => matter(blog));
    const ListItems = RealData.map((listItem) => listItem.data);

    const history = useRouter();

    return (
        <Layout ListItems={ListItems}>
            <div className="mt-1 text-3xl font-normal text-gray-600">News and Stories</div>
            <p className="mt-4 font-light text-gray-400">A Simple Markdown Blog build with Nextjs, including
                experience sharing.</p>
            {
                history.query === {} && ListItems.map((blog, i) => (
                    <PostBanner key={i} blog={blog}/>
                ))}
            {
                history.query["categories"] !== undefined && ListItems.filter(list => {
                    return list.categories === history.query["categories"]
                }).map((blog, i) => (
                    <PostBanner key={i} blog={blog}/>
                ))
            }
            {
                history.query["archives"] !== undefined && ListItems.filter(list => {
                    const archive = list.createdAt.slice(0, 4) + list.createdAt.slice(7);
                    return archive === history.query["archives"]
                }).map((blog, i) => (
                    <PostBanner key={i} blog={blog}/>
                ))
            }
            {
                history.query["tags"] !== undefined && ListItems.filter(list => {
                    console.log(list.tag)
                    return list.tag.includes(history.query["tags"])
                }).map((blog, i) => (
                    <PostBanner key={i} blog={blog}/>
                ))
            }
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

