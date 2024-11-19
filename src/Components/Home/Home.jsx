import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CodeIcon from '@mui/icons-material/Code';
import StarsIcon from '@mui/icons-material/Stars';
import SchoolIcon from '@mui/icons-material/School';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import InfoIcon from '@mui/icons-material/Info';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
library.add(fas, faProjectDiagram);

//Email
import emailjs from '@emailjs/browser';


// JSON data imports
import experience from './Experience.json';
import education from './Education.json';
import extraActivity from './ExtraActivity.json';
import certificates from './Certificates.json';
import presentation from './Presentations.json'
import Projects from './Projects.json'
import pursuits from './Pursuits.json'
import contact from './Contact.json'

const Home = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [showCertificate, setShowCertificate] = useState(false);
    const [certImage, setCertImage] = useState('');
    const [certName, setCertName] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hanh7lo', 'template_m7pxq7s', form.current, {
                publicKey: 'VgeJ5OaEAW1jXvQjp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    const handleShowCertificate = (cert_image, cert_name) => {
        setShowCertificate(true);
        setCertImage(cert_image)
        setCertName(cert_name)
        // console.log(showCertificate, certImage, certName)
    }

    const handleSectionClick = (section) => {
        console.log("Section clicked:", section);
        setActiveSection(section);
        setIsMenuOpen(!isMenuOpen)

    };

    useEffect(() => {
        console.log("Certificate state updated:", showCertificate, certImage, certName);
    }, [showCertificate, certImage, certName]);



    return (
        <div className="Home">
            <div className="Header">
                <div className="title">Portfolio</div>
                <div className="nav-container">
                    <img
                        src="./menu.png"
                        alt="Hamburger Menu"
                        className="hamburger-icon"
                        onClick={toggleMenu}
                    />

                    <div className={`nav nav2 ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li><a onClick={() => handleSectionClick('about')}>About</a></li>
                            <li><a onClick={() => handleSectionClick('resume')}>Resume</a></li>
                            <li><a onClick={() => handleSectionClick('portfolio')}>Portfolio</a></li>
                            <li><a onClick={() => handleSectionClick('contact')}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="aside-content">
                <div className="profile">
                    <div className="profile-pic">
                        <img src="/banner.png" alt="GOVARDAN" />
                    </div>
                </div>
            </div>

            <div className="main-content">
                {/* ========================== ABOUT SECTION ============================== */}
                {activeSection === 'about' && (
                    <div className="about" id="about">
                        <div className="summary">
                            <h4>
                                <InfoIcon /> Summary
                            </h4>
                            <div className="line"></div>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Highly driven college student with a passion for Python programming, web development, and data science.
                                Proficient in HTML, CSS, JavaScript, and Java, with practical experience in building websites and implementing speech recognition through the Jarvis AI project. Demonstrated ability in data management through roles as a Talent Representative and Implant Trainee. Eager to leverage my programming skills, strong analytical mindset, and enthusiasm for learning in Data Science.
                            </p>
                        </div>

                        <div className="current_pursuits">
                            <h4>
                                <GpsFixedIcon /> Current Pursuits
                            </h4>
                            <div className="line"></div>
                            <Grid container spacing={2} className="pursuits_list">
  {pursuits.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card
        sx={{
          maxWidth: 300,
          margin: '0 auto',
          backgroundColor: '#fff',
          transition: 'transform 0.5s ease-in-out',
          textAlign: 'center',
        }}
        className="pursuits_card"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '200px',
            height: '150px',
            backgroundColor: '#fff',
            padding: '10px',
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        <CardContent sx={{ paddingBottom: '8px' }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontFamily="Varela Round"
            fontWeight={600}
            fontSize={'0.9rem'}
            textAlign="center"
          >
            {item.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


                        </div>
                    </div>
                )}

                {/* ========================== RESUME SECTION ============================== */}
                {activeSection === 'resume' && (
                    <div className="resume" id="resume">
                        {/* Experience Section */}
                        <div className="experience">
                            <h4>
                                <StarsIcon /> Experience
                            </h4>
                            {experience && experience.length > 0 ? (
                                <div className="experience-list">
                                    {experience.map((item, index) => (
                                        <div key={index} className="experience-card">
                                            <div className="card-header">
                                                <h6 className="company-title">{item.company_title}</h6>
                                                <span className="duration">{item.exp_duration}</span>
                                            </div>
                                            <ul className="description-list">
                                                {item.exp_description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No experience data available.</p>
                            )}
                        </div>

                        {/* Education Section */}
                        <div className="education">
                            <h4>
                                <SchoolIcon /> Education
                            </h4>
                            {education && education.length > 0 ? (
                                <div className="education-list">
                                    {education.map((item, index) => (
                                        <div key={index} className="edu-card">
                                            <div className="edu-header">
                                                <h6 className="institution-name">{item.institution}</h6>
                                            </div>
                                            <h6 className="qualification">{item.qualification}</h6>
                                            <p className="description">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No education data available.</p>
                            )}
                        </div>

                        {/* Extra Activity Section */}
                        <div className="extra_activities">
                            <h4>
                                <InsertInvitationIcon /> Extra Activities
                            </h4>
                            {extraActivity && extraActivity.length > 0 ? (
                                <Grid container spacing={2} className="extra_activity_list">
                                    {extraActivity.map((item, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Card
                                                sx={{
                                                    maxWidth: 350,
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                }}
                                                className="extra_activity_card"
                                            >
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="250"
                                                        width="280"
                                                        image={item.activity_illustration}
                                                        alt="activity illustration"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div" fontFamily="Varela Round" fontWeight={800}>
                                                            {item.activity_title}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: '#555' }} fontFamily="Varela Round" fontSize="1rem">
                                                            {item.activity_description}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                <p>No extra activities found.</p>
                            )}
                        </div>

                        {/* Certificates Section */}
                        <div className="certificates">
                            <h4>
                                <EmojiEventsIcon /> Certifications
                            </h4>
                            {certificates && certificates.length > 0 ? (
                                <Grid container spacing={2} className="certificates_list">
                                    {certificates.map((item, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Card sx={{ maxWidth: 320 }} className="certificates_card">
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="250"
                                                        width="100%"
                                                        image={item.certificate_image}
                                                        alt="certification illustration"
                                                        onClick={() => {
                                                            handleShowCertificate(item.certificate_image, item.certificate_title)
                                                        }}
                                                    />
                                                    {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontFamily="Varela Round" fontWeight={800}>
                              {item.cert_title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#555' }} fontFamily="Varela Round" fontSize="1rem">
                              {item.cert_description}
                            </Typography>
                          </CardContent> */}
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                <p>No certifications found.</p>
                            )}

                            {showCertificate && (


                                <div className="show_certificate">
                                    <div className="showing_cert_image">
                                        <Card sx={{ maxWidth: 1000 }} className="certificates_card">
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="100%"
                                                    width="100%"
                                                    image={certImage}
                                                    alt="certification illustration"
                                                />
                                                <Typography gutterBottom variant="h5" component="div" fontFamily="Varela Round" fontWeight={800} sx={{
                                                    display: "block",
                                                    textAlign: "center",
                                                    marginTop: "10px"
                                                }}>
                                                    {certName}
                                                </Typography>
                                            </CardActionArea>
                                            <div className="close_cert_btn">
                                                <HighlightOffIcon onClick={() => setShowCertificate(false)} />
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ========================== PORTFOLIO SECTION ============================== */}
                {activeSection === 'portfolio' && (
                    <div className="portfolio" id="portfolio">
                        <div className="presentations">

                            {/* ========================== PRESENTATION ============================== */}

                            <h4><SlideshowIcon /> Presentations</h4>
                        </div>
                        {presentation && presentation.length > 0 ? (
                            <Grid container spacing={2} className="presentation_list">
                                {presentation.map((item, index) => (
                                    <Grid item xs={6} sm={6} md={4} key={index}>
                                        <Card sx={{ maxWidth: 320 }} className="presentation_card">
                                            <CardActionArea
                                                onClick={() => window.open(item.presentation_src, "_blank")}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    height="auto"
                                                    image={item.presentation_image}
                                                    alt={item.presentation_title}
                                                    sx={{ objectFit: 'contain', backgroundColor: '#f0f0f0' }}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                        fontFamily="Varela Round"
                                                        fontWeight={800}
                                                        textAlign="center"
                                                    >
                                                        {item.presentation_title}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                        ) : (
                            <p>No Presentations found.</p>
                        )}

                        {/* ========================== PROJECTS  ============================== */}


                        <div className="projects">
                            <h4><SlideshowIcon /> Projects</h4>
                        </div>
                        {Projects && Projects.length > 0 ? (
                            <Grid container spacing={2} className="project_list">
                                {Projects.map((item, index) => (
                                    <Grid item xs={6} sm={6} md={4} key={index}>
                                        <Card sx={{ maxWidth: 320 }} className="project_card">
                                            <CardMedia
                                                component="img"
                                                height="auto"
                                                image={item.project_thumbnail}
                                                alt={item.project_title}
                                                sx={{ objectFit: 'contain', backgroundColor: '#f0f0f0' }}
                                            />
                                            <p>{item.project_description}</p>

                                            <div className="project_links">
                                                <div className="code">
                                                    <a href={item.Project_code} target='_blank' rel="noopener noreferrer">
                                                        <p><CodeIcon />&nbsp; Code</p>
                                                    </a>
                                                </div>
                                                <div className="demo">
                                                    <a href={item.project_demo} target='_blank' rel="noopener noreferrer">
                                                        <p><SlideshowIcon />&nbsp; Live</p>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="tech_stacks">
                                                <ul>
                                                    {item.project_stack.map((stack, stackIndex) => (
                                                        <li key={stackIndex}>{stack}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            <p>No Presentations found.</p>
                        )}




                    </div>
                )}

                {/* ========================== CONTACT SECTION ============================== */}
                {activeSection === 'contact' && (
                    <div className="contact" id="contact" >

                        {/* ========================== LOCATION ============================== */}

                        <div className="location">
                            <h4><MyLocationIcon /> Location</h4>
                        </div>
                        <div className="location_frame">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.12104575377!2d78.53313056864492!3d10.815805557264913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701879921891!5m2!1sen!2sin"
                                style={{
                                    "width": "600",
                                    "height": "450",
                                    "border": "0",
                                    "loading": "lazy",
                                    "referrerpolicy": "no-referrer-when-downgrade"
                                }} allowFullScreen className='loc_map'></iframe>
                        </div>

                        <div className="location">
                            <h4><PermContactCalendarIcon /> Contact</h4>
                        </div>


                        <div className="contact_section">

                            <div className="contact_form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="text" name="user_name" placeholder="Your Name" />
                                    <input type="email" name="user_email" placeholder="Your Email" />
                                    <textarea name="message" placeholder="Your Message"></textarea>
                                    {/* <input type="submit" value="Send" /> */}
                                    <Button
                                        onClick={handleClick}
                                        type="submit"
                                        variant="contained"
                                        color="#fff"
                                        endIcon={<SendIcon />}
                                        sx={{ fontSize: '16px', padding: '10px 20px', textTransform: 'none' }}
                                    >
                                        Send Message
                                    </Button>

                                </form>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert
                                        onClose={handleClose}
                                        severity="success"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        Message Sent Successfully
                                    </Alert>
                                </Snackbar>

                                <p className='connect_with'>Connect with me on</p>

                                <div className="social_media">
                                    {
                                        contact.map((item, index) => (
                                            <a href={item.link_src} key={index} target='_blank' rel="noopener noreferrer"><img src={item.icon_src} alt={item.icon_name}  
                                            width="30px" height="30px" 
                                            /> </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
