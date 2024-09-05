import Spinner from "../components/Spinner";
import Table from "../components/Table";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch();

  if (loading || !data) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="main-container">
      <h1 style={{ paddingBlock: "6px" }}>Users</h1>
      {<Table data={data} />}
    </div>
  );
};

export default Home;
