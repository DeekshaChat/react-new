import React, {useState, useEffect} from 'react'
import appWriteService from '../appwrite/config';
import {useParams, useNavigate} from 'react-router';
import { Container } from '../components';
import PostForm from '../components/Post-form/PostForm';

export default function EditPost() {
    const [post, setPost] = useState([]);
    const {slug} = useParams()
    const navigate = useNavigate();

    useEffect(()=> {
      if (slug) {
        appWriteService.getPost(slug).then(post => {
          console.log('edit post=====', post);
          
          setPost(post)
        });
      } else {
        navigate('/');
      }

    }, [slug, navigate]);
  return post ? (
    <div className='py-8'>
      <Container>
        <div key={post.$id}>
          <PostForm post={post}/>
        </div>
      </Container>
    </div>
  ) : null;
}