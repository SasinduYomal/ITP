import React from "react";
import "../../App.css";
import drinkingWater from "../../assets/images/drinkingWater.jpeg";
import drinking from "../../assets/images/drinking.jpg";
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

function DrinkingWater() {
  return (
    <div className="blog-container">
      <Navbar/>
      <header className="header">
        <img src={drinkingWater} alt="Main" />
      </header>

      <h1>Why Drink Bottled Water</h1>

      <section>
        <h2>Is bottled water cleaner and better for you than tap?</h2>
        <p>
          Despite the recent pushback on single-use plastic, bottled water
          continues to be big business. And the debate over whether mineral or
          spring water is better than tap has raged for some time, with health
          and environmental concerns being the two biggest battlegrounds.
        </p>
        <p>
          For BBC Radio 4’s Sliced Bread, host Greg Foot was asked by
          11-year-old listener Isla whether bottled waters like Evian and Buxton
          are cleaner, healthier, cheaper and greener than the stuff that comes
          from the tap.
        </p>
      </section>

      <section>
        <h2>1. Tap and bottled water isn't just H2O</h2>
        <p>
          Tap water comes from surface water (e.g., rivers, lakes, streams and
          reservoirs) or ground water taken up from wells or bore holes.
          Meanwhile, both mineral water and spring water come from natural
          underground sources.
        </p>
      </section>

      <section>
        <h2>2. Tap water undergoes more treatment than bottled water</h2>
        <p>
          Basic water treatment for tap water, according to a lecturer in water
          chemistry at the Cranfield Water Institute Dr Emma Gosling, "removes
          the particles, the organics (e.g., decaying vegetation) and
          microorganisms," while advanced water treatment "removes all those
          things, but it will also remove micro pollutants such as pesticides."
        </p>
      </section>

      <img src={drinking} alt="Main" class="mid-image" />

      <section>
        <h2>3. However, bottled water can be the purest option</h2>
        <p>
          In one set of tests, bottled water had less bacteria in it than tap
          water in three out of four samples. But it’s worth pointing out that
          both tap and bottled water have to adhere to strict safety standards
          so both are safe to drink.
        </p>
      </section>

      <section>
        <h2>
          4. When it comes to health benefits, you are what you eat, not what
          you drink
        </h2>
        <p>
          A World Health Organization conference in 2005 suggested that the
          presence of higher levels of some minerals – such as magnesium and
          calcium – in mineral water could give health benefits. However,
          different bottled waters have different types and amounts of minerals
          in them, and very hard tap water from groundwater sources might have
          as much mineral content as some bottled waters.
        </p>
      </section>

      <section>
        <h2>5. Water bottles are highly recyclable… if they are recycled</h2>
        <p>
          The "taste of water" might seem like a paradoxical notion, but it does
          vary between bottled water brands and between hard and soft tap water.
          "The description of water is all about the natural minerals within the
          water," explains water sommelier Milin Patel. "Some natural waters
          from volcanic regions may have a high level of silica, which gives it
          a beautiful, silky velvet, smooth mouthfeel, which is very
          distinctive. Waters with high levels of calcium, magnesium can taste
          creamy."
        </p>
        <p>
          Tasting some of these nuances would have you spending money like,
          well, water. Some examples of "unique experience waters" include: £5 a
          litre for water from a 90-million-year-old Czech glacier, £24 a litre
          for water from clouds above the Canary Islands and a gulp-inducing £50
          a litre for water from an 8,000-year-old spring in Slovenia
        </p>
      </section>
      <section>
        <h2>6. Water bottles are highly recyclable… if they are recycled</h2>
        <p>
          Then there's the question of environmental sustainability. Water
          bottles are made from the plastic polyethylene terephthalate, or PET,
          described as "highly recyclable and very circular material" by Adam
          Herriott from a climate change charity WRAP (the Waste and Resources
          Action Programme). Every council in the country has provision to
          collect this lightweight plastic for recycling into new products, and
          some manufacturers, like Buxton, say that their bottles are already
          made from 100% recycled material.
        </p>
        <p>
          However, the "circularity" of PET is frustrated by a low recycling
          rate of somewhere between 22% and 28%, with the national recycling
          campaign Recycle Now estimating that only 20 million of the 36 million
          plastic bottles used every day are recycled. Like a lot of plastic
          packaging, if PET products are not disposed of properly they can break
          down into microplastics and get into various ecosystems.
        </p>
      </section>
      <Footer/>
    </div>
  );
}

export default DrinkingWater;
