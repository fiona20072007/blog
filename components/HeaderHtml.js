import Head from 'next/head';

const HeaderHtml = ({description, title}) => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8"/>
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
    </Head>
);

export default HeaderHtml;