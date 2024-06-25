import "../pages/AboutPage.css";
import Dumbledore from './assets/dumbledore.jpg';
import Hagrid from './assets/hagrid.jpg';

export const AboutPage = () => {
    return (
        <div className="about-container">
            <div id="summary">
                <h1>About Your Enchanted Text Editor</h1>
                <p>
                    Welcome to the Text Editor, the most magical text editor in 
                    the wizarding world! Designed to bring a touch of enchantment to your writing, 
                    It combines the elegance of ancient spellbooks with the modern convenience of Muggle technology. With its user-friendly interface and powerful features, 
                    The editor ensures your words flow as smoothly as a well-brewed potion.
                </p>
            </div>
            
            <div id="creators">
                <h2>The Creators</h2>
                <div className="creators">
                    <div className="creator">
                        <img src={Hagrid} alt="Michael Nguyen" />
                        <h3>Michael Nguyen</h3>
                        <p>Michael Nguyen, a muggle-born wizard with a knack for coding, envisioned Nominal as a tool to merge the mundane with the magical. His expertise in software development and his love for the Harry Potter series were the driving forces behind the creation of this enchanting text editor.</p>
                        <ul className="social-links">
                            <li><a href="https://www.linkedin.com/in/michael-nguyen" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/mikkelng" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                    <div className="creator">
                        <img src={Dumbledore} alt="Alex Laycey" />
                        <h3>Alex Laycey</h3>
                        <p>Alex Laycey, a pure-blood wizard and tech enthusiast, joined forces with Michael to bring Nominal to life. With a background in Innovative Technology and a passion for all things magical, Alex ensured that Nominal not only functions perfectly but also looks spellbinding.</p>
                        <ul className="social-links">
                            <li><a href="https://www.linkedin.com/in/alexlaycy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/alex-laycey" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
