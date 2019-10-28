import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import AddCommentsForm from '../components/AddCommentsForm';
import UpvotesSection from '../components/UpvotesSection';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();

            setArticleInfo(body);
        };
        fetchData();
    }, [name]);

    if(!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes}  setArticleInfo={setArticleInfo}/>
            {
                article.content.map((paragrapth, index) => (
                    <p key={index}>{paragrapth}</p>
                ))
            }
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentsForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles}/>
        </>
    );
};

export default ArticlePage;