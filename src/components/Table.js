import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap'

const Table = () => {

  const [posts, setPosts] = useState({ blogs: [] })

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios("http://jsonplaceholder.typicode.com/posts/1/comments")
      setPosts({ blogs: data })
      console.log(data)

    }
    fetchPostList()
  }, [setPosts])

  return (
    <div>
      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.blogs && posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </ReactBootstrap.Table>
    </div>
  )
}

export default Table
