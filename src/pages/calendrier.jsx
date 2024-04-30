function Calendrier() {
  return (
    <>
      <body>
        <div class="calendar">
          <h1 class="text-2xl font-bold text-center mb-4">Calendrier</h1>
          <div class="relative">
            <img
              src="/assets/pexels-jeremy-wong-1026390.jpg"
              alt="Votre image"
              class="w-full h-auto"
            />
            <div class="absolute bottom-0 left-0 p-4">
              <p class="text-white font-bold">15,jeudi</p>
              <p class="text-white font-bold">Mai/2024</p>
            </div>
          </div>

          <div class="date">
            <div class="day">S</div>
            <div class="day">M</div>
            <div class="day">T</div>
            <div class="day">W</div>
            <div class="day">F</div>
            <div class="day">T</div>
            <div class="day">S</div>
            <div class="number"></div>
            <div class="number"></div>
            <div class="number"></div>
            <div class="number"></div>
            <div class="number">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
            <div class="number">4</div>
            <div class="number">5</div>
            <div class="number">6</div>
            <div class="number">7</div>
            <div class="number">8</div>
            <div class="number">9</div>
            <div class="number">10</div>
            <div class="number">11</div>
            <div class="number">12</div>
            <div class="number">13</div>
            <div class="number">14</div>
            <div class="number active">15</div>
            <div class="number">16</div>
            <div class="number">17</div>
            <div class="number">18</div>
            <div class="number">19</div>

            <div class="number">20</div>

            <div class="number">21</div>
            <div class="number">22</div>
            <div class="number">23</div>
            <div class="number">24</div>
            <div class="number">25</div>
            <div class="number">26</div>
            <div class="number">27</div>
            <div class="number">28</div>
            <div class="number">29</div>
            <div class="number">30</div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Calendrier;
