import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";



const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = `*[_type== "abouts"]`
     client.fetch(query)
      .then((data)=> setAbouts(data))
  }, [])
  
  
  return (
    <div className="app__about">
      <h2 className="head-text">
        I know that <span>Good Design</span><br/>means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale: 1.1}}
          transition={{duration:0.5, type: "tween"}}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className="bold-text" style={{margintop:20}}>{about.title}</h2>
            <h2 className="p-text" style={{margintop:10}}>{about.description}</h2>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, 'about');
