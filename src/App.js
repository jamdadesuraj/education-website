import { Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navabr/Navbar";
import About from "./components/about/About";
import Completion from "./components/complation/Complation";
import AllCourses from "./components/all-courses/AllCourses";
import Courses from "./components/course-list/CourseList";
import Testimonial from "./components/testimonial/Testimonial";
import Blog from "./components/blog/Blog";
import Pricing from "./components/pricing/Pricing";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import ResetPass from "./components/resetPass/ResetPass";
import Scroll from "./components/scroll/Scroll";
const App = () => {
  return (
    <>
      <Route exact path="/">
        <Navbar />
        <About />
        <Completion />
        <AllCourses />
        <Courses />
        <Testimonial />
        <Blog />
        <Pricing />
        <NewsLetter />
        <Footer />
        <Scroll />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/reset-pass">
        <ResetPass />
      </Route>
      <Route exact path="/about">
        <Navbar />
        <About />
        <Footer />
      </Route>
      <Route exact path="/all-courses">
        <Navbar />
        <AllCourses />
        <Footer />
      </Route>
      <Route exact path="/courses">
        <Navbar />
        <Courses />
        <Footer />
      </Route>
      <Route exact path="/team">
        <Navbar />
        <Team />
        <Footer />
      </Route>
      <Route exact path="/pricing">
        <Navbar />
        <Pricing />
        <Footer />
      </Route>
      <Route exact path="/blog">
        <Navbar />
        <Blog />
        <Footer />
      </Route>
      <Route exact path="/contact">
        <Navbar />
        <Contact />
        <Footer />
      </Route>
      <Route exact path="/testimonial">
        <Navbar />
        <Testimonial />
        <Footer />
      </Route>
    </>
  );
};

export default App;
