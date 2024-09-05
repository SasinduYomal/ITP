import React from "react";
import customerEngagement from "../../assets/images/customerEngagement.jpg"; // Import the image
import "../../App.css";

const MainImage = () => {
  return (
    <section className="main-image">
      <img src={customerEngagement} alt="Main" /> {/* Use the imported image */}
      <p>What's driving our customer engagement now?</p>
      <p>
        There are important challenges we’re facing that mean we need to consult
        with our customers. The fact is, we’re in a period of big changes in our
        great city. The number of customers we serve will exceed six million
        within a decade. As our population grows and temperatures rise, we’ll
        need to continue to deliver a safe, reliable, sustainable and resilient
        water supply for our customers, as well as provide safe and reliable
        wastewater and stormwater services. We’ll also need to consider
        alternate water supplies, protect the health of our waterways and
        communities from pollution and meet changing customer needs.
      </p>
      <p>
        We are in a period of change, both in terms of a growing demand for our
        services and increasing climatic events, such as droughts and floods. We
        must also adopt and implement new digital technologies and upgrade our
        infrastructure to become future proof.{" "}
      </p>
      <p>
        Additionally, every five years BLUE WAVE Water undergoes a pricing
        review by our regulator, IPART. Customer feedback from Our Water, Our
        Voice has already been included in our new Operating Licence which began
        on 1 July 2024. BLUE WAVE Water is required to undergo intensive,
        two-way customer engagement as part of a scheduled price review by our
        regulator, IPART
      </p>
    </section>
  );
};

export default MainImage;
