import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [age, setAge] = useState("")


    const HandleSubmit = (e) => {

        fetch("http://giant-sarong-duck.cyclic.app/user/register", {
            method: "POST",            
            body: JSON.stringify({
                email: email,
                password: password,
                location: location,
                age: +age
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        setEmail("")
        setPassword("")
        setLocation("")
        setAge("")
    }


    return (
        <><br />
            <h1>Registration</h1>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <input type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} /><br /><br />
            <input type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
            <button onClick={HandleSubmit}>Submit</button>
        </>
    )
}

export default Signup