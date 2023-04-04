import React from 'react'
import AboutTravel from '../../../Components/Travel/AboutTravel/AboutTravel';
import BannerTravel from '../../../Components/Travel/BannerTravel/BannerTravel';
import Layout from '../../../Layout/Layout'


export default function HomeTravel() {

    return (
        <Layout>
            <div id="HomeTravel">
                <div className='HomeTravel-container'>
                    <BannerTravel />
                    <AboutTravel />
                </div>
            </div>
        </Layout>
    )
}
