import React from 'react';
import AboutZara from '../../Components/Global/AboutZara/AboutZara';
import BannerAbout from '../../Components/Global/BannerAbout/BannerAbout';
import Layout from '../../Layout/Layout';
import "./style/About.css";


export default function About() {

  return (
    <Layout>
      <div id="About">
        <div className='About-container'>
          <BannerAbout />
          <AboutZara/>

        </div>
      </div>
    </Layout>
  )
}
