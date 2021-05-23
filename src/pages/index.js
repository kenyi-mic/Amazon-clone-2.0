import Head from "next/head";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import ProductFeed from "../components/ProductFeed.js";
import Footer from "../components/Footer.js"
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto  ">
        {/*Banner */}
        <Banner />
        {/*ProductFeed */}
        <ProductFeed products={products} />
        {/*Footer */}
        <Footer/>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
