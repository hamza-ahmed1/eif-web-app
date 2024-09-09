import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
import './MainCard.css'; // Import the CSS file

export default function MainCard() {
  return (
    <MDBCard background='dark' className='text-white card-container'>
      <MDBCardImage overlay src='https://mdbootstrap.com/img/new/slides/017.webp' alt='There is Main image' className='card-image' />
      <MDBCardOverlay className='card-overlay'>
        <MDBCardTitle className='card-title'>Card title</MDBCardTitle>
        <MDBCardText className='card-text'>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText>
        <MDBCardText className='card-text'>Last updated 3 mins ago</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
}
