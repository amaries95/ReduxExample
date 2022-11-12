import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Auth.module.css';

const Auth = () => {
  const authValue = useSelector(state => state.authReducer.isAuthenticated);
  const authDispatcher = useDispatch();

  const onLoginClickedHandler = (event) => {
    event.preventDefault();

    authDispatcher(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLoginClickedHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
