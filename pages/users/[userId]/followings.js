import { useRouter } from "next/router";

export default function Followings() {
  const router = useRouter();
  return <h3>hello: {router.query.userId} page</h3>;
}
