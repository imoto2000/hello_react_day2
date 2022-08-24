import Counter from "@/components/counter";
import TwitterForm from "@/components/TwitterForm";
import TwitterList from "@/components/TwitterList";

export default function Home() {
  return (
    <div>
      <Counter></Counter>
      <TwitterForm></TwitterForm>
      <TwitterList></TwitterList>
    </div>
  );
}
