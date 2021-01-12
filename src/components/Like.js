import React, { useState } from "react";
import video from "../data/video.js";

function Like() {
    const [like, setLike] = useState(video.upvotes);
    const [dislike, setDislike] = useState(video.downvotes)


    console.log(video.comments.user)
    const talk =
        video.comments.map((comment) => {
            return (<div>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>)
        })


    return (
        <div>
            <h3>{video.title}</h3>
            <p>{video.views} views</p>
            <p>uploaded at: {video.createdAt}</p>
            <button onClick={() => setLike(like + 1)}>👍{like}</button>
            <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
            <hr></hr>
            <h2>{video.comments.length} comments</h2>
            {talk}

        </div>
    )
}

export default Like