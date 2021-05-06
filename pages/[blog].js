import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import Layout from "../components/Layout";
import styles from "../styles/components/Blog.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay, faTag} from "@fortawesome/free-solid-svg-icons";
import * as postsData from "../lib/posts";

const CodeBlock = ({language, value}) => {
    return (
        <SyntaxHighlighter showLineNumbers={true} language={language}>
            {value}
        </SyntaxHighlighter>
    );
};

const Blog = ({content, posts}) => {
    console.log(content)
    const frontmatter = content.data;
    const blogContent = content.content
    const RealData = posts.map((blog) => matter(blog));
    const ListItems = RealData.map((listItem) => listItem.data);

    return (
        <Layout ListItems={ListItems}>
            <div className="mt-1 text-3xl text-gray-600">
                <h1>{frontmatter.title}</h1>
            </div>

            <div className="flex mt-3 mb-7 text-gray-600">
                <div className="flex">
                    <FontAwesomeIcon width="11" icon={faCalendarDay}/>
                    <div className="text-sm ml-1">{frontmatter.createdAt}</div>
                </div>
                <div className="flex ml-5">
                    <FontAwesomeIcon width="11" icon={faTag}/>
                    <div className="text-sm ml-1">{frontmatter.categories}</div>
                </div>
            </div>
            <img className="rounded-md shadow w-full mb-5"
                 src={frontmatter.thumbnail} alt={frontmatter.title}/>
            <ReactMarkdown
                escapeHtml={false}
                source={blogContent}
                className={styles.blog}
                renderers={{code: CodeBlock}}
            />

            <div className="mt-16 mb-5 text-gray-600">
                <div className="mt-5 mb-3 text-lg">Tags:</div>
                <div className="flex">
                    {frontmatter.tag.map(tag => {
                        return <div
                            class="mr-5 bg-gray-200 pl-4 pr-4 pt-1 pb-1 tracking-wider uppercase text-xs font-semibold rounded">{tag}</div>
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;

export async function getServerSideProps(context) {
    const {blog} = context.query;
    const mdContent = await import(`../content/${blog}.md`);

    const content = matter(mdContent.default, "utf8")
    const posts = postsData.posts
    return {
        props: {
            content, posts
        }
    }
}
