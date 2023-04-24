import './future.css'
import Footer from '../../Components/Footer/Footer'

function FutureStudentPage() {
  return (
    <>
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center p-4'>
      <p className="display-6">Future Students</p>
      <div className="row">
        <div className="col-10 mx-auto justify-content-center">
          <img src="https://www.clipartkey.com/mpngs/m/202-2026458_college-student-png-vector.png" alt="bg-top" className=' mx-auto img-thumbnail' />

        </div>
        <div className="col-10 mx-auto">
          <p className='display-5'>Conditions</p>

          <div className="container p-2 my-2">
            <ul>
              <li>Please submit cleaning request withing 48 hours before request date</li>
              <li>Please ready your room cleaning process</li>
              <li>Don’t any sanitary items and expire food items put in the dustbins during cleaning service period.</li>
              <li>Get own responsible about valuable items in the room during clearing period</li>
            </ul>
            
          </div>
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default FutureStudentPage
