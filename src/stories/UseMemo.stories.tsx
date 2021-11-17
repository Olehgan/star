import React, {useCallback, useMemo, useState} from "react";

export default {
    title: ' UseMemo demo'
}
//
// const UsersSecret = (props: { users: Array<string> }) => {
//     console.log("USERS SECRET")
//     return <div>{
//         props.users.map((u, i) => <div key={i}>{u}</div>)
//     }</div>
// }
//
// const Users = React.memo(UsersSecret)


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "HTMl"])

    // const newArray = useMemo(() => {
    //     const newArray = books.filter(u => u.toLowerCase().indexOf("a") - 1)
    //     return newArray
    // }, [books])
    //
    // const addBook = () => {
    //     setBooks([...books, "Angular " + new Date().getTime()])
    // }
    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, "Angular " + new Date().getTime()])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log("books")
            setBooks([...books, "Angular " + new Date().getTime()])

    }, [])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}


type BooksSecretTypeProps = {
    // books: Array<string>
    addBook: () => void
}


const BooksSecret = (props: BooksSecretTypeProps) => {
    console.log("USERS SECRET")
    return <div>
        <button onClick={() => props.addBook()}>add user</button>
        {
            // props.books.map((b, i) => <div key={i}>{b}</div>)
        }</div>
}
const Book = React.memo(BooksSecret)