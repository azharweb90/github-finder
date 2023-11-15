import {  useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import axios from "axios";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserDetail from "./pages/UserDetail";
import AllUsers from "./components/Users";
import {reducer, initialState} from './appReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateUsers = async (text) => {
    if (text === "") {
      clearUsersHandler();
    } else { 
    dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: ""});
    dispatch({type: 'UPDATE_SEARCH_TERM', payload: text});
    dispatch({type: 'UPDATE_LOADING', payload: true});
    const response = axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    response
      .then((res) => {
        dispatch({type: 'UPDATE_USERS', payload: res.data.items});
        dispatch({type: 'UPDATE_LOADING', payload: false});
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: err.message});
      });
    }
  };

  async function clearUsersHandler() {
    dispatch({type: 'UPDATE_SEARCH_TERM', payload: ""});
    try {
      const response = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      );
      dispatch({type: 'UPDATE_USERS', payload: response.data});
      dispatch({type: 'UPDATE_LOADING', payload: false});
    } catch (error) {
      console.log(error.message);
      dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
    }
  }



  useEffect(() => {
    updateUsers("");
    clearUsersHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar title="Github finder" icon="fab fa-github" />
        <div className="container" style={{ paddingTop: 80 }}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Search
                    searchUsers={updateUsers}
                    clearUsers={clearUsersHandler}
                    errorMessage={state.errorMessage}
                  />
                  <AllUsers
                    users={state.users}
                    loading={state.loading}
                    searchTerm={state.searchTerm}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
