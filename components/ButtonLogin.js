import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name}) => {

    //const {isLoggedIn, name}= props;

    if (isLoggedIn) {
        return <Link href="/dashboard" className="btn btn-primary">Welcome Back {name}</Link>
    } else {
        return <button>Login</button>
    }

};

export default ButtonLogin;