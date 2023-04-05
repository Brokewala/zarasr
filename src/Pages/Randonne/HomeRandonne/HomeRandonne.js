import React from 'react'
import BannerRandonne from '../../../Components/Randonne/BannerRandonne/BannerRandonne'
import CirciutsRandonne from '../../../Components/Randonne/CirciutsRandonne/CirciutsRandonne'
import DestinationRandonne from '../../../Components/Randonne/DestinationRandonne/DestinationRandonne'
import LastPhoto from '../../../Components/Randonne/LastPhoto/LastPhoto'
import Layout from '../../../Layout/Layout'

export default function HomeRandonne() {

    return (
        <Layout>
            <div id='HomeRandonne'>
                <div className='HomeRandonne-container'>
                    <BannerRandonne />
                    <DestinationRandonne />
                    <CirciutsRandonne />
                    <LastPhoto />
                    <div className='HomeRandonne-contact' style={{ textAlign: 'center', width: '80%', margin: "30px auto" }}>
                        <p>
                            Zara sr, nous savons que voyager est une aventure humaine main également un engagement financier important pour vous. C'est pourquoi nous mettons un point d'honneur à prendre en compte chacun de vos attentes pour vous aider dans la preparation de votre séjour, circuit ou voyage su mesuré.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
