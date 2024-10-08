import About from '../About/About'
import MainPagePosts from '../MainPagePosts/MainPagePosts'
import Projects from '../Projects/Projects'
import Subscribe from '../Subscribe/Subscribe'

const MainPage = () => {
  return (
    <div className='main-page'>
      <About />
      <Projects />
      <MainPagePosts />
      <Subscribe />
    </div>
  ) 
}

export default MainPage
