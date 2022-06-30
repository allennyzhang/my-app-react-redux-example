import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { postUpdate } from "./postsSlice";

const EditPostForm = () => {
    const { postId } = useParams()

    const post = useSelector(state => state.posts.posts.find(post => post.id.toString() === postId))

    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setBody(e.target.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSavePostClicked = () => {
        if (title && body) {
            dispatch(postUpdate({ postId, title, body }))
            navigate(`/`)
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={body}
                    onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
        </section>
    )
}

export default EditPostForm