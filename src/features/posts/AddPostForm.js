import { useEffect, useState, } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../users/usersSlice"
import { createPost } from "./postsSlice"

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = e => setBody(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = e => {
        if (title && body) {
            dispatch(createPost({ title, body, userId }))
            setTitle('')
            setBody('')
        }
    }

    const canSave = !!title && !!body && !!userId

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                    aria-label="postTitle"
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged} aria-label="postAuthor">
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={body}
                    onChange={onContentChanged}
                    aria-label="postContent"
                />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save Post
                </button>
            </form>
        </section>
    )

}