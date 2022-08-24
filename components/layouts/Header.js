import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  return <p>header: ${count}</p>;
};

export default Header;
