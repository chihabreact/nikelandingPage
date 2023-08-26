import {
  HeroSection,
  CustomerReview,
  PopularProductSection,
  FooterSection,
  Services,
  SpaialOffer,
  Subscribe,
  SuperQality,
} from "./sections";
import Nav from "./Components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav></Nav>

      <section className="xl:padding-l wide:padding-r padding-b">
        <HeroSection></HeroSection>
      </section>
      <section className="padding">
        <PopularProductSection></PopularProductSection>
      </section>
      <section className="padding">
        <SuperQality></SuperQality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpaialOffer></SpaialOffer>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview></CustomerReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className=" bg-black">
        <FooterSection></FooterSection>
      </section>
    </main>
  );
};

export default App;
