import type { NextPage } from "next";
import { Books } from "../components/books";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Books />
    </Layout>
  );
};

export default Home;
