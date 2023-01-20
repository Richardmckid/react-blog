import { defer, useLoaderData, useNavigation } from 'react-router-dom'
import Posts from '../components/posts/Posts'
import Tags from '../components/tags/Tags'
import { supabase } from '../supabase/supabaseClient'

const Home = () => {

  const { data } = useLoaderData();
  const navigation = useNavigation()
  console.log(navigation)
  
  return (
    <>
      <div className="home__hero-section">
        <h1>get inspired</h1>
        <p>Post and tag your friends you enjoyed the moment with & comment on the post</p>
      </div>
      <section className='home__tags-container'>
        <Tags/>
      </section>

      <section className="home__posts-container">
        {data && <Posts posts={data}/> }
        
      </section>
    </>
  )
}

export default Home

export async function loader(){
  const {data, error} = await supabase.from('Posts').select('*, Tags(title)')
  if(error){
    throw Error('Could not load Blog Posts')
  }
  return defer({data})
}