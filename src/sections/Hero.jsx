import HeroTextColumn from "../components/hero/HeroTextColumn";
import HeroCenterColumn from "../components/hero/HeroCenterColumn";
import { heroContent } from "../constants";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full relative bg-[#0a0a0a] min-h-screen flex items-center section-padding"
    >
      <div className="container-base w-full">
        {/* 3-column hero grid: left text | center image | right text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <HeroTextColumn
            side="left"
            person={heroContent.person}
            headline={heroContent.leftTitle}
          />

          <HeroCenterColumn
            availability={heroContent.availability}
            talkCta={heroContent.talkCta}
          />

          <HeroTextColumn
            side="right"
            headline={heroContent.rightTitle}
            subtitle={heroContent.description}
            ctas={{
              primary: heroContent.primaryCta,
              secondary: heroContent.secondaryCta,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
