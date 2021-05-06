import '../styles/globals.css'
import Layout from "../components/Layout";

function FionaBlog({Component, pageProps}) {
    return <Layout><Component {...pageProps} /></Layout>
}

export default FionaBlog
