import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    const login = () => {
        navigate('/login');
    }

    const Button = () => {
        const b = auth?.user
        ? <button onClick={logout}>Sign Out</button>
        : <button onClick={login}>Sign in</button>
        return b;
    };

    return (
        <section>
            <h1>Home</h1>
            <br />
            {/* <p>You are logged in!</p> */}
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <Button />
            </div>
        </section>
    )
}

export default Home
