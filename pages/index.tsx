import { getSession, useSession } from "next-auth/react";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return !session
    ? {
        redirect: {
          destination: "/auth/signin",
          permanent: false,
        },
      }
    : {
        props: {},
      };
}
export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log(session);
    return <p>Signed in as</p>;
  }
  return null;
}
