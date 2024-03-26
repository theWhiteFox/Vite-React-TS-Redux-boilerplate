import { useEffect, useState } from 'react';
import {
  Button,
  Typography,
} from "@mui/material";
import { Counter } from '../features/counter/Counter';
import { getUser, logout } from '../store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [count, setCount] = useState(0)

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Typography className="text-3xl font-bold underline" color="primary.dark" variant="h1">
        Home
      </Typography>
      <button
        className="border border-gray-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400)"
        onClick={() => setCount(count => count + 1)}>
        count is: {count}
      </button>
      <h4>Name: {userProfileInfo?.name}</h4>
      <h4>Email: {userProfileInfo?.email}</h4>
      <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleLogout}>
        Logout
      </Button>
      <div className="card">
        <Counter />
      </div>
    </>
  )
}
export default Home;
