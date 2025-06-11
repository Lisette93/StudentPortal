import '../scss/Home.scss';



export default function Home() {
  
  const cards = [
    {
      title: "Browse Courses",
      text: "Explore all available courses in our system.",
      img: "/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
      link: "/courses",
    },
    {
      title: "Latest News",
      text: "Catch up on recent updates and announcements.",
      img: "/images/markus-winkler-k_Am9hKISLM-unsplash.jpg",
      link: "/news",
    },
    {
      title: "Register Today",
      text: "Sign up now for an upcoming course.",
      img: "public/images/burst-kUqqaRjJuw0-unsplash.jpg",
      link: "/register",
    },
    {
  title: "Contact Us",
  text: "Have questions or feedback? Reach out to our support team.",
  img: "/images/miles-burke-idhx-MOCDSk-unsplash.jpg",
  link: "/contact",           // Eller mailto:studentportal@example.com
},
  ];

  return (
    <div className="homepage">
      {/* HERO UTANFÖR container */}
      <header className="hero-header">
        <img
          src="/images/photo-1543269865-cbf427effbad.avif"
          alt="Student studying"
        />
        <div className="hero-text">
          <h1>Welcome to the Student Portal</h1>
          <p>Your place to browse courses, register, and stay updated.</p>
        </div>
      </header>


      {/* HELA INNEHÅLLET MED BLÅ BAKGRUND */}
      <div className="home-wrapper py-5">
        <div className="container content-box p-4 shadow-lg rounded-xl">
          <div className="row">
            {/* Vänsterkolumn med kort */}
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
                        <a href={card.link} className="btn btn-primary mt-auto">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             
            {/* Högerkolumn */}
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
