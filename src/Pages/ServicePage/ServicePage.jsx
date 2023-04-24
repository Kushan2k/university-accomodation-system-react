import React from 'react'
import ContentBox from '../../Components/ContentBox/ContentBox'
import FlipBox from '../../Components/FlipBox/FlipBox'
import '../../Components/Main/Main.css'

function ServicePage() {
  return (
    <div className='container-fluid my-4'>
      <p className="display-4 text-center ">Our Services</p>
     
      <div className="row m-0 p-0 small-box-container position-relative overflow-hidden w-100">
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
    </div>
  )
}

export default ServicePage
