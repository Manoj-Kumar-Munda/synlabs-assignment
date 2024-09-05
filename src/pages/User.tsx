
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import { IUser } from '../types/types'
import '../styles/user.css';
const User = () => {
    const {id} = useParams()
    const {data , loading, error} = useFetch<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);

    if(loading) return <Spinner />
    if(error) return <div className='spinner-container'>{error}</div>
  return (
    <div className='user-info'>
        <h1>{data?.name}</h1>
        <p>Email: {data?.email}</p>
        <p>Phone: {data?.phone}</p>
        <p>Website: {data?.website}</p>
        <p>Street: {data?.address?.street}</p>
        <p>City: {data?.address?.city}</p>
        <p>Zipcode: {data?.address?.zipcode}</p>
    </div>
  )
}

export default User