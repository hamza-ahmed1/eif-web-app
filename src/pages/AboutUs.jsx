import React from 'react';
import './AboutUs.css';

   const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="introduction">
        <h2>Introduction (Taruf)</h2>
        <p>
          At MIF, we are committed to providing a nurturing and inclusive environment that supports both the spiritual and educational growth of our students. As the first madrasa in Pakistan dedicated to ensuring all eligible and needy students gain access to quality education, we are proud to support and educate over 200+ students, combining our efforts in Islamic education, academic support, and social welfare to make a meaningful impact.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>
            <h3>Comprehensive Educational Support</h3>
            <p>
              At Madarsa Ishaq Foundation, we are dedicated to providing a wide range of services tailored to the diverse needs of our students. Our commitment includes:
            </p>
            <ul>
              <li>
                <strong>Islamic Education:</strong> We offer enriching programs such as Hifz e Quran, Nazra Quran, and Feham e Deen, serving over 200 students with a deep understanding of Islamic teachings.
              </li>
              <li>
                <strong>Academic Assistance:</strong> We provide free school tuition from KG to VIII for both regular students and those who have previously dropped out. Our support extends to online classes and separate sessions for boys and girls, ensuring a personalized and effective learning experience.
              </li>
              <li>
                <strong>Scholarship Programs:</strong> We assist underprivileged and deserving students with scholarships for Islamic universities, schools, colleges, and other educational institutions, helping to pave their way to a brighter future.
              </li>
              <li>
                <strong>Social Welfare Programs:</strong> Our initiatives offer essential medical help, financial aid, and various forms of social support to those in need, demonstrating our commitment to holistic community assistance.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          Empowering the Future
        </p>
        <p>
          Our vision is to uplift and educate school dropouts and underprivileged students, including orphans and those facing financial difficulties. By providing access to high-quality education and supportive resources, we aim to create opportunities for every student to succeed academically and personally. We are dedicated to fostering an environment where education serves as a pathway to a brighter and more equitable future.
        </p>
      </section>

      <section className="campuses">
        <h2>Campuses</h2>
        <p>
          Main Campus & Buffer Zone Campus
        </p>
        <p>
          Our main campus and Buffer Zone campus are equipped to deliver exceptional educational experiences, with facilities designed to support both our Islamic and academic programs.
        </p>
      </section>

      <section className="affiliation">
        <h2>Affiliation</h2>
        <p>
          Ministry of Education – Islamabad
        </p>
        <p>
          MIF is proudly affiliated with the Ministry of Education in Islamabad, ensuring that our programs meet high educational standards and contribute to the broader goals of national education.
        </p>
      </section>

      <section className="support">
        <h2>Support Our Mission</h2>
        <p>
          We invite you to join us in our mission to provide quality education and support to those in need. Learn more about how you can contribute through donations or other forms of assistance.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          For more information or to get in touch, please visit our Contact Us page.
        </p>
      </section>

      <footer>
        <p>Madarsa Ishaq Foundation – Where Education and Compassion Meet</p>
      </footer>
    </div>
  );
};

export default  AboutUs;