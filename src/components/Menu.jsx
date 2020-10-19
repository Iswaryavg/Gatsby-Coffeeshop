import React from 'react'
import Title from "../components/Title"
import Img from "gatsby-image"

    
const getCategories = items => {
    let tempItems = items.map(item => {
      return item.node.category;
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ["all", ...categories];
    return categories;
  };

function Menu(props) {


    const[citems,setcItems]=React.useState({ items:props.data.edges,coffeeItems:props.data.edges, categories: getCategories(props.data.edges)})
    const handleItems = category => {
      let result=citems.items
      let tempItems = [...result];
      console.log(tempItems)
      if (category === "all") {
        setcItems((prevvalue) => {
          return { ...prevvalue,coffeeItems: tempItems };
        });
      } else {
        let items = tempItems.filter(({ node }) => node.category === category);
        setcItems((prevvalue) => {
          return {...prevvalue, coffeeItems: items };
        });
      }
    };
    if (citems.items.length > 0) {  
        return (
          <section className="menu py-5">
            <div className="container">
              <Title title="our menu" />
              <div className="row mb-5">
                <div className="col-10  mx-auto text-center">
                  {citems.categories.map((category, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className="btn btn-yellow text-capitalize m-3"
                        onClick={() => {handleItems(category);}}>
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                {citems
                .coffeeItems.map(({ node }) => {
                  return (
                    <div
                      key={node.id}
                      className="col-11 col-md-6 my-2 d-flex mx-auto"
                    >
                      <div>
                        <Img fixed={node.image.fixed} />
                      </div>
  
                      <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-0">{node.title}</h6>
                          <h6 className="text-yellow mb-0">${node.price}</h6>
                        </div>
  
                        <p className="text-muted">
                          <small>{node.description.description}</small>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      } else {
        return (
          <section className="menu py-5">
            <div className="container">
              <Title title="best of our menu" />
              <div className="row">
                <div className="col-10 col-6 mx-auto text-center text-capitalize">
                  <h1>there are no items to display</h1>
                </div>
              </div>
            </div>
          </section>
        );
      }
    }
export default Menu
