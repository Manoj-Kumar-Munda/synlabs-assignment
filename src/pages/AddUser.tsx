import toast, { Toaster } from "react-hot-toast";
import Form from "../components/Form/Form";
import usePost from "../hooks/usePost";
import "../styles/form.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/context";

const AddUser = () => {
  const { postData, loading, error, userData } = usePost();

  const { addUser } = useContext(UserContext);

  useEffect(() => {
    if (userData) {
      toast.success("User added");
      addUser(userData);
    }
  }, [userData]);

  if(error){
    toast.error("Failed to add user")
  }
  return (
    <div className="form-container">
      <Toaster />
      <h2>Add User</h2>
      <Form user={null} onSubmit={postData} loading={loading} />
    </div>
  );
};

export default AddUser;
