import Link from 'next/link';
import PostBanner from '../components/PostBanner.js';
import * as postsData from '../lib/node/posts.js';

const currentPage = 0;

const Index = ({posts, totalPages}) => (
    <div>
        {posts.map(post => (
            <Link key={post.slug} href={`/post/${post.slug}`}>
                <a>
                    <PostBanner {...post.options} />
                </a>
            </Link>
        ))}
    </div>
);

export default Index;


export async function getStaticProps() {
    const posts = await postsData.page(currentPage);
    const totalPages = await postsData.totalPages()
    return {
        props: {
            posts, totalPages
        },
    }
}