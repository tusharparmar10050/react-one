import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Tushar</h1>
                    <p>Solution to all your problems.</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo vitae harum nesciunt deserunt in nihil voluptatibus labore debitis quis consequuntur dolorem rem cumque, veniam earum! Vitae expedita sequi obcaecati, inventore similique nobis repudiandae est recusandae nemo facere, modi ad a totam beatae perferendis! Molestiae officiis, ipsam, praesentium illo obcaecati iure voluptatibus expedita ipsum sequi ex doloremque quis fuga natus adipisci eveniet veniam totam. Voluptatibus eaque ipsa hic atque, eligendi nostrum iste ut modi fugiat error sapiente voluptate placeat temporibus beatae itaque quaerat veniam iure provident odio! Repellendus in, quis deserunt corrupti vero officiis deleniti tempora veniam amet rem eos?
                    </p>
                </div>

            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.9s",
                            }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>

    );
};

export default Home;