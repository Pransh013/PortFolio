import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="color-ring-loading"
        wrapperClass="color-ring-wrapper"
        colors={["#fff", "gray", "#fff", "gray", "white"]}
      />
    </>
  );
};

export default Loader;
