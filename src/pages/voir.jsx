import RoomsImage from "../components/roomsImage";

function Voir() {
  const images = [
    {
      src: "/assets/pexels-tara-winstead-6479604 (3).jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-tara-winstead-6479604 (3).jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-tara-winstead-6479596.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-panditwiguna-2788488.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-matheus-bertelli-17294738.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-mat-brown-150387-1395967.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-mat-brown-150387-1395964.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-luis-felipe-perez-817377805-19655362.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-luis-felipe-perez-817377805-19655359.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-luis-felipe-perez-817377805-19408254.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-jonathanborba-12876490.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-ichad-windhiagiri-7082467.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-emma-bauso-1183828-2253831.jpg",
      alt: "",
    },

    {
      src: "/assets/pexels-kseniachernaya-3980607.jpg",
      alt: "",
    },
    {
      src: "/assets/pexels-luis-felipe-perez-817377805-19408254.jpg",
      alt: "",
    },
  ];
  return (
    <div className="voir grid gap-x-8 gap-y-4">
      <div className="flex gap-3 flex-wrap ">
        {images.map((image, index) => (
          <RoomsImage src={image.src} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Voir;
