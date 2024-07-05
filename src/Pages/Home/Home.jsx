import React, { useState, useEffect } from 'react'
import "./Home.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import AbtPic from './Images/Me.jpg'
import workpic1 from './Images/ecommerce.jpeg'
import workpic2 from './Images/integrated motion.jpeg'
import workpic3 from './Images/jobs.jpeg'
import workpic4 from './Images/summarizer.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faMicrochip, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons'

function Home() {

  // browser tab title
  useEffect(() => {
    document.title = 'Home - Ish Savaliya';
  }, []);

  // About section functionality
  const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDownloadResume = async () => {
      try {
          // Fetch the resume file from the public folder
          const response = await fetch('/Resume.pdf');
          const blob = await response.blob();

          // Create a URL for the blob object
          const url = window.URL.createObjectURL(new Blob([blob]));

          // Create an anchor element with the URL and trigger download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Resume.pdf');
          document.body.appendChild(link);
          link.click();

          // Cleanup
          link.parentNode.removeChild(link);
          window.URL.revokeObjectURL(url);
      } catch (error) {
          console.error('Error downloading resume:', error);
          toast.error('Error downloading resume')
      }
  };

  // View more functionality
  const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(true);
    };

    const handleHide = () => {
        setShowMore(false);
    };

  // Contact form functionality
  const scriptURL = 'https://script.google.com/home/projects/1bgsBil7wVhnodPCc08c9CPX8f018lMM_YwZb8jtriUFffuVs53lKkH33/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            toast.success('Form submitted successfully!')
            e.target.reset();
        } else {
            toast.error('Form submission failed');
            throw new Error('Failed to submit message');
        }
    } catch (error) {
        console.error('Error!', error.message);
        toast.error('Error', error.message);
    }
};

  // Icon library
  library.add(faCode, faPenRuler, faMicrochip, faLink, faEnvelope, faInstagram, faLinkedin, faGithub, faXTwitter)


  return (
    <div>


        <div className='header-section' id='header'>
          <div className='container'>
            <Navbar/>
            <div className='header-text'>
              <p>Hi, I'm</p>
              <h1>Ish Savaliya</h1>
              <h2>Let's innovate together.</h2>
              <a href="#contact" className="header-btn" aria-label='Get-started-button'>Get started</a> 
            </div>
          </div>
        </div>

        <div className='about-section' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='abt-col-1'>
                <img src={AbtPic} alt="-ChoqueAndres-Professional" />
              </div>
              <div className="abt-col-2">
                      <h1 className="sub-header">Who am I</h1>
                      <p>I am a final year student at Indian Institute of Information Technology, Pune. I've gained hands-on experience in Machine Learning and MERN Stack web development fields with hands on experiences and various projects.
                      </p>

                      <div className="tabs">
                        <p className={`tab-links ${activeTab === 'skills' ? 'act-link' : ''}`} onClick={() => openTab('skills')}><strong>Skills</strong></p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'act-link' : ''}`} onClick={() => openTab('experience')}><strong>Experience</strong></p>
                        <p className={`tab-links ${activeTab === 'education' ? 'act-link' : ''}`} onClick={() => openTab('education')}><strong>Education</strong></p>
                      </div>

                      <div className={`tab-conts ${activeTab === 'skills' ? 'act-tab' : ''}`} id="skills">
                          <ul>
                              <li><span>Languages</span><br/>C++, C, Python, Java, SQL, JavaScript, Solidity</li>
                              <li><span>Developer Tools</span><br/> Git, VS Code, Spyder, AWS, Docker</li>
                              <li><span>Frameworks</span><br/>Node JS, Express JS, React JS, jQuery, MongoDB, TensorFlow, Scikit Learn, Keras, PyTorch, Flask</li>
                              <li><span>Architectural Skills</span><br/>Clean Architecture</li>
                              <li><span>Soft Skills</span><br/>Teamwork, Creative Thinking, Verbal Communication</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'experience' ? 'act-tab' : ''}`} id="experience">
                          <ul>
                              <li><span>June 2023 &nbsp;-&nbsp; Present</span><br/>Machine Learning Intern | DPAR India and IIIT Naya Raipur</li>
                              <li><span>April 2023 &nbsp;-&nbsp; May 2024</span><br/>Machine Learning Intern | VsualTHREE60</li>
                              <li><span>Feb. 2024 &nbsp;-&nbsp; Present</span><br/>Machine Learning Research Intern | IIIT Pune</li>
                              <li><span>Aug 2023 &nbsp;-&nbsp; Sep 2023</span><br/>Software Developer Intern(Freelancing) | Occult Gurukul</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'education' ? 'act-tab' : ''}`} id="education">
                          <ul>
                              <li><span>2025</span><br/>BTech in Computer Science (Cgpa=8.3) | Indian Institute of Information Technology, Pune</li>
                              <li><span>2024</span><br/>Honors in Machine Learning | Indian Institute of Information Technology, Pune</li>
                              <li><span>2024</span><br/>Junior College (Percentage=96.3)| Advait Vidyaniketan, Bharuch</li>
                              <li><span>2024</span><br/>Primary & Secondary Education (Percentage=93.17) | St. Paul's School Ankleshwar</li>
                          </ul>
                      </div>
                  </div>
                  <div className="resume">
                      <button onClick={handleDownloadResume} className="btn" aria-label='Download-resume-button'>Download Resume</button>
                  </div>
            </div>
          </div> 

        </div>

        <div className='services-section' id='services'>
          <div className='container'>
            <h1 className="sub-header">Achievements & Activities</h1>

            <div className="services-list">
                <div>
                    <FontAwesomeIcon icon={faCode}/>
                    <h2><strong>Achievements</strong></h2>
                    <ul>
                      <li>Knight in Leetcode with Highest rating of 1975</li>
                      <li>Honors in Machine Learning</li>
                      <li>3 star on codechef with highest rating of 1771</li>
                      <li>Pupil on Codeforces</li>
                      <li>Secured 98.38 percentile in JEE Mins nd qualified JEE Advanced</li>
                    </ul>
                </div>

                <div>
                    <FontAwesomeIcon icon={faMicrochip}/>
                    <h2><strong>Research Work</strong></h2>
                    <ul>
                      <li>Knee Osteoarthritis Diseases Classification using Transfer and Ensemble Learning</li>
                      <li>Coconut Diseases Classification using Transfer Learning driven Deep Learning </li>
                      <li>Technology Stack :Transfer Learning, Ensemble Learning, Augumentation, OpenCV</li>
                    </ul>
                </div>

                <div>
                    <FontAwesomeIcon icon={faPenRuler}/>
                    <h2><strong>Position of Responsibility</strong></h2>
                    <ul>
                      <li>Event Content Lead, Eloquence-IIITP (an inter-college discussion forum)</li>
                      <li>Core Member, Ecletic-Literary Club of IIIT Pune </li>
                      <li>Core Member, QRioCity-Quiz Society of IIIT Pune </li>
                    </ul>
                </div>
            </div>

          </div>
        </div>

        <div className='portfolio-section' id='portfolio'>
          <div className='container'>
            <h1 className='sub-header'>Projects</h1>

            <div className='work-list'>
                

                <div className="work">
                    <img src={workpic1} alt='shop' />
                    <div className="layer">
                        <h3><strong>ShopEase</strong></h3>
                        <p>Product selling platform with ease of payment , transactions and billing management using MERN Stack and Stripe API.</p>
                        <a href="https://github.com/ish15/ShopEase" target="_blank" rel="noreferrer noopener" aria-label='shopease'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='motion' />
                    <div className="layer">
                        <h3><strong>Integrated Motion Analysis</strong></h3>
                        <p>Analyzing small human crowd motion using LRCN technology of Machine Learning , with real time usuage via Flask application.</p>
                        <a href="https://github.com/ish15/Integrated-Motion-Analysis" target="_blank" rel="noreferrer noopener" aria-label='integratedmotion'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>
            </div>

            {showMore && (
            <div className="work-list-2">          
                

            <div className="work">
                    <img src={workpic3} alt='jobs' />
                    <div className="layer">
                       <h3><strong>Jobs Gateway API</strong></h3>
                       <p>Jobs bridging platform for job seekers and providers using MERN Stack.</p>
                       <a href="https://github.com/ish15/Jobs-API" target="_blank" rel="noreferrer noopener" aria-label='jobsapi'> <FontAwesomeIcon icon={faLink}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic4} alt='ish-website' />
                    <div className="layer">
                        <h3><strong>Abstarctive Summarizer</strong></h3>
                        <p>Summarizes any form of given text in an abstractful manner which eases understanding and enhances literary meaning.</p>
                        <a href="https://github.com/ish15/Abstractive-Summarizer" target="_blank" rel="noreferrer noopener" aria-label='summarizer'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>
            </div>
            )}

            <div className="button-container">
              {!showMore && <button className="btn" id="view-more" aria-label='View-more-button' onClick={handleViewMore}>View more</button>}
              {showMore && <button className="btn" id="hide" aria-label='Hide-button' onClick={handleHide}>Hide</button>}
            </div>

          </div>
        </div>

        {/* <div className='review-section' id='reviews'>
          <div className='container'>
            <h1 className='sub-header'>Reviews</h1>

            <div className="services-list">
                <div>
                    
                </div>

                <div>
                    
                </div>

                <div>
                    
                </div>
            </div>
          </div>
        </div> */}

        <div className='contact-section' id='contact'>
          <div className='container'>
            <div className='row'>
                <div className="contact-l">
                    <h1 className="sub-header">Let's Connect</h1>
                    <p><FontAwesomeIcon icon={faEnvelope}/> ishpatel4443@gmail.com</p>
                    <div className="social">
                        <a href="https://www.instagram.com/_ish03/" target="_blank" rel="noreferrer noopener" aria-label='ish-instagram-account'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://x.com/IshPate03380216" target='_blank' rel='noreferrer noopener' aria-label='ish-twitter-account'><FontAwesomeIcon icon={faXTwitter}/></a>
                        <a href="https://www.linkedin.com/in/ish-savaliya-8a37a6233/" target="_blank" rel="noreferrer noopener" aria-label='ish-linkedin-account'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/ish15" target="_blank" rel="noreferrer noopener" aria-label='ish-github-account'><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>

                <div className="contact-r">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Name" required/>
                        <input type="email" name="Email" placeholder="Email" required/>
                        <textarea name="Message" id=""  rows="6" placeholder="Message"></textarea>
                        <button type="submit" className="btn btncv">Submit</button>
                    </form>
                    <span id="submit-msg"></span>
                </div>

            </div>
          </div>

          <div className="copyright">
            <p>©️ 2024  Ish Savaliya. All rights reserved.</p>
          </div>
        </div>

    </div>
  )
}

export default Home