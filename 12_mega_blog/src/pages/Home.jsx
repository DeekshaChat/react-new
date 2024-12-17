import React, {useState, useEffect} from 'react'
import appWriteService from '../appwrite/config';
import {PostCard, Container} from '../components';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    
    appWriteService.getPosts().then((posts)=> {
      if (posts) {
        setPosts(posts.documents);
      }
    });

    }, [])
    
  if (posts.length === 0) {
    return (<div className='w-full py-8 mt-4 text-center'>
      <Container>
        <div className='flex flex-wrap'>
          <div className='p-2 w-full'>
            <h1 className='text-2xl font-bold hover:text-gray-500'>
              Login to read all posts
            </h1>
          </div>
        </div>
      </Container>
    </div>)
  } else {
    return(
<div className='w-full py-8'>
  <Container>
    <div className='flex flex-wrap'>
      {posts.map((post) => {
        <div key={post.$id} className='p-2 w-1/4'>
          <PostCard post={post}/>
          </div>
      })}
    </div>
  </Container>
</div>
    )
  }
}