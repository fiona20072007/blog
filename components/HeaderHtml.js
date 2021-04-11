import Head from 'next/head';

const HeaderHtml = ({ options }) => (
    <Head>
        <title key='title'>{ options.title || `Fiona's Blog` }</title>
        <meta key='description' name='Description' content='A blog to share the experience of being a Front-End engineer' />
        <meta key='viewport' name='viewport' content="initial-scale=1.0, width=device-width" />
    </Head>
);

export default HeaderHtml;