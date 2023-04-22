
import ContentBox from '../ContentBox/ContentBox';
import FlipBox from '../FlipBox/FlipBox';
import Footer from '../Footer/Footer';
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

          <h2 className="display-5 text-center m-5 m-md-2">
          Medical Students Accommodations <br />
          WE OFFERED BEST CARRING FOR ACHIVEYOUR DERAMS 
          </h2>
          {/* <Link href="#" className='btn'>Take a tour</Link> */}
          <button className='my-btn' style={{
            zIndex:100
          }}>Take a  tour</button>
          
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
          {/* <img className='w-75' src="../../Assets/Image/medical students.jpg" alt="group" /> */}

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

      <div id='features-box' className="row m-0 p-0 position-relative overflow-hidden">
        <img className='bg-img-row p-0 m-0' src="https://media.istockphoto.com/id/1224388366/vector/colorful-geometric-background.jpg?s=612x612&w=0&k=20&c=0MH3nZPyJnqL41pnXHnejHlUqFBPmVVKt8dCl9tbaOs=" alt="bg" />
        <div className="d-none d-lg-flex col-lg-6 mx-auto position-relative">
          <img src="https://www.pngall.com/wp-content/uploads/8/Young-Man-PNG-Free-Image.png" alt="man" />
        </div>
        <div className="col-12 col-lg-6 mx-auto justify-content-center align-items-center">
          <h1 className="text-center text-big mt-5 mt-mg-2">Come & Stay here.</h1>
          <div className="mx-auto d-flex">
            <ul className='features-box'>
              <li>
                <h3>24/7 Support</h3>
                <div className="rounded-circle bg-success">

                </div>
              </li>
              <li>
                <h3>
                  Location
                </h3>
                <div className="rounded-circle bg-success">

                </div>
              </li>
              <li>
                <h3>  
                  Security
                </h3>
                <div className="rounded-circle bg-success">

                </div>
              </li>
              <li>
                <h3> 
                  Facilities
                </h3>
                <div className="rounded-circle bg-success">

                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 small-box-container position-relative overflow-hidden">
        <img src="https://media.istockphoto.com/id/1204292203/photo/multi-ethnic-young-adults-around-the-fire-selfie-stock-photo.jpg?s=612x612&w=0&k=20&c=gIMK3EoidytABqLwpAFkkZLpd9Je453rrrCUBuGl6bg=" className='bg-img-row p-0 m-0' alt="bg" />
        <div className="col-6 col-md-2  small-box bg-success">
          <h1>We <br />Stand <br />For</h1>
        </div>
        <FlipBox title={'ILLNESS'} fontcolor={'#c6c3c7'} offset={8} bgColor={'#306135'} content={'Any significant illnesses should be informed to the warden/sub-warden and to the university medical officer as soon as possible'} />
        
        <FlipBox title={'LIGHTS'} offset={2} fontcolor={'#343634'} bgColor={'#a9c7c3'} content={'Students should switch off the lights (and fans) when they leave their rooms and bathrooms except the common areas of the hostel.'}/>
        
        <FlipBox title={'WASTE'} fontcolor={'#b8b8b8'} bgColor={'#f27f27'} content={'Rooms should be swept daily. All wastes including sanitary pads and left-over food should be disposed in appropriate bins kept for the specific purpose.'} />
        
        <FlipBox title={'NOISE POLLUTION'} offset={2} fontcolor={'#f27f27'} bgColor={'#ddc1e3'} 
        content={`Students are expected to be attentive not to make any disturbance to others.

Students should keep noise levels to a minimum at all times and no noice from 10.00 p.m. to 6.00 a.m.`}/>
        
        <FlipBox bgColor={'#87ab85'} fontcolor={'#055726'} offset={6} title={'DAMAGES AND RECOVERY'} content={'Rough handling of dining hall/room furniture, any furniture, property or fittings of the hostel is strictly forbidden.'} />
        
      </div>
      <div className="row">
        <h1 className="text-center text-dark mt-3">Don’t just live here, belong here.</h1>
      </div>
      <div className="row p-0 m-0">
        <ContentBox title='First year room'
        discriptiob='Most of our first years share a washroom with another first year. Called your ‘sinkie,’ this person may be your new best friend.'
         list={['King single bed','Pillow','Study desk & chair','Bedside table or shelving']} />

        <ContentBox title='Second year room'
        discriptiob='No matter your year level, you won’t have to move out for mid-year!'
         list={['Double/King single bed','Twin-share or private ensuite','Pillow','Study desk & chair','Bedside table or shelving']} />

        <ContentBox title='Third year room'
        discriptiob='College Leadership also has its perks, including tree-top views and you might even score a balcony!'
         list={['Double bed with pillow','Private ensuite','Kitchenette','Study desk & chair','Bedside table & shelving']} />
      </div>
      <Footer/>
    </div>
  )
}
