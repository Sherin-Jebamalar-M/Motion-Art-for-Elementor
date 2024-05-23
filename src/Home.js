import React from 'react'
import './Home.scss'
import { FaArrowRight } from "react-icons/fa6";
function Home() {
    return (
        <div className='section'>
            <div className='NavBar'>
                <img src="./images/MotionArtEffect-logo.png" />
                <div className='Button'>
                    <p><a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank">Purchase Now</a></p>
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
                        <img src='./images/MotionArtEffect-img2.png'></img>
                    </div>
                    <div>
                        <img src='./images/MotionArtEffect-img4.png'></img>
                        <p>4.5 Score, 9 Reviews</p>
                    </div>

                </div>
                <div className='Ratings'>
                    <div className='star1'>
                        <img src='./images/MotionArtEffect-img1.png'></img>
                    </div>
                    <div>
                        <img src='./images/MotionArtEffect-img4.png'></img>
                        <p>4.5 Score, 9 Reviews</p>
                    </div>

                </div>
                <div className='Ratings'>
                    <div className='star1'>
                        <img src='./images/MotionArtEffect-img3.png'></img>
                    </div>
                    <div>
                        <img src='./images/MotionArtEffect-img4.png'></img>
                        <p>4.5 Score, 9 Reviews</p>
                    </div>

                </div></div>
            <div className='Details'>
                <div className='content'>
                    <p className='Big'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
                    <p className='small'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                    <div className='Button'><p>
                        <a href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891' target="_blank">Purchase From Envato</a>
                    </p><p className='icon'><FaArrowRight /></p></div>

                </div>
                <div className='magic'>
                    <img src='./images/MotionArtEffect-img5.png'></img>
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
                    <img src='./images/MotionArtEffect-img11.png'></img>

                </div>
                <div className='Card down'>
                    <p className='Big'>Apply On Page</p>
                    <p className='Small'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                    <img src='./images/MotionArtEffect-img11.png'></img>


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
                    <img src='./images/MotionArtEffect-img8.png'></img>


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
                    <img src='./images/MotionArtEffect-img9.png'></img>
                    <p className='Big'>Light Weight</p>
                    <p className='Small'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className='Boxx1'>
                    <img src='./images/MotionArtEffect-img6.png'></img>
                    <p className='Big'>100% Responsive</p>
                    <p className='Small'>Create a consistent visual experience across all devices.</p>
                </div>
                <div className='Boxx1'>
                    <img src='./images/MotionArtEffect-img7.png'></img>
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
                            <a href='https://qodematrix.com/docs/motion-art-for-elementor/' target="_blank">Documentation</a>
                        </li>
                        <li>
                            <a href='https://support.qodematrix.com/' target="_blank">Support</a>
                        </li>
                    </p>
                </div>
            </footer>

        </div>


    )
}

export default Home
