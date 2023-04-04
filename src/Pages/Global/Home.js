import React from "react";
import Layout from "../../Layout/Layout";
import HomeAbout from "../../Components/Global/HomeAbout/HomeAbout";
import HommeBanner from "../../Components/Global/HommeBanner/HommeBanner";


function Home() {

	return (
		<Layout>
			<div id='Home'>
				<div className='Home-container'>
					<HommeBanner />
					<HomeAbout />
				</div>
			</div>
		</Layout>
	)
}
export default Home;