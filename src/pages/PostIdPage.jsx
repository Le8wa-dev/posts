import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import { Loader } from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

export const PostIdPage = () => {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const params = useParams();

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data)
  })
  const [fetchComents, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data)
  })


  useEffect(() => {
    fetchPostById();
    fetchComents();
  }, []);


  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {
        isLoading
          ? <Loader />
          : <div>{post.id}. {post.title}</div>
      }
      <h2>Комментарии</h2>
      {
        isComLoading
          ? <Loader />
          : <div>
            {
              comments.map(comm => (
                <div key={comm.id} style={{marginTop: 10}}>
                  <h5>{comm.email}</h5>
                  <div>{comm.body}</div>
                </div>
              ))
            }
          </div>
      }
    </div>
  )
}
