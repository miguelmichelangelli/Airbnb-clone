import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {
  function renderCard(course) {
    return (
      <Card
        key= {course.id}
        item= {course} //object with all the data
      />
    )
  }

  return (
    <>
      <Navbar />
      <Hero />
      <div className='para-el-flex'>
        {data.map(course => renderCard(course))}
      </div>
    </>
  )
}

export default App