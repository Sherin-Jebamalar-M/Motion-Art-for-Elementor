import React from 'react'
import './Home.scss'
import { FaArrowRight } from "react-icons/fa6";
import img1 from './images/motionarteffect-img1.png';
import img2 from './images/motionarteffect-img2.png';
import img3 from './images/motionarteffect-img3.png';
import img4 from './images/motionarteffect-img4.png';
import img5 from './images/motionarteffect-img5.png';
import img6 from './images/motionarteffect-img6.png';
import img7 from './images/motionarteffect-img7.png';
import img8 from './images/motionarteffect-img8.png';
import img9 from './images/motionarteffect-img9.png';
import img10 from './images/motionarteffect-img10.png';
import img11 from './images/motionarteffect-img11.png';
import logo from './images/MotionArtEffect-logo.png';
function Home() {
    return (
        <div className='section'>
            <div className='NavBar'>
                <img src={logo} />
                <div className='Button'>
                    <p><a href="#" target="_blank">Purchase Now</a></p>
                </div>

            </div>
            <div className='Content'>
                <div className='Content1'>
                    <p> <span>Transform <br></br>Your Website <br></br><br></br></span>
                        With Motion Art <br></br>Effect</p>
                </div>
                <div className='Content2'>
                    <p className='para1'>
                        Attract Your Visitors Attention With Colorful <span>Motion Art Effect</span>
                    </p>
                    <p className='para2'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
                </div>
            </div>
            <div className='Review'>
                <p>Trusted by thousands of users around the world</p>
            </div>

            <div className='Review-Container'>
                <div className='Ratings'>
                    <div className='star1'>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img4} />
                        <p>4.5 Score, 9 Reviews</p>
                    </div>

                </div>
                <div className='Ratings'>
                    <div className='star1'>
                        <img src={img1}/>
                    </div>
                    <div>
                        <img src={img4}/>
                        <p>4.5 Score, 9 Reviews</p>
                    </div>

                </div>
                <div className='Ratings'>
                    <div className='star1'>
                        <img src={img3}/>
                    </div>
                    <div>
                        <img src={img4}/>
                        <p>4.5 Score, 9 Reviews</p>
                    </div>

                </div></div>
            <div className='Details'>
                <div className='content'>
                    <p className='Big'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
                    <p className='small'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                    <div className='Button'><p>
                        <a href='#' target="_blank">Purchase From Envato</a>
                    </p><p className='icon'><FaArrowRight /></p></div>

                </div>
                <div className='magic'>
                    <img src={img5}/>
                </div>
            </div>
            <div className='Deals'>
                <p>Apply On Any Section Or Enable For Whole Page</p>
            </div>
            <div className='Container'>
                <div className='Card'>
                    <p className='Big'>Apply On Section</p>
                    <p className='Small'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.

                    </p>
                    <img src={img11} />

                </div>
                <div className='Card down'>
                    <p className='Big'>Apply On Page</p>
                    <p className='Small'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                    <img src={img10} />


                </div>
            </div>
            <div className='Box'>
                <div className='Cards'>
                    <p className='Big'>
                        Supported by All Popular Browsers
                    </p>
                    <p className='Small'>
                        Rest assured, Motion Art is designed to be compatible with all major web browsers.
                    </p>
                    <img src={img8}/>


                </div>
            </div>
            <div className='Box1'>
                <div className='Content'>
                    <p className='Big'>
                        An All-Round Plugin With Powerful Features
                    </p>
                    <p className='Small'>
                        Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
                    </p>


                </div>
            </div>
            <div className='Benefits'>
                <div className='Boxx1'>
                    <img src={img9}/>
                    <p className='Big'>Light Weight</p>
                    <p className='Small'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className='Boxx1'>
                    <img src={img6}/>
                    <p className='Big'>100% Responsive</p>
                    <p className='Small'>Create a consistent visual experience across all devices.</p>
                </div>
                <div className='Boxx1'>
                    <img src={img7}/>
                    <p className='Big'>User Friendly Interface</p>
                    <p className='Small'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            </div>
            <footer>
                <div className='End'>
                    <p className='p1'>
                        © 2023 Copywrite. All rights reserved by QodeMatrix
                    </p>
                    <p className='p2'>
                        <li>
                            <a href='#' target="_blank">Documentation</a>
                        </li>
                        <li>
                            <a href='#' target="_blank">Support</a>
                        </li>
                    </p>
                </div>
            </footer>

        </div>


    )
}

export default Home
