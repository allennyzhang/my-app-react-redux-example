import React from "react";
import { useSelector } from 'react-redux'
import { Link, useParams } from "react-router-dom";
import { UserForm } from "../users/UserForm";
import { selectPostById } from "./postsSlice";

export const ViewPostForm = () => {
    const { postId } = useParams()
    const post = useSelector(state => selectPostById(state, postId))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <div>
                    <UserForm userId={post.userId} />
                </div>
                <p className="post-content">{post.body}</p>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}