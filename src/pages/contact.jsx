function Contact() {
  return (
    <>
      <footer class="bg-black-800 text-black py-8 px-4">
        <section class="white py-0 px-0">
          <div class="relative w-full h-48">
            <img
              src="/assets/pexels-kanishkamg-12093905.jpg"
              alt="Your Image"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/50 flex justify-center items-center text-white text-4xl font-bold">
              Contactez-Nous
            </div>
          </div>
        </section>
        <div class="container mx-auto flex flex-wrap justify-between">
          <div class="w-full md:w-1/2 mb-4 md:mb-0">
            <p class="text-base mb-4">
              Vous avez des questions ? N'hésitez pas à nous contacter en
              utilisant le formulaire ci-dessous.
            </p>

            <form>
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                class="mt-4 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div class="w-full md:w-1/2 text-center md:text-left"></div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
