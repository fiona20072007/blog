const fs = require("fs");
const path =require('path');

const POSTS_DIR_PATH = 'content';
const POSTS_PER_PAGE = 6;

const postsDir = path.join(process.cwd(), POSTS_DIR_PATH);
const files = fs.readdirSync(postsDir, "utf-8");
const blogs = files.filter((fn) => fn.endsWith(".md"));

export const posts = blogs.map((blog) => {
    const path = `${postsDir}/${blog}`;
    const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
    });

    return rawContent;
});


export const findCreatedAt = post => new Date(post?.options?.createdAt);

// export const totalPages = async () => Math.ceil((await filenames()).length / POSTS_PER_PAGE);

// export const allPages = async () => {
//     const posts = await Promise.all(
//         (await filenames()).map(
//             filename => filename.match(/^(.+)\.mdx$/),
//         ).flatMap(
//             match => (match ? [{filename: match[0], slug: match[1]}] : []),
//         ).map(async post => ({
//             ...post,
//             options: await findOptions(
//                 path.join(postsDir, post.filename),
//             ),
//         })),
//     );
//
//     return posts.sort(
//         (post1, post2) => findCreatedAt(post2) - findCreatedAt(post1),
//     );
// };
//
// export const page = async p => {
//     const posts = await allPages();
//     return posts.slice(
//         p * POSTS_PER_PAGE,
//         (p + 1) * POSTS_PER_PAGE,
//     );
// };