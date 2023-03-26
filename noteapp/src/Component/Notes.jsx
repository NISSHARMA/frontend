import { useEffect, useState } from "react"

const Notes = () => {

    function handleDelete(id) {
        //  console.log(userID)
        fetch(`https://giant-sarong-duck.cyclic.app/notes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))
    }



    const [notes, setNotes] = useState([])
    //getting the notes
    useEffect(() => {
        fetch("https://giant-sarong-duck.cyclic.app/notes", {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                setNotes(res)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {notes.length > 0 ?
                notes.map((ele) =>
                    <div>
                        <h3>{ele.title}</h3>
                        <p>{ele.body}</p>
                        <button onClick={() => handleDelete(ele._id)}>Delete</button>
                    </div>
                ) : <div>
                    <h1>There is no note for the user</h1>
                </div>
            }
        </>
    )
}

export default Notes