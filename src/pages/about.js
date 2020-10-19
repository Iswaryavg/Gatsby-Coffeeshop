import React from "react"

import Layout from "../components/layout"
import BackgroundSection from "../components/Backgroundsection"
import Info from "../components/Info"
import 'bootstrap/dist/css/bootstrap.css';


const AboutPage = ({data}) => {
  return (
    <Layout>
<BackgroundSection img={data.img.childImageSharp.fluid} title="About Us" styleClass="about-background"/>
<Info />
    
        </Layout>
  );
};
export const query=graphql`
{
  img:file(relativePath: {eq: "about-background.jpg"}) {

    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
