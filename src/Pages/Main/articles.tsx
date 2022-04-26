import React, {useEffect, useState} from 'react';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import {ArticleList, Article, ArticleBody, ArticleTitle} from './styles'


interface IArticle {
    url: string,
    repository_url: string,
    labels_url: string,
    comments_url: string,
    events_url: string,
    html_url: string,
    id: number,
    number: number,
    node_id: string,
    title: string,
    state: string,
    locked: boolean,
    assignee: string | null,
    milestone: string | null | number,
    comments: number,
    created_at: string,
    updated_at: string | null,
    closed_at: string | null,
    author_association: string,
    active_lock_reason: string | null,
    body: string,
    performed_via_github_app: any,
}

const Articles = () => {
    const [articles, setArticles] = useState<IArticle[]>([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.github.com/repos/Greyewi/about/issues',
            headers: {
                'Authorization': 'Bearer '+ process.env.BEARER_TOKEN
            }
        }).then((response) => {
            setArticles(response.data)
        }).catch((error) => {
            console.log(error);
        });

    }, [])

    return (
        <ArticleList>
            {articles.map((article, key) => {
                return (
                    <Article key={key}>
                        <ArticleTitle>
                            {article.title}
                        </ArticleTitle>
                        <ArticleBody>
                            <ReactMarkdown>{article.body}</ReactMarkdown>
                        </ArticleBody>
                    </Article>
                )
            })}
        </ArticleList>
    )
}

export default Articles