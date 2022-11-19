import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/' className='logo-1'>
          <span style={{ color: 'black', textTransform: 'uppercase' }}>
            Store
          </span>
          It
        </Link>
      </div>

      <nav className=''>
        <ul>
          {user ? (
            <>
              {/* <li style={{ color: '#0072b1' }}>Hi: {user.name}</li>
              <li>
                <button className='btn' onClick={onLogout}>
                  <FaSignOutAlt className='login' />
                  Logout
                </button>
              </li> */}
                <li className='login'>
                Hi: {' '}{user.name}
              </li>
                <li>
                <Link to='/' onClick={onLogout}>
                  <FaSignInAlt className='login' />
                  Logout
                </Link>
              </li>
            
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>
                  <FaSignInAlt className='login' />
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser className='login' />
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
