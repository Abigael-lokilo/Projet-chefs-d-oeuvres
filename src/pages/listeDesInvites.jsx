import Ajouter from "./calendrier";

function ListeDesInvités() {
  return (
    <>
      <div class="mt-5">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-2">
          <div class="flex justify-between items-center"></div>
          <div class="flex flex-col"></div>
        </div>

        <div class="block p-2 bg-green-500 text-white rounded-sm shadow-sm mt-2">
          bonjour
        </div>
        <div class="overflow-x-auto sm:mx-6 lg:mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full texte-center ">
                <thead class="border-b bg-gray-50">
                  <tr>
                    <th class="text-sm font-medium text-gray-900 px-6 py-6">
                      libelle
                    </th>
                    <th class="text-sm font-medium text-gray-900 px-6 py-6">
                      libelle
                    </th>
                    <th class="text-sm font-medium text-gray-900 px-6 py-6">
                      libelle
                    </th>
                    <th class="text-sm font-medium text-gray-900 px-6 py-6">
                      libelle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=""></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListeDesInvités;
