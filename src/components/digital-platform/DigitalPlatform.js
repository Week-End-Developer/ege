import apple from '../../assets/apple.svg';
import spotify from '../../assets/spotify.png';
import mySvg from '../../recordsvg.svg';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import xlogo from '../../assets/xlogo.png';
import instagram from '../../assets/instagram.png';
import { motion } from 'framer-motion';

function DigitalPlatform() {
    const socialMediaText = "Sosyal Medya";
    const albumsText = "Dijital Platformlar";

    return (
        <div className="digital-platform">
            <div className='image-wrapper slide-down-fade-in'>
                <img src={mySvg} className="rotate-svg" alt="My SVG" />
            </div>

            <div className='digital-icons'>
                <div className='section-social'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="typing-text"
                    >
                        <h1>
                            {socialMediaText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>
                    <div className='digital-platform-inner'>
                        <a href="https://www.facebook.com/egeofficial.net" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/egeofficialpage" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="youtube" />
                        </a>
                        <a href="https://x.com/egeofficialpage" target="_blank" rel="noopener noreferrer">
                            <img src={xlogo} alt="xlogo" />
                        </a>
                    </div>
                </div>

                <div className='section'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="typing-text"
                    >
                        <h1>
                            {albumsText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>
                    <div className='digital-platform-inner' style={{ gap: '1rem' }}>
                        <a href="https://music.apple.com/tr/artist/ege/217214288" target="_blank" rel="noopener noreferrer">
                            <img src={apple} alt="apple" />
                        </a>
                        <a href="https://open.spotify.com/intl-tr/artist/3nmYPDXqMqkNIujfm9wGDg" target="_blank" rel="noopener noreferrer">
                            <img src={spotify} alt="spotify" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigitalPlatform;
