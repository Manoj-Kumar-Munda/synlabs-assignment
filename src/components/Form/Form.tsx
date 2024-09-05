import { useState } from "react";
import Input from "./Input";
import usePost from "../../hooks/usePost";


interface FormProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Form = () => {
  const { postData, loading, error, userData } = usePost();

  console.log(userData);
  

  const [form, setForm] = useState<FormProps>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  return (
    <form onSubmit={(e) => postData(e, form)}>
      <Input
        label="Name"
        type="text"
        name="name"
        value={form.name}
        onChange={(e) => {
          setForm({
            ...form,
            name: e.target.value,
          });
        }}
      />

      <Input
        label="Username"
        type="text"
        name="username"
        value={form.username}
        onChange={(e) => {
          setForm({
            ...form,
            username: e.target.value,
          });
        }}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />

      <Input
        label="Phone"
        type="text"
        name="phone"
        value={form.phone}
        onChange={(e) => {
          setForm({
            ...form,
            phone: e.target.value,
          });
        }}
      />

      <Input
        label="Website"
        type="text"
        name="website"
        value={form.website}            
        onChange={(e) => {
          setForm({
            ...form,
            website: e.target.value,
          });
        }}
      />
      <button className="btn-submit">
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
