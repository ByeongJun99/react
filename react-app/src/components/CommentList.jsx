import React from 'react'
import Comment from './Comment'

const comments = [
    {
        id: 1,
        name: "최지원",
        comment: "안녕하세요. 최지원입니다. 잘부탁드려요",
        path: "https://i.ytimg.com/vi/z-FGKPVGv9s/maxresdefault.jpg"
    }, {
        id: 2,
        name: "김효영",
        comment: "잘 모르겠어요^^",
        path: "https://i.ytimg.com/vi/IBG4hCwqq6U/maxresdefault.jpg"
    }, {
        id: 3,
        name: "김지원",
        comment: "화이팅~ 잘 해보세요~",
        path: "https://cdn.hanryutimes.com/news/photo/202312/77225_88447_269.png"
    }
]

const CommentList = () => {
  return (
    <div>
        {comments.map(comment => {
            return <Comment key={comment.id} name={comment.name} comment={comment.comment} path={comment.path}/>
        })}
    </div>
  )
}

export default CommentList