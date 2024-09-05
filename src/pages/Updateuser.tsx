import { useParams } from "react-router-dom";
import Form from "../components/Form/Form";
import useFetch from "../hooks/useFetch";
import { IForm, IUser } from "../types/types";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { UserContext } from "../context/context";

const Updateuser = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const { updateUser } = useContext(UserContext);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>, data: IForm) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const json = await response.json();
      updateUser(json?.id, json);
    } catch (error) {
      console.log(error);
    }
  };
  if (error) return <div className="spinner-container">{error}</div>;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="form-container">
      <h2>Update User</h2>
      <Form user={data as IUser} onSubmit={onSubmit} loading={loading} />
    </div>
  );
};

export default Updateuser;
