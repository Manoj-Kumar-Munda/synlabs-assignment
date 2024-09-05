import { useContext } from "react";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import { UserContext } from "../context/context";
import "../styles/home.css";

const Home = () => {
  const { data, error, loading } = useContext(UserContext);
  if (loading) return <Spinner />;
  if (error) return <div className="spinner-container">{error}</div>;
  return (
    <div className="main-container">
      <h1 style={{ paddingBlock: "6px" }}>Users</h1>
      {data && <Table data={data} />}
    </div>
  );
};

export default Home;
