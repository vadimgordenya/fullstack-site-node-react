import React from 'react';
import ArticleList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if(!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            {
                article.content.map((paragrapth, index) => (
                    <p key={index}>{paragrapth}</p>
                ))
            }
            <ArticleList articles={otherArticles}/>
        </>
    );
};

export default ArticlePage;