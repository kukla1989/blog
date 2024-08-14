import About from '../About/About'
import Footer from '../Footer/Footer'
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
      <Footer />
    </div>
  ) 
}

export default MainPage
