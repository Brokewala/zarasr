import React from 'react';
import AboutZara from '../../Components/Global/AboutZara/AboutZara';
import BannerAbout from '../../Components/Global/BannerAbout/BannerAbout';
import GlobalAboutRandonne from '../../Components/Global/GlobalAboutRandonne/GlobalAboutRandonne';
import GlobalAboutTravel from '../../Components/Global/GlobalAboutTravel/GlobalAboutTravel';
import GlobalAboutTretec from '../../Components/Global/GlobalAboutTretec/GlobalAboutTretec';
import GlobalAboutZara from '../../Components/Global/GlobalAboutZara/GlobalAboutZara';
import Layout from '../../Layout/Layout';
import "./style/About.css";


export default function About() {

  return (
    <Layout>
      <div id="About">
        <div className='About-container'>
          <BannerAbout />
          <AboutZara/>
          {/* <GlobalAboutZara /> */}
          {/* <GlobalAboutRandonne /> */}
          {/* <GlobalAboutTretec /> */}
          {/* <GlobalAboutTravel /> */}
        </div>
      </div>
    </Layout>
  )
}
