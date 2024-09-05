import { useState } from "react";
import Input from "./Input";

import { IUser } from "../../types/types";

interface FormProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Form = ({
  user,
  onSubmit,
  loading,
}: {
  user: IUser | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, form: FormProps) => void;
  loading: boolean;
}) => {
 

  const [form, setForm] = useState<FormProps>({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    website: user?.website || "",
  });
  return (
    <form onSubmit={(e) => onSubmit(e, form)}>
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
