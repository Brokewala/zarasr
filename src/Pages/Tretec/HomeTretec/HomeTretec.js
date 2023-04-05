import React from 'react';
import AboutTretec from '../../../Components/Tretec/ABoutTretec/AboutTretec';
import Banner from '../../../Components/Tretec/Banner/Banner';
import LastProject from '../../../Components/Tretec/LastProject/LastProject';
import Layout from '../../../Layout/Layout';

export default function HomeTretec() {
  return (
    <Layout>
      <div id="HomeTretec">
        <Banner />
        <AboutTretec />
        <LastProject/>
      </div>
    </Layout>
  )
}
