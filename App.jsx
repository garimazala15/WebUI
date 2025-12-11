import React from "react";
import bg from "./assets/homebanner.webp";
import logo from "./assets/logo.webp";
import img1 from './assets/Amrai-village-stay.jpg'
import img2 from './assets/Aryan-camp-homestay.jpg'
import img3 from './assets/Front.jpeg'
import img4 from './assets/homeStay.jpg'
import img5 from './assets/homeStay2.jpg'
import img6 from './assets/homeStay3.jpg'
import footerbg from './assets/footer-bg.webp'
import footerLogo from './assets/footer-logo.webp'


const App = () => {
  return (
    <div>
      {/*setting background image of navbar */}
    <div
      className="navbar px-6 shadow-md text-white bg-cover bg-center h-[450px] items-start"
      style={{ backgroundImage: `url(${bg})` }}>

        {/*logo */}
      <div className="flex items-center justify-between w-full px-4 py-2">
        <img src={logo} alt="logo" className="h-16 w-20 object-contain"/>

          {/* navbar */}
        <div className="flex gap-3 text-white">
          <a className="btn btn-ghost text-sm">Explore</a>
          <a className="btn btn-ghost text-sm">Experiences</a>
          <a className="btn btn-ghost text-sm">Plan your Trip</a>
          <a className="btn btn-ghost text-sm">Blogs</a>
          <a className="btn btn-ghost text-sm">Search</a>
          <a className="btn btn-ghost text-sm">Media Room</a>
          <a className="btn btn-ghost text-sm">Book your Gramstay</a>
        </div>

      </div>
    </div>
    {/* cards */}

    <div className="flex justify-between gap-6 px-6 py-10">

{/* first card */}
    <div className="card bg-base-100 w-96 shadow-sm">
      {/*carousel effect in images */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          </div>
           <div id="slide2" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={img5} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
              </div>
              </div>

  <div className="card-body">
    <h5 className="text-sm font-light text-grey-500">Chhindwara</h5>
    <p className="text-base font-semibold text-zinc-900 mb-2">Ananwala Homestay</p>
    <div className="flex gap-1 text-sm text-grey-600 flex-wrap">
      <span>Lounge Area ✓</span>
      <span>Food available ✓</span>
      <span>Rooms:01</span>
      <span>Beds:01</span>
    </div>
    <p className="font-semibold text-lg mt-3">
      INR 3000 <span className="text-sm text-grey-500">/per night</span>
    </p>
  </div>
</div>

{/*second card */}
<div className="card bg-base-100 w-96 shadow-sm">
 
<div className="carousel w-full">
  <div id="slide2-1" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2-3" className="btn btn-circle">❮</a>
      <a href="#slide2-2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2-2" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2-1" className="btn btn-circle">❮</a>
      <a href="#slide2-3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2-3" className="carousel-item relative w-full">
    <img
      src={img5}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2-2" className="btn btn-circle">❮</a>
      <a href="#slide2-1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

  <div className="card-body">
    <h5 className="text-sm font-light text-grey-500">Seoni</h5>
    <p className="text-base font-semibold text-zinc-900 mb-2">Adarsh Homestay</p>
    <div className="flex gap-1 text-sm text-grey-600 flex-wrap">
      <span>Lounge Area ✓</span>
      <span>Food available ✓</span>
      <span>Rooms:01</span>
      <span>Beds:01</span>
    </div>
    <p className="font-semibold text-lg mt-3">
      INR 2000 <span className="text-sm text-grey-500">/per night</span>
    </p>
  </div>
</div>

{/*third card */}
<div className="card bg-base-100 w-96 shadow-sm">


<div className="carousel w-full">
  <div id="slide3-1" className="carousel-item relative w-full">
    <img
      src={img1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3-3" className="btn btn-circle">❮</a>
      <a href="#slide3-2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3-2" className="carousel-item relative w-full">
    <img
      src={img6}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3-1" className="btn btn-circle">❮</a>
      <a href="#slide3-3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3-3" className="carousel-item relative w-full">
    <img
      src={img5}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3-2" className="btn btn-circle">❮</a>
      <a href="#slide3-1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

  <div className="card-body">
    <h5 className="text-sm font-light text-grey-500">Jabalpur</h5>
    <p className="text-base font-semibold text-zinc-900 mb-2">Amrai village Stay</p>
    <div className="flex gap-1 text-sm text-grey-600 flex-wrap">
      <span>Lounge Area ✓</span>
      <span>Food available ✓</span>
      <span>Rooms:02</span>
      <span>Beds:06</span>
    </div>
    <p className="font-semibold text-lg mt-3">
      INR 2350 <span className="text-sm text-grey-500">/per night</span>
    </p>
  </div>
</div>
</div>

{/*footer */}

<footer className="footer sm:footer-horizontal bg-base-200 text-base-content  relative h-[700px]"
style={{backgroundImage:`url(${footerbg})`,
backgroundSize:'cover',
backgroundPosition:'center',}}>
  <aside className=" absolute top-0 left-0 m-0 p-0">
    <img src={footerLogo} className="h-40 w-40 object-contain" />
  </aside>
  <div className="flex flex-wrap gap-10 pt-20 ml-44">
  <nav className="flex flex-col gap-1 text-sm text-white">
   <h3 className="font-bold text-lg mb-3 ">Quick Links</h3>
          <a className="link link-hover font-light">Explore Destinations</a>
          <a className="link link-hover font-light">Adventure</a>
          <a className="link link-hover font-light">Culture</a>
          <a className="link link-hover font-light">Festivals and Events</a>
          <a className="link link-hover font-light">Travel Agents and Tour Guides</a>
          <a className="link link-hover font-light">Gaatha-Crafts of Madhya Pradesh</a>
          <a className="link link-hover font-light">Tourism.mp.gov.in</a>
          <a className="link link-hover font-light">Mp Wellness Booklet</a>
          <a className="link link-hover font-light">Discovering Madhya Pradesh</a>
          <a className="link link-hover font-light">Newsletter: Offbeat MP - Oct 2024</a>
          <a className="link link-hover font-light">Newsletter: Offbeat MP - Oct 2025</a>
          <a className="link link-hover font-light">Tourism Policy 2025</a>
          <a className="link link-hover font-light">Sitemap</a>
  </nav>
  <nav className="pt-10 flex flex-col gap-1 text-sm text-white">
          <a className="link link-hover font-light">Accommodations</a>
          <a className="link link-hover font-light">Itinerary</a>
          <a className="link link-hover font-light">Film Tourism</a>
          <a className="link link-hover font-light">MP Film Tourism Policy 2025</a>
          <a className="link link-hover font-light">Rules & Regulation Booklet 2025</a>
          <a className="link link-hover font-light">MP Film Tourism Brochure</a>
          <a className="link link-hover font-light">MP Forest Details</a>
          <a className="link link-hover font-light">MP Ecotourism Board</a>
          <a className="link link-hover font-light">Blog</a>
          <a className="link link-hover font-light">Tourist Map</a>
          <a className="link link-hover font-light">Kala</a>
          <a className="link link-hover font-light">Panchang (Hindi) 2025-26</a>
          <a className="link link-hover font-light">Panchang (English) 2025-26</a>
  </nav>
  <nav className="pt-5 flex flex-col gap-1 text-sm text-white text-sm space-y-1">
     <h3 className="font-bold text-lg mb-3">Help & Support</h3>
          <p className="font-light">1800-233-7777</p>
          <p className="font-light"> Mon–Fri: 10 AM to 6 PM</p>
          <p className="font-light">Sat & Holidays: 10 AM to 2 PM</p>
          <p className="font-light">Sunday: Holiday</p>
          <p className="font-light">Mail us: suggestions.mptb@mp.gov.in</p>
          <p className="font-light">
            Incredible India InfoLine:<br />
            1800-11-1363 (24×7)
          </p>
  </nav>

      <div>
        <h3 className="font-bold text-lg mb-3 text-white">Address</h3>
        <div className="text-sm space-y-1 text-white font-light">
          <p>6th Floor, Lily Trade Wing</p>
          <p>(Behind D Mart),</p>
          <p>Jehangirabad, Bhopal</p>
          <p>Madhya Pradesh 462008</p>
        </div>
      </div>

  <div className=" mt-10 pt-3 text-center text-sm text-white ml-25 font-light">
    © 2020 Madhya Pradesh Tourism. All Rights Reserved. | Disclaimer | Privacy Policy
  </div>

  </div>
      
</footer>

    </div>
  );
};

export default App;
