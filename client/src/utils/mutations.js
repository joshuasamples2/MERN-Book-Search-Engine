import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user{
      _id
    username
     }
    }
  }`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!,$password:String) {
    addUser($username: username, $email:email,$password:password) {
      token
      user{
        _id
      username
      email
       }
      }
    }`;
  export const REMOVE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deletedBook(bookId: $bookId) {
        _id
      username
      bookCount
      savedBooks{
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }`;
  export const SAVE_BOOK = gql`
  mutation saveBook($authors: [String], $title: String, $description: String, $bookId: String, $image: String, $link: String) {
    saveBook(authors: $authors, title: $title, description: $description, bookId: $bookId, image: $image, link: $link) {
      username
      _id
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }`