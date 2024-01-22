import Lolly from "@/components/lolly";

const CreateLollyForm = () => {
  // const [flavours, setFlavours] = useState({
  //   flavourTop: "#A4193B",
  //   flavourMiddle: "#DF4343",
  //   flavourBottom: "#DB2929",
  // });

  return (
    <div className="p-8 rounded-lg shadow-md flex gap-12 justify-center items-center">
      <Lolly flavourTop="black" flavourMiddle="white" flavourBottom="black" />
    </div>
  );
};

export default CreateLollyForm;
