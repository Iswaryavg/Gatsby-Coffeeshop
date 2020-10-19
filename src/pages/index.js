import React from "react"

import Layout from "../components/layout"
import BackgroundSection from "../components/Backgroundsection"
import Info from "../components/Info"
import Menu from "../components/Menu"
import Products from "../components/Products"
import 'bootstrap/dist/css/bootstrap.css';


const IndexPage = ({data}) => {
  return (
    <Layout>
<BackgroundSection img={data.img.childImageSharp.fluid} title="regular coffee" styleClass="default-background"/>
<Info />
    <Menu data={data.menu} />
    <Products />
        </Layout>
  );
};
export const query=graphql`
{
  img:file(relativePath: {eq: "background2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  menu:allContentfulCoffeeItem {
    edges {
      node {
        id
        price
        description {
          description
        }
        title
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
      
        }
      }
    }
  }
}
`
export default IndexPage
