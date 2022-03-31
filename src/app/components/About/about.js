import React from "react";
import { Fade, Bounce } from "react-reveal";
import "./about.css";

function About() {
  return (
    <div className="about" id="about">
      <Bounce bottom>
        <h2>About</h2>
      </Bounce>
      <div className="about-div">
        <div className="about-part">
          <Bounce bottom>
            <h3>About MBIT</h3>
          </Bounce>
          <Fade bottom>
            <p>
              Madhuben & Bhanubhai Patel Institute of Technology (MBIT), a
              constituent College of CVM University, Vallabh Vidyanagar, Gujarat
              was established in 2009; contributing to the society by developing
              young minds. MBIT epitomizes the commitment of Charutar Vidya
              Mandal towards academia and society, the institute professes to
              add the technical quantum competent personnel. The institute has
              charted out a long-term plan to inculcate its core ideology of
              social welfare and thus emerge as an exemplary Utopia of
              academics. To achieve real Woman Empowerment, MBIT was converted
              from the only women college to Co-Education from 2019-20. Mr.
              Prayasvin B. Patel, Chairman, and Managing Director, Elecon
              Engineering Company Limited; is the chief patron of this institute
              and also a president of CVM.
            </p>
          </Fade>
        </div>
        <div className="about-part">
          <Bounce left>
            <h4>Mission</h4>
          </Bounce>
          <Fade left>
            <p>
              To prepare competent need-based human-resource and responsible
              citizens for the engineering profession through dissemination of
              knowledge and development of technical skills and create an
              environment that fosters the involvement and commitment of all
              stakeholders for continuous improvement in performance and
              quality.
            </p>
          </Fade>
        </div>
        <div className="about-part">
          <Bounce right>
            <h4>Vision</h4>
          </Bounce>
          <Fade bottom>
            <p>
              To become a benchmark technical institution where learning is a
              joy, education is for tomorrow, research and development is pace
              setting and every one is committed to delivering competent human
              resources for prosperity and well-being of industry, profession
              and society.
            </p>
          </Fade>
        </div>
      </div>
      <div className="about-div">
        <div className="about-part">
          <Bounce left>
            <h3>About Adhishthan</h3>
          </Bounce>
          <Fade bottom>
            <p>
              Adhishthan is an annual techfest curated by Madhuben and Bhanubhai
              Patel Institute of Technology(MBIT).It is one of the most
              exquisite and appreciated fests. The main objective of adhisthan
              is to bring out the talents and nurture the young minds with the
              help of innovative and inspiring events. Every year we bring forth
              an amalgamation of Technical events, Non Technical events and
              expert sessions which are rare and innovative in nature.This
              megafest contains Seminars and workshops to enhance the knowledge
              and network of the students. Technical events are added to test
              out their skills which help to grow and learn more. Along with
              technical learning and practical knowledge, we also take care
              about the mental and physical strength of students by organizing
              non-technical and fun games events.
            </p>
          </Fade>
        </div>
        <div className="about-part">
          <Fade bottom>
            <p>
              How can we forget about fun elements that trigger the enthusiasm
              the most! Here we bring forth the Cultural Night event where
              students can show out their talents while enjoying freely and
              happily. So buckle up yourself to explore the most vigorous and
              valorous journey.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
