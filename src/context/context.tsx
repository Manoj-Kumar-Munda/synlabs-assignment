import { createContext, useEffect, useState } from "react";
import { IUser } from "../types/types";
import useFetch from "../hooks/useFetch";

export const UserContext = createContext<{
  data: IUser[] | null;
  error: string | null;
  loading: boolean;
  addUser: (user: IUser) => void;
  deleteUser: (id: number) => void;
  updateUser: (id: number, userData: IUser) => void;
}>({
  data: null,
  error: null,
  loading: false,
  addUser: () => {},
  deleteUser: () => {},
  updateUser: () => {},
});

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, loading } = useFetch<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [users, setUsers] = useState<IUser[] | null>(null);

  const addUser = (user: IUser) => {
    if (users) {
      setUsers([...users, user]);
    }
  };

  const deleteUser = (id: number) => {
    if (users) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const updateUser = (id: number, userData: IUser) => {
    if (users) {
      setUsers(users.map((user) => (user.id === id ? userData : user)));
    }
  };

  useEffect(() => {
    if (data) {
      setUsers(data as IUser[]);
    }
  }, [data]);

  return (
    <UserContext.Provider
      value={{ data: users, error, loading, addUser, deleteUser, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
