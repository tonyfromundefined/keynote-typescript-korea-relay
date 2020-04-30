import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import { createEnvironment } from './relay'
import { AppQuery } from './__generated__/AppQuery.graphql'
import Article from './component/Article'

function App() {
  return (
    <div>
      <div>Hello, TypeScript Korea</div>
      <QueryRenderer<AppQuery>
        environment={createEnvironment()}
        query={graphql`
          query AppQuery {
            articles {
              id
              ...Article_article
            }
          }
        `}
        variables={{}}
        render={({ props, error }) => {
          if (error) {
            return <div>{error.message}</div>
          }
          if (!props) {
            return <div>loading...</div>
          }

          return (
            <div>
              {props.articles.map((article) => (
                <Article
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          )
        }}
      />
    </div>
  )
}

export default App
