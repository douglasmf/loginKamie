import "./assets/sass/app.sass"
import Banner from "./components/template/Banner"
import Footer from "./components/template/Footer"
import Header from "./components/template/Header"
import Main from "./components/template/Main"

function App() {
  return (
    <div className='app container-fluid'>
      <div className="row">
        <Banner />
        <div className="interface col-sm-12 col-lg-5 ">
          <div>
            <Header />
            <Main />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
