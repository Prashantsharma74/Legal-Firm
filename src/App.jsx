import './App.css'
import img1 from "./assets/download.png"
import img5 from "./assets/download (1).jpeg"
import img6 from "./assets/download (2).jpeg"
import img7 from "./assets/download (3).jpeg"
import img8 from "./assets/download (4).jpeg"
import img9 from "./assets/download.jpeg"
import img10 from "./assets/images1.jpeg"
import img11 from "./assets/images2.jpeg"

function App() {

  return (
    <>
      {/* <!-- Main Section --> */}
      <section class="head">
        <nav>
          <p>Legal Experts Hub</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Practice Areas</li>
            <li>Services</li>
            <li>Resources</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <main>
          <div class="solutions">
            <p class="legal">Custom legal Solutions</p>
            <div>
              <p>Offering comprehensive legal services with a personal touch and unwarming commitment, addresing
                your unique legal needs with empathy, expertise, and dedication.</p>
              <button>CONTACT US</button>
            </div>
          </div>
          <div class="more">
            <a>and many more >></a>
          </div>
          <div class="images">
            <div class="card-container">
              <div class="img-container">
                <img src={img1} />
              </div>
              <div class="content">
                <div class="card-details">
                  <h3>Mr. Prashant Sharma</h3>
                  <h4>(Business Lawyer)</h4>
                </div>
              </div>
            </div>
            <div class="card-container">
              <div class="img-container">
                <img src={img1} />
              </div>
              <div class="content">
                <div class="card-details">
                  <h3>Mr. Prashant Sharma</h3>
                  <h4>(Bankruptcy Lawyer)</h4>
                </div>
              </div>
            </div>
            <div class="card-container">
              <div class="img-container">
                <img src={img1} />
              </div>
              <div class="content">
                <div class="card-details">
                  <h3>Mr. Prashant Sharma</h3>
                  <h4>(Real Estate Lawyer)</h4>
                </div>
              </div>
            </div>
            <div class="card-container">
              <div class="img-container">
                <img src={img1} />
              </div>
              <div class="content">
                <div class="card-details">
                  <h3>Mr. Prashant Sharma</h3>
                  <h4>(Family Lawyer)</h4>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* <!-- Our Areas --> */}
      <section class="areas">
        <h1>Our areas of expertise</h1>
        <div class="see">
          <button>SEE MORE</button>
        </div>
        <div class="details">
          <div class="card-container1">
            <div class="img-container1">
              <img src={img5} />
            </div>
            <div class="content1">
              <div class="card-details1">
                <h3>Corporate Law</h3>
                <p>Our corporate law experts offer tailored guidance for business formotion and transactions.
                </p>
              </div>
            </div>
          </div>
          <div class="card-container1">
            <div class="img-container1">
              <img src={img6} />
            </div>
            <div class="content1">
              <div class="card-details1">
                <h3>Family Law</h3>
                <p>We provide empathetic support in divorce, outstody, adoption, and more, ebsuring your rights
                  are protected.</p>
              </div>
            </div>
          </div>
          <div class="card-container1" style={{ marginTop: "20px" }}>
            <div class="img-container1">
              <img src={img7} />
            </div>
            <div class="content1">
              <div class="card-details1">
                <h3>Criminal Defense</h3>
                <p>Our defense attorneys vigorously defend your rights with strong advocacy and a personalized
                  approach.</p>
              </div>
            </div>
          </div>
          <div class="card-container1" style={{
            marginTop: "20px"
          }}>
            <div class="img-container1">
              <img src={img8} />
            </div>
            <div class="content1">
              <div class="card-details1">
                <h3>Real Estate Law</h3>
                <p>Our real estate team offers precise legal solutions for property transactions and disputes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* <!-- Why Us --> */}
      < section class="us" >
        <img src={img9} alt="choose" />
        <div class="choose">
          <h2>Why choose use</h2>
          <div class="exp">
            <div>
              <p>01</p>
              <h3>Experienced Attorneys</h3>
              <p>Our team conists of highly skilled attomeys with years of experience across various legal fields,
                ensuring that you receive knowledgable and effective representation.</p>
            </div>
            <div>
              <p>02</p>
              <h3>Innovative Solutions</h3>
              <p>Utilizing the latest legal technologies and innovative approaches, we offer creative solutions to
                complex legal challenges, ensuring that you stay ahead.</p>
            </div>
            <div style={{ marginTop: "70px" }}>
              <p>03</p>
              <h3>Proven Track Record</h3>
              <p>With a history of successful case outcomes and satisfied clients, our firm is committed to
                achieving the best possible results for you.</p>
            </div>
            <div style={{ marginTop: "70px" }}>
              <p>04</p>
              <h3>Commitment to Excellence</h3>
              <p>Our dedication to excellence means that we continually striwe to exceed your expectations,
                providing high-quality legal services with integrity end professionalism.</p>
            </div>
          </div>
        </div>
      </section >

      {/* Asked Questions */}

      <section className='asked'>
        <span className='ques'>
          <h1>Frequently </h1>
          <h1>Asked Questions (FAQ)</h1>
        </span>
        <div>
          <ul>
            <li>&#9733;&nbsp; What types of cases do you handle?</li>
            <li>&#9733;&nbsp;  How can I schedule a consultation?</li>
            <li>&#9733;&nbsp;  What sets your law firm apart from others?</li>
            <li>&#9733;&nbsp;  How do you charge for your services?</li>
            <li>&#9733;&nbsp;  How long will my case take to resolve?</li>
          </ul>
          <img src={img10} alt="old aunty" />
        </div>
      </section>

      {/* subscribe */}

      <section className='subs'>
        <h1>Legal Insights & Updates</h1>
        <div class="grid-container">
          <img class="grid-item tall" src={img11} />
          <div class="grid-item short">Box 2</div>
          <div class="grid-item short">Box 3</div>
          <div class="grid-item full-width">Box 4</div>
        </div>
      </section>

    </>
  )
}

export default App
