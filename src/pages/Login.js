import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import { styles } from '../components/styles';
import axios from '../api/axios';
import { Navigate } from 'react-router-dom';

const LOGIN_URL = 'https://gorest.co.in/public/v1/users';

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [name, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ name, email }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const gender = response?.data?.gender;
      // const status = response?.data?.status;
      setAuth({ name, email });
      setName('');
      setEmail('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Navigate to="/" replace={true} />
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <label htmlFor="password">Email:</label>
            <input
              type="text"
              id="password"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <button>Sign In</button>
          </form>
        </section>

        // <section>
        //   <p
        //     ref={errRef}
        //     className={errMsg ? 'errmsg' : 'offscreen'}
        //     aria-live="assertive"
        //   >
        //     {errMsg}
        //   </p>
        //   <h1>Sign In</h1>
        //   <form onSubmit={handleSubmit}>
        //     <label htmlFor="username">Username:</label>
        //     <input
        //       type="text"
        //       id="username"
        //       ref={userRef}
        //       autoComplete="off"
        //       onChange={(e) => setName(e.target.value)}
        //       value={name}
        //       required
        //     />

        //     <label htmlFor="password">Password:</label>
        //     <input
        //       type="text"
        //       id="password"
        //       onChange={(e) => setEmail(e.target.value)}
        //       value={email}
        //       required
        //     />
        //     <button>Sign In</button>
        //   </form>
        //   <p>
        //     Need an Account?
        //     <br />
        //     <span className="line">
        //       {/*put router link here*/}
        //       <a href="#">Sign Up</a>
        //     </span>
        //   </p>
        // </section>
      )}
    </>
  );
};
