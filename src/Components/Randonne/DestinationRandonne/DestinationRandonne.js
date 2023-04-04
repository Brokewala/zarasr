import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import "./DestinationRandonne.css";

export default function DestinationRandonne() {
    return (
        <div id='DestinationRandonne'>
            <div className='DestinationRandonne-container'>
                <div className='DestinationRandonne-card'>
                    <div className='DestinationRandonne-card-img'>
                        <CheckCircleOutlineIcon className='up' sx={{ fontSize: "100px" }} />
                    </div>
                    <div className='DestinationRandonne-card-info'>
                        <h1>Planifier</h1>
                        <p>
                        Confiez-nous vos rêves d'évasion: en famille ou entre amis, nous trouverons la formule qui comblera vos attentes.
                        </p>
                    </div>
                </div>
                <div className='DestinationRandonne-card'>
                    <div className='DestinationRandonne-card-img'>
                        <TrendingUpIcon className='down' sx={{ fontSize: "100px" }} />
                    </div>
                    <div className='DestinationRandonne-card-info'>
                        <h1>Organiser</h1>
                        <p>
                        Bénéficier de l'expertise de nos spécialistes de chaque destination, ils vous
                            Accompagnents dans la réalisation de votre voyage est randonnée.
                        </p>
                    </div>
                </div>
                <div className='DestinationRandonne-card'>
                    <div className='DestinationRandonne-card-img'>
                        <PublicIcon className='up' sx={{ fontSize: "100px" }} />
                    </div>
                    <div className='DestinationRandonne-card-info'>
                        <h1>Voyager</h1>
                        <p>
                        Nous nous chargerons d'assurer votre sécurité et de veiller à votre pleine sérénité tout au long de votre voyage et randonnée.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

