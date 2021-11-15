import React, {useMemo, useState} from "react";

export default {
    title: ' React.memo demo'
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Oleg", "Dima", "Any"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") - 1)
        return newArray
    }, [users, counter])
    //
    const addUsers = () => {
        setUsers([...users, "Any " + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUsers()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}