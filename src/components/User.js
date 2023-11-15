 import {Link} from 'react-router-dom';
// import axios from 'axios';
// import {  useEffect, useReducer, } from 'react';
// import {reducer, initialState} from '../appReducer';
//  import UserDetail from '../pages/UserDetail';

export default function User({user}){
    
    // const [state, dispatch] = useReducer(reducer, initialState);

// const getUser = async () => {
//     dispatch({type: 'UPDATE_LOADING', payload: true});
//     const response = await axios.get(`https://api.github.com/users/${user.login}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//        console.log(response.data);
//        dispatch({type: 'USER_DETAILS', payload:response.data});
//   }

//   useEffect(() => {
//     getUser();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

    return(

        <div className="card text-center">
            <img src={user.avatar_url} className='round-img' style={{maxWidth: 60}} alt='user' />
            <p>{user.login}</p>
            <Link to={`/users/${user.login}`} className='btn btn-dark btn-sm'>More</Link>
        </div>
    )
}