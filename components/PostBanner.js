import styles from '../styles/components/PostBanner.module.scss';
import Link from "next/link";

const PostBanner = ({i, blog}) => {
    return (
        <>
            <div key={i}>
                <Link href={`/${blog.slug}`}>
                    <a>{blog.title}</a>
                </Link>
                <div>{blog.createdAt}</div>
                <div>{blog.tag}</div>
                <Link href={`/${blog.slug}`}>
                    <img src={blog.thumbnail} alt={blog.title} />
                </Link>
                <div>{blog.description}</div>
                <Link href={`/${blog.slug}`}>
                    <a>READ MORE ></a>
                </Link>
            </div>
        </>
    );
};

export default PostBanner;