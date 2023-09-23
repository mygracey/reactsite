
import {signInWithGoogle} from "./Connection"

function Login(){

    return<div>
        <h1>This is the Login page</h1>
        <h3>{localStorage.getItem("name")}</h3>
        <h3>{localStorage.getItem("email")}</h3>
        <h3>{localStorage.getItem("profilepic")}</h3>
        <br />

        <button>Sign in with Google</button>
    </div>

}

export default Login