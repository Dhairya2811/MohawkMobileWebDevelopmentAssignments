import React from 'react';
import styles from './About.module.css';

const About = () => (
  <div className={styles.About}>
    <span className={styles.heading}>About Component</span><br/><br/>

    <span className={styles.subHeading}>Pet popularity</span>
    <p>In China, spending on domestic animals has grown from an estimated $3.12 billion in 2010 to $25 billion in 2018. The Chinese people own 51 million dogs and 41 million cats, with pet owners often preferring to source pet food internationally. There are a total of 755 million pets, increased from 389 million in 2013.</p><br/>

<p>According to a survey promoted by Italian family associations in 2009, it is estimated that there are approximately 45 million pets in Italy. This includes 7 million dogs, 7.5 million cats, 16 million fish, 12 million birds, and 10 million snakes.</p><br/>

<p>A 2007 survey by the University of Bristol found that 26% of UK households owned cats and 31% owned dogs, estimating total domestic populations of approximately 10.3 million cats and 10.5 million dogs in 2006. The survey also found that 47.2% of households with a cat had at least one person educated to degree level, compared with 38.4% of homes with dogs.</p><br/>

<p>Sixty-eight percent of U.S. households, or about 85 million families, own a pet, according to the 2017-2018 National Pet Owners Survey conducted by the American Pet Products Association. This is up from 56 percent of U.S. households in 1988, the first year the survey was conducted. There are approximately 86.4 million pet cats and approximately 78.2 million pet dogs in the United States, and a United States 2007–2008 survey showed that dog-owning households outnumbered those owning cats, but that the total number of pet cats was higher than that of dogs. The same was true for 2011. In 2013, pets outnumbered children four to one in the United States.</p>
  </div>
);

export default About;
