import Spinner from "../components/Spinner";
import Table from "../components/Table";
import useFetch from "../hooks/useFetch";
import "../styles/home.css";

const Home = () => {
  const { data, error, loading } = useFetch();
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
