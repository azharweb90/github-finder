import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';


const UserDetail = () => {
    const [user, setUser] = useState(null);

    const params = useParams();

    const getUser = async () => {
        try{
            const response = await axios.get(`https://api.github.com/users/${params.id}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            console.log(response.data, "response");
            setUser(response.data);
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
     const {
        hireable, 
        avatar_url, 
        name, 
        location,
        bio,
        html_url,
        login,
        company,
        blog,
        followers,
        following,
        public_repos,
        public_gists
    } = user || {};

    return (
        <div>
           <Link to="/" className='btn btn-light'><i className="fas fa-arrow-left " /> Back to search </Link>
            Hireable: {''}
            {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

            <div className='card grid-2'>
                <div className='all-center'>
                    <img src={avatar_url} alt="" className='round-img' style={{width: 150}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>{company && <><strong>Company: </strong> <span>{company}</span></> } </li>
                        <li>{login && <><strong>Username:</strong> <span>{login}</span></> } </li>
                        <li>{blog && <><strong>Website:</strong> <span>{blog}</span></>}</li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-light">Public repos: {public_repos}</div>
                        <div className="badge badge-dark">Followers: {public_gists}</div>

            </div>
        </div>
    );
};

export default UserDetail;
