import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.google.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                About Us
              </h6>
              <p>
                At MIF, we provide a nurturing environment for spiritual and educational growth. As Pakistan's first madrasa committed to quality education for all eligible students, we proudly support over 200+ students with Islamic education, academic support, and social welfare.
              </p>
            </MDBCol>

            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <p>
                <a href='#!' className='text-reset'>Islamic Education</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Academic Assistance</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Scholarship Programs</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Social Welfare Programs</a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Vision</h6>
              <p>
                Empowering underprivileged students and orphans through high-quality education and support to create opportunities for a brighter future.
              </p>
            </MDBCol>

            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mif.edu.pk'>
          mif.edu.pk
        </a>
      </div>
    </MDBFooter>
  );
}
