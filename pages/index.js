import Head from "next/head";
import App from "../components/App";
import { GET_PAGE } from "../common";

export default function Home({ data, token, e }) {
  return (
    <div className="p-3 min-vh-100">
      <Head>
        <title>CS1000</title>
        <link
          rel="icon"
          href="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1653746009~hmac=169c305d3244589324c0212344600b66"
        />
      </Head>
      {e ? (
        <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
          <h1>
            Wayback machine is not responding at the moment. Please try again
            after some time.
          </h1>
        </div>
      ) : (
        <App data={data} token={token} />
      )}
    </div>
  );
}

Home.getInitialProps = async () => {
  const { data, token, e } = await GET_PAGE();
  return {
    data: data,
    token: token,
    e: e,
  };
};
