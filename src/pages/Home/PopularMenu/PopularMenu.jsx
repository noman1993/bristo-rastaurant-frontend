import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === "popular")
  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <button className="btn btn-soft border-0 border-b-2 border-amber-300">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
