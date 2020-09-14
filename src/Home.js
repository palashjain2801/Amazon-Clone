import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home_container">
            <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2ZiZWZjOWMt/Y2ZiZWZjOWMt-ZTcyNDAzMGUt-w3000_merlin_hero_t1._CB407691774_.jpg'/>
            <div className="home__row">
                {/* Product */}
                <Product 
                id="1"
                title="The Lean Startup" 
                price={19} 
                image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg" rating={5}/>
                
                <Product 
                id="2"
                title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor Smart Watches for Men Women Black" 
                price={35} 
                image="https://m.media-amazon.com/images/I/51oAPLRW9DL._AC_UY218_.jpg" 
		rating={5}/>

                {/* Product */}
            </div>
            <div className="home__row">
                {/* Product */}
                <Product 
                id="3"
                title="Lintelek Fitness Tracker - Activity Tracker with Heart Rate Monitor, Smart Fitness Watch with Sleep Monitor, Step Counter, Calorie Counter, Pedometer Watch for Women Men and Gift" 
                price={35.99} 
                image="https://m.media-amazon.com/images/I/615xGtvAIzL._AC_UY218_.jpg" 
		rating={5}/>
                <Product 
                id="4"
                title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa" 
                price={35.99} 
                image="https://m.media-amazon.com/images/I/613HESgMbAL._AC_UY218_.jpg" 
		rating={5}/>


<Product 
                id="5"
                title="Apple iPhone 11 (64GB, Purple) [Locked] + Carrier Subscription" 
                price={699} 
                image="https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY218_.jpg" 
		rating={5}/>

                {/* Product */}
                {/* Product */}
            </div>
            <div className="home__row">
                {/* Product */}


                <Product 
                id="6"
                title="Samsung UN55KS8500 Curved 55-Inch 4K Ultra HD Smart LED TV (2016 Model)" 
                price={905.99} 
                image="https://images-na.ssl-images-amazon.com/images/I/91OWiyb1G2L._AC_SX679_.jpg" 
		rating={5}/>
            </div>

        </div>
    )
}

export default Home 
