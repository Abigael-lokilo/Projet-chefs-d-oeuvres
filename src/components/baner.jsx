function Baner() {
  return (
    <div className="flex items-center justify-center">
      <div className="banner container py-10">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="font-semibold sm:text-2xl text-white ">
            L'amour ne connait pas la distance...
          </h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-§s p-10">
          <div className="rounded-full overflow-hidden border  border-white p-5 text-center">
            <h1 className="text-2xl">1</h1>
            <p className="">
              Ce{" "}
              <span>
                passage exprime un amour profond et inconditionnel, même face à
                la perte et à la séparation. Le narrateur, Meursault, retrouve
                le bonheur en repensant à ses moments partagés avec Marie, même
                s'il sait qu'il ne la reverra jamais. Il vit dans le souvenir
                d'un amour perdu, mais qui reste toujours vivant et présent dans
                son cœur.
              </span>
            </p>
          </div>
          <div className="rounded-full overflow-hidden bg-white text-center">
            <img
              className="object-cover w-full h-full"
              src="assets/pexels-burak-evlivan-159589296-11669423.jpg"
              alt=""
            />
          </div>
          <div className="rounded-full overflow-hidden border border-white  p-5 text-center">
            <h1 className="text-2xl font-bold">2</h1>
            <p>
              Ce{" "}
              <span>
                passage exprime un amour profond et inconditionnel, même face à
                la perte et à la séparation. Le narrateur, Meursault, retrouve
                le bonheur en repensant à ses moments partagés avec Marie, même
                s'il sait qu'il ne la reverra jamais. Il vit dans le souvenir
                d'un amour perdu, mais qui reste toujours vivant et présent dans
                son cœur.
              </span>
            </p>
          </div>
          <div className="rounded-full overflow-hidden bg-white text-center">
            <img
              className="object-cover w-full h-full"
              src="assets/pexels-burak-evlivan-159589296-11669423.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Baner;
