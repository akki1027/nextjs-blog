import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className="back">First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <style jsx>{`
            .back {
                color: skyblue;
            }
            `}</style>
        </Layout>
    )
}

// import Image from 'next/image'
// const YourComponent = () => (
//     <Image
//         src="/images/profile.jpg" // Route of the image file
//         height={144} // Desired size with correct aspect ratio
//         width={144} // Desired size with correct aspect ratio
//         alt="Your Name"
//     />
// )
