import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import styles from "../styles/components/Blog.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay, faTag} from "@fortawesome/free-solid-svg-icons";

const CodeBlock = ({language, value}) => {
    return (
        <SyntaxHighlighter showLineNumbers={true} language={language}>
            {value}
        </SyntaxHighlighter>
    );
};

const Blog = ({content, data}) => {
    const frontmatter = data;

    return (
        <>
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
                    <div className="text-sm ml-1">{frontmatter.category}</div>
                </div>
            </div>
            <img className="rounded-md shadow w-full mb-5"
                 src={frontmatter.thumbnail} alt={frontmatter.title}/>
            <ReactMarkdown
                escapeHtml={true}
                source={content}
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
        </>
    );
};

export default Blog;

Blog.getInitialProps = async (context) => {
    const {blog} = context.query;
    const content = await import(`../content/${blog}.md`);
    const data = matter(content.default);

    return {...data};
};
