import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import services1 from "../images/services-1.jpg";
import services2 from "../images/services-2.jpg";
import services3 from "../images/services-3.jpg";
import services11 from "../images/s4.jpg";
import services22 from "../images/s5.jpg";
import services33 from "../images/s6.jpg";
import services111 from "../images/s7.jpg";
import services222 from "../images/s8.jpg";
import services333 from "../images/s9.jpg";
import "./main.css";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="container services my-5">
        <h2 className="display-5 title text-center py-4">Services</h2>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
          style={{ marginBottom: "16px" }}
        >
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services1}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Smart training</h5>
                <p className="card-text">
                  Personalized advice on your routine.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services2}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Dumbbell zone</h5>
                <p className="card-text">Space with lots of dumbbells.</p>
            
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services3}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Cardio zone</h5>
                <p className="card-text">
                  Space with different cardio machines.
                </p>
             
              </div>
            </div>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
          style={{ marginBottom: "16px" }}
        >
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services11}
                  className="card-img-top"
                  alt="Card Services"
                  height={250}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Smart training</h5>
                <p className="card-text">
                  Personalized advice on your routine.
                </p>
              
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services22}
                  className="card-img-top"
                  alt="Card Services"
                  height={250}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Dumbbell zone</h5>
                <p className="card-text">Space with lots of dumbbells.</p>
             
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services33}
                  className="card-img-top"
                  alt="Card Services"
                  height={250}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Cardio zone</h5>
                <p className="card-text">
                  Space with different cardio machines.
                </p>
             
              </div>
            </div>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
          style={{ marginBottom: "16px" }}
        >
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services111}
                  height={250}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Smart training</h5>
                <p className="card-text">
                  Personalized advice on your routine.
                </p>
             
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services222}
                  className="card-img-top"
                  height={250}
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Dumbbell zone</h5>
                <p className="card-text">Space with lots of dumbbells.</p>
             
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services333}
                  height={250}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">Cardio zone</h5>
                <p className="card-text">
                  Space with different cardio machines.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
