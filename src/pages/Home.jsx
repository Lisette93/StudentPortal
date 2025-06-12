import '../scss/Home.scss';
import { Link } from "react-router-dom"; // Import Link instead of using <a>

export default function Home() {
  // Array of cards shown on the homepage (each with title, text, image and link)
  const cards = [
    {
      title: "Browse Courses",
      text: "Explore all available courses in our system.",
      img: `${import.meta.env.BASE_URL}images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg`,
      link: "/courses",
    },
    {
      title: "Latest News",
      text: "Catch up on recent updates and announcements.",
      img: `${import.meta.env.BASE_URL}images/markus-winkler-k_Am9hKISLM-unsplash.jpg`,
      link: "/news",
    },
    {
      title: "Register Today",
      text: "Sign up now for an upcoming course.",
      img: `${import.meta.env.BASE_URL}images/burst-kUqqaRjJuw0-unsplash.jpg`,
      link: "/register",
    },
    {
      title: "Contact Us",
      text: "Have questions or feedback? Reach out to our support team.",
      img: `${import.meta.env.BASE_URL}images/miles-burke-idhx-MOCDSk-unsplash.jpg`,
      link: "/contact",  
    },
  ];

  return (
    <div className="homepage">
      {/* Hero section with background image and welcome message */}
      <header className="hero-header">
        <img
          src={`${import.meta.env.BASE_URL}images/photo-1543269865-cbf427effbad.avif`}
          alt="Student studying"
        />
        <div className="hero-text">
          <h1>Welcome to the Student Portal</h1>
          <p>Your place to browse courses, register, and stay updated.</p>
        </div>
      </header>

      {/* Main content wrapper */}
      <div className="home-wrapper py-5">
        <div className="container content-box p-4 shadow-lg rounded-xl">
          <div className="row">
            {/* Left column with cards */}
            <div className="col-md-8 mt-3">
              <div className="row">
                {cards.map((card, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="card-custom card h-100 text-center">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="card-img-top card-img-small"
                      />
                      <div className="card-body d-flex flex-column">
                        <h4 className="card-title">{card.title}</h4>
                        <p className="card-text">{card.text}</p>
                        <Link to={card.link} className="btn btn-primary mt-auto">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: Tips & Info section */}
            <div className="col-md-4">
              <h4 className="section-title">What's New</h4>
              <div className="info-box bg-light p-3 rounded shadow-sm d-flex flex-column gap-3">

                <div className="card p-3 border-0 shadow-sm">
                  <h5>☕ Study Café Thursday</h5>
                  <p>Free snacks and cozy group study from 16.00 in the library lounge.</p>
                </div>

                <div className="card p-3 border-0 shadow-sm">
                  <h5>🎓 Q&A with Teachers</h5>
                  <p>Join the live Zoom session this Friday at 15.00 – bring your questions!</p>
                </div>

                <div className="card p-3 border-0 shadow-sm">
                  <h5>📅 Plan Your Semester</h5>
                  <p>Use our planner template to structure your study weeks effectively.</p>
                </div>

                <div className="card p-3 border-0 shadow-sm">
                  <h5>📣 Student Survey</h5>
                  <p>Take our 2-minute survey and help us improve your student experience!</p>
                </div>

              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
