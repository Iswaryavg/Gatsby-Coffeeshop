import React from 'react'
import Title from "./Title"
import {Link} from 'gatsby'
function Info() {
    return (
      <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
            We are passionate about coffee. We serve THE best coffee in town, we also offer a great range of freshly made crepes, waffles and bagels.
            Coffee House is a great place to meet and catch-up with friends, in a rush? We offer all of products to takeaway.
            Our coffee supplier proudly hand roast 27 single origin coffees, in our Roastery to our own exacting standards. Ensuring we always have the freshest coffee and are never left short on the supply of quality coffee.
“The Proof is in the cup”
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Info
