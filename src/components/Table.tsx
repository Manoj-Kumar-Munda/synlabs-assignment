
import useFetch from '../hooks/useFetch';

const Table = () => {
    const { data, error, loading } = useFetch();
    console.log(data);
  return (
    <div className="dashboard-container">
      <div className="table-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
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
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Table