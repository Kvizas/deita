import React from 'react'

import sass from "./thread-post.module.sass"

export default function ThreadPost({ post }) {

    console.log(post)

  return (
    <div className={sass.threadPost}>
        <div>{post.author}</div>
    </div>
  )
}
