import { promises as fsPromises } from 'fs';
const frontmatter = require('@github-docs/frontmatter')
const path = require('path')

const POSTS_DIR_PATH = 'pages/post/';
const POSTS_PER_PAGE = 6;

const absolutePath = path.join(process.cwd(), POSTS_DIR_PATH);

const findOptions = async path => {
    const fileContent = await fsPromises.readFile(path, 'utf8');
    return frontmatter(fileContent).data || {};
};

const findCreatedAt = post => new Date(post?.options?.createdAt);

export const filenames = () => fsPromises.readdir(absolutePath);

export const totalPages = async () => Math.ceil((await filenames()).length / POSTS_PER_PAGE);

export const allPages = async () => {
    const posts = await Promise.all(
        (await filenames()).map(
            filename => filename.match(/^(.+)\.mdx$/),
        ).flatMap(
            match => (match ? [{filename: match[0], slug: match[1]}] : []),
        ).map(async post => ({
            ...post,
            options: await findOptions(
                path.join(absolutePath, post.filename),
            ),
        })),
    );

    return posts.sort(
        (post1, post2) => findCreatedAt(post2) - findCreatedAt(post1),
    );
};

export const page = async p => {
    const posts = await allPages();
    return posts.slice(
        p * POSTS_PER_PAGE,
        (p + 1) * POSTS_PER_PAGE,
    );
};