import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { User_user } from '../__generated__/User_user.graphql'

const User: React.FC<{ user: User_user }> = ({ user }) => {
  return (
    <div>
      <div>이름: {user.displayName}</div>
      <div>@{user.username}</div>
    </div>
  )
}

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      displayName
      username
    }
  `,
})
