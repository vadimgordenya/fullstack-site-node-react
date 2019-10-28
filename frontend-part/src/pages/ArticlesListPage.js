import React from 'react';
import ArticleList from '../components/ArticlesList';
import articles from './article-content';

const ArticlesList = () => (
    <>
        <h1>Articles</h1>
        <ArticleList articles={articles}/>
    </>
);

export default ArticlesList;