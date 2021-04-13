import Document, { Html, Head, Main, NextScript } from 'next/document'

class FionaBlogDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html>
                <Head />
                <body class="bg-gray-200">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default FionaBlogDocument