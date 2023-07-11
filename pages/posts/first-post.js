import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>#first post</h1>
      </Layout>
    </div>
  );
};

export default FirstPost;
