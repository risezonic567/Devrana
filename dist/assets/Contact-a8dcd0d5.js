import{r as l,j as e}from"./index-fe34a081.js";import{e as m}from"./index-f0f53c8f.js";import{H as u}from"./Helmet-cbd243ef.js";import{m as t}from"./proxy-08db35f3.js";function y(){const[a,i]=l.useState({name:"",email:"",subject:"",message:""}),[o,n]=l.useState(""),s=r=>{i({...a,[r.target.name]:r.target.value})},c=r=>{r.preventDefault(),n("Sending..."),m.send("service_h7w9nis","template_r2vakij",{from_name:a.name,from_email:a.email,subject:a.subject,message:a.message},"041QHTwrVzqMNMOBc").then(()=>{n(" Message sent successfully!"),i({name:"",email:"",subject:"",message:""})},d=>{console.error("EmailJS Error:",d),n(" Failed to send message. Please try again.")})};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx("title",{children:"Contact Devrana | Best Hotel & Event Venue in Muzaffarnagar"}),e.jsx("meta",{name:"keywords",content:""}),e.jsx("link",{rel:"canonical",href:"https://www.devrana.in/contact-us"}),e.jsx("meta",{name:"description",content:"Contact Devrana, a leading hotel in Muzaffarnagar, for room bookings, weddings, events and restaurant inquiries. Call or visit us today."}),e.jsx("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Devrana",
        "image": "https://www.devrana.in/assets/DR%20LOGO-df167871.png",
        "@id": "https://www.devrana.in",
        "url": "https://www.devrana.in/contact-us",
        "telephone": "7060301700",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Milestone 103, NH334, Near Mansurpur, Delhi- Haridwar-Dehradun Highway, Meerut Road",
          "addressLocality": "Muzaffarnagar",
          "postalCode": "251203",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 29.3533648,
          "longitude": 77.7126515
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "07:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://www.facebook.com/DevranaOfficial",
          "https://www.instagram.com/devrana_official",
          "https://www.youtube.com/@DevranaOfficial1",
          "https://www.linkedin.com/company/devrana-restaurant-and-resort",
          "https://www.pinterest.com/devranan01"
        ]
      }
    `})]}),e.jsxs("section",{className:"relative h-[570px] bg-cover bg-center flex items-center justify-center sm:mt-32 mt-[73px] ",style:{backgroundImage:"url('https://i.postimg.cc/4dfb4bbz/contact-us-bannner.jpg')"},children:[e.jsx("div",{className:"absolute inset-0 bg-black/50"}),e.jsxs(t.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},className:"relative z-10 text-center text-white px-6",children:[e.jsx(t.h1,{initial:{scale:.8},animate:{scale:1},transition:{duration:1,ease:"easeOut"},className:"text-4xl lg:text-6xl font-bold font-serif",children:"Get in Touch"}),e.jsx(t.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1},className:"mt-4 text-lg lg:text-xl max-w-2xl mx-auto",children:"Reach out for bookings, queries, or special requests. We’re here to help you."})]})]}),e.jsx("section",{className:"relative bg-Secondary py-20 mb-10 rounded-t-lg px-6 lg:px-20 max-w-7xl mx-auto -mt-12 ",style:{backgroundImage:"url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')"},children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs(t.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},className:"bg-white shadow-lg rounded-2xl p-8",children:[e.jsxs("form",{onSubmit:c,className:"space-y-6",children:[e.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:a.name,onChange:s,className:"w-full border-b border-gray-300 focus:border-primary outline-none py-2",required:!0}),e.jsx("input",{type:"email",name:"email",placeholder:"Your Email",value:a.email,onChange:s,className:"w-full border-b border-gray-300 focus:border-primary outline-none py-2",required:!0}),e.jsx("input",{type:"text",name:"subject",placeholder:"Subject",value:a.subject,onChange:s,className:"w-full border-b border-gray-300 focus:border-primary outline-none py-2",required:!0}),e.jsx("textarea",{name:"message",placeholder:"Message",rows:"4",value:a.message,onChange:s,className:"w-full border-b border-gray-300 focus:border-primary outline-none py-2 resize-none",required:!0}),e.jsx("button",{type:"submit",className:"bg-primary hover:bg-Secondary text-white font-medium px-6 py-3 rounded-lg shadow-lg transition",children:"Submit Now"})]}),o&&e.jsx("p",{className:"mt-4 text-sm text-gray-700 font-medium",children:o})]}),e.jsx(t.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},className:"rounded-2xl overflow-hidden shadow-lg",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.307659617096!2d77.7211761!3d29.331978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c11a09508f443%3A0x174f5d1ae683c80!2sDevrana!5e0!3m2!1sen!2sin!4v1758696466957!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",title:"Devrana Hotel Location"})})]})})]})}export{y as default};
