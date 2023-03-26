import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    


    const HandleSubmit = (e) => {

        fetch("https://giant-sarong-duck.cyclic.app/user/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password                
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                localStorage.setItem("token",res.token)
            }).catch((err) => {
                console.log(err)
            })
        setEmail("")
        setPassword("")
        
    }


    return (
        <><br />
            <h1>Login Page</h1>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button onClick={HandleSubmit}>Submit</button>
        </>
    )
}

export default Login