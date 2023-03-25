import { Link } from 'react-router-dom'
import './Main.css'
import { TypeAnimation } from 'react-type-animation';

export default function Main() {
  return (
    <div className="container-fluid mb-5" >
      <div className="row " >
        <div className="col-12 col-md-6 overflow-hidden">
          <img className="bg-img  m-0" src="https://qtxasset.com/quartz/qcloud1/media/image/image/2022-02/buildings%20sunrise.jpg?VersionId=ZEXZsNJj_dKqrpwwXjz1CgkEPlPQ1xgP" alt="bg" />
        </div>
        <div className="col-12 col-md-6  border-1 d-flex  gap-4 flex-column justify-content-center align-items-center position-relative overflow-hidden">
          <img src="https://cdn3.vectorstock.com/i/1000x1000/11/77/abstract-background-design-vector-4351177.jpg" alt="bg" className='cover-bg' />

          <h2 className="display-4 text-center m-5 m-md-2">
            We Welcome you
          </h2>
          {/* <Link href="#" className='btn'>Take a tour</Link> */}
          <button className='my-btn'>Take a  tour</button>
          
        </div>
      </div>

      <div className="row p-5">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-around align-items-center text-center">
          <TypeAnimation
            sequence={[
              'Best Serices',
              1000,
              'Comfortable Stay',
              1000,
              'Afortable cost',
              2000
            ]}
            speed={20}
            wrapper="h3"
            cursor={true}
            repeat={Infinity}
            className='mb-3 mb-md-0'
            style={{ fontSize: '3em', display: 'inline-block' }}
                
          />
          <h3 className="display-5 ">Get started</h3>

        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur 
          </p>
          <p>
            voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            
          </p>
          {/* <Link to={''} className='btn btn-sm btn-outline-secondary'>Visit</Link> */}
          <button className="my-btn">Visit</button>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-12 colored-box position-relative col-md-6 m-0 p-0 d-flex align-items-center justify-content-around" style={{
          backgroundColor:'#70b359'
        }}>
          <img className='w-75' src="https://media.istockphoto.com/id/579774164/photo/cheerful-group-of-friends.jpg?s=612x612&w=0&k=20&c=CWUpQIT9RbDEIesRTHQgUhAOFue-3UaFJm7p5r-GNEk=" alt="group" />

          <h1 className='text-white position-absolute overlay-text'>we provid <br/>the best stay</h1>
        </div>

        <div className="col-12 colored-box col-md-6 m-0 px-5  d-flex justify-content-center align-items-center  flex-column" style={{
          backgroundColor:'#f57b2a'
        }}>
          <h1 className='text-white text-justify mx-4 white-text-heading'>
            We are a community that feels like home.
          </h1>
          <p className='text-white mx-4'>
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          </p>
        </div>

        <div className="col-12  colored-box col-md-6 m-0 px-5  d-flex justify-content-center align-items-center  flex-column" style={{
          backgroundColor:'#e3be36'
        }}>
          <h1 className='text-white text-justify mx-4 white-text-heading'>
          Ready to stay?
          </h1>
          <p className="text-white mx-4">
          eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          </p>
        </div>

        <div className="col-12  colored-box col-md-6 m-0 p-0 bg-dark overflow-hidden" >
          <img className='box-4-img' src="https://media.istockphoto.com/id/866754354/photo/different-lifestyles-concept.jpg?s=170667a&w=0&k=20&c=DpK6y3Y0WJV6wMdU25mZ-A2Hl6_X0UfN4qx5WnGULAM=" alt="bg" />
        </div>
      </div>
    </div>
  )
}
