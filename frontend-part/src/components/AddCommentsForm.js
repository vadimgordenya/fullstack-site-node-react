import React, { useState } from 'react';

const AddCommentsForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username,text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setUsername('');
        setCommentText('');
        setArticleInfo(body);
    };

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                <h4>Name:</h4>
                <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <label>
                <h4>Text comment:</h4>
                <textarea rows="4" cols="50" placeholder="Text" value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
            </label>
            
            <button onClick={() => addComment()}>Add comment</button>
        </div>
    );
};

export default AddCommentsForm;