import Footer from '../../Components/Footer/Footer'
import './index.css'

function Accomadation() {
  return (
    <>
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
      <div className="row mt-3 w-100">
        <p className="text-center display-6">Girls-Accomodations</p>
        <div className="container ">
          <div className="row w-100 mx-auto gap-2">
            <div className="col-10 col-md-3 mx-auto box ">
              <p>Text</p>
            </div>
            <div className="col-10 col-md-3 mx-auto box">
              <p>Text</p>
            </div>
            <div className="col-10 col-md-3 mx-auto box">
              <p>Text</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5 w-100">
        <p className="text-center display-6">Boys-Accomodations</p>
        <div className="container ">
          <div className="row w-100 mx-auto gap-2">
            <div className="col-10 col-md-3 mx-auto box ">
              <p>Text</p>
            </div>
            <div className="col-10 col-md-3 mx-auto box">
              <p>Text</p>
            </div>
            <div className="col-10 col-md-3 mx-auto box">
              <p>Text</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Accomadation
