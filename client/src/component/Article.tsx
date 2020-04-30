import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { Article_article } from '../__generated__/Article_article.graphql'
import User from './User'

const Article: React.FC<{ article: Article_article }> = ({ article }) => {
  return (
    <div style={{ margin: '1rem' }}>
      <div>제목: {article.title}</div>
      <div>내용: {article.content}</div>
      <User user={article.user} />
      <div>댓글 개수: {article.commentNum}</div>
    </div>
  )
}

export default createFragmentContainer(Article, {
  article: graphql`
    fragment Article_article on Article {
      title
      content
      user {
        ...User_user
      }
      commentNum
    }
  `
})
