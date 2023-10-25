import Featured from "../Components/Featured";
import Header from "../Components/Header";
import PropertyList from "../Components/PropertyList";
import FeaturedProperties from "../Components/FeaturedProperties";
import "./home.css";
import MailList from "../Components/MailList";

function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </>
  );
}

export default Home;
