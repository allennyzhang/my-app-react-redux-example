import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { postUpdate } from "./postsSlice";

export const EditPostForm = () => {
    const { postId } = useParams()

    const post = useSelector(state => state.posts.find(post => post.id === postId))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdate({ postId, title, content }))
            navigate(`/posts/${postId}`)
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
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
        </section>
    )
}