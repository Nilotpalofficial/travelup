
function LoginForm(){
    return(
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <input placeholder="Username"></input>
                <input placeholder="Password" type="password"></input>
                <button>Login</button>
            </form>
        </div>

    )
}

export default LoginForm;