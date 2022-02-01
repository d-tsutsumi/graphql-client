import type { InferGetStaticPropsType, NextPage } from "next";
import { getAllProducts } from "../framework/shopify/product/get-all-products";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => <h1>{JSON.stringify(products)}</h1>;

export async function getStaticProps() {
  const products = await getAllProducts();
  console.log(products)
  return {
    props: {
      products,
      revalidate: 4 * 60 * 60,
    },
  };
}
export default Home;
