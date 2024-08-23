import React from "react";
import "../../App.css";

const Description = () => {
  return (
    <section className="description">
      <p>
        The three major factors that require us to change include growing
        cities, climate change, and customer expectations.
      </p>
      <div className="factors">
        <div className="factor">
        <h3>Growing cities</h3>
          <p>Our cities and population are growing and this has a significant impact on the service we deliver to our customers. We need to be innovative and find better, simpler ways of doing things.</p>
                <p>Our water and wastewater systems are operating at their sustainable limits and our current demand for water exceeds our forecast sustainable supply.</p>
          <p>
            Our water and wastewater systems are operating at their sustainable
            limits and our current demand for water exceeds our forecast
            sustainable supply.
          </p>
        </div>
        <div className="factor">
        <h3>Climate change</h3>
          <p>Our climate is changing, and we need to respond to make sure our services and assets are resilient.</p>
                <p>Future climate risks and extreme events mean we cannot meet our water needs by only using traditional water supply approaches.</p>
                <p>We need to make our city cooler and greener, and maintain healthy waterways and ecosystems.</p>
        </div>
        <div className="factor">
        <h3>Customer expectations</h3>
          <p>Our customers’ expectations are changing every day – our customers expect and deserve more from us in terms of quality of service, reliability, and pricing. We need to be able to understand what customers want and expect.</p>
                <p>We have to use water more productively and efficiently and meet our water needs at a reasonable cost.</p>
            </div>
        </div>
    </section>
  );
};

export default Description;
