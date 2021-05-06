import styles from '../styles/components/PostBanner.module.scss';
import Link from "next/link";
import {faCalendarDay, faTag} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostBanner = ({i, blog}) => {
    return (
        <>
            <div class="text-gray-600 mt-8 mb-20" key={i}>
                <Link href={`/${blog.slug}`}>
                    <a class="text-2xl font-normal">{blog.title}</a>
                </Link>
                <div class="flex mt-5 mb-5">
                    <div class="flex">
                        <FontAwesomeIcon width="11" icon={faCalendarDay}/>
                        <div class="text-sm ml-1">{blog.createdAt}</div>
                    </div>
                    <div class="flex ml-5">
                        <FontAwesomeIcon width="11" icon={faTag}/>
                        <div class="text-sm ml-1">{blog.categories}</div>
                    </div>
                </div>
                <Link href={`/${blog.slug}`}>
                    <img class="rounded-lg shadow w-full hover:opacity-50 transition-opacity duration-300 cursor-pointer" src={blog.thumbnail} alt={blog.title} />
                </Link>
                <div class="mt-5 mb-5">{blog.description}</div>
                <Link href={`/${blog.slug}`}>
                    <a class="border text-xs text-blue-500 border-blue-500 pt-3 pb-3 pl-4 pr-4 hover:bg-blue-500 hover:text-white duration-300">READ MORE ></a>
                </Link>
            </div>
        </>
    );
};

export default PostBanner;