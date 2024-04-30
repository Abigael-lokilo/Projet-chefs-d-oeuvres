function RoomsImage({ src }) {
  return (
    <div className="h-72 w-72 ">
      <img className="h-full w-full object-fit" src={src} alt="" />
    </div>
  );
}
export default RoomsImage;
