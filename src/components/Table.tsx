import { Link } from "react-router-dom";
import { IUser } from "../types/types";
import UseDelete from "../hooks/UseDelete";

const Table = ({ data }: { data: IUser[] }) => {
  const { handleDelete } = UseDelete();

  const clickHandler = (id: number) => {
    handleDelete(id);
  };

  return (
    <div className="dashboard-container">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <div className="action-container">
                      <button className="btn">
                        <Link className="link" to={`/user/${user.id}`}>
                          View
                        </Link>
                      </button>

                      <button className="btn" style={{ backgroundColor:'#4287f5'}}>
                        <Link
                          className="link"
                          to={`/update-user/${user.id}`}
                        >
                          Update
                        </Link>
                      </button>

                      <button
                        style={{ backgroundColor:'#f5426c'}}
                        className="btn"
                        onClick={() => clickHandler(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
