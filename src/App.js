import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Second_pic from "./Assets/Images/Second_pic.png";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <section className=" bg-blueGradient mt-44">
        <div className="w-10/12 mx-auto flex items-center justify-around">
          <img
            className="object-cover object-center md:block hidden"
            src={Second_pic}
            alt="Second_pic"
          />
          <div className="md:w-2/5 flex flex-col gap-y-6 items-center md:items-start py-28">
            <h1 className="text-4xl  font-bold font-Poppins text-[#0E2368]">
              About Us
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-full">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* Slide Section */}
      <section>
        <div className="container mx-auto py-28">
          <h1 className="text-5xl font-bold mb-4 md:text-left text-center text-[#0E2368]">Latest Articles</h1>

          <Slider />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
