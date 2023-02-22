<template>
  <section>
    <header-nav />
    <b-row>
      <b-col>
        <b-container>
          <b-row>
            <b-col>
              <div class="intro-section">
                <h1 class="title-tag">Your Commercial Cleaning Solution</h1>
                <p class="intro-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla sunt nobis id commodi quasi suscipit, voluptatum
                  exercitationem, quod facilis, voluptas et quam. Sed facilis
                  debitis numquam. Nemo veniam corporis eos.
                </p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col>
        <img
          id="home-img"
          src="@/static/images/commercial-b-home.jpg"
          alt="cleaning home page building"
          style="width: 100%; height: 100%"
        />
      </b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col>
          <img
          id="home-img2"
            src="@/static/images/commercial-b-inside.jpg"
            alt="inside of commercial building"
            style="width: 100%; height: 100%"
          />
        </b-col>
        <b-col>
          <b-container>
            <b-row>
              <b-col>
                <div class="intro-section">
                  <h1 class="title-tag">Peace of Mind Results</h1>
                  <p class="intro-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nulla sunt nobis id commodi quasi suscipit, voluptatum
                    exercitationem, quod facilis, voluptas et quam. Sed facilis
                    debitis numquam. Nemo veniam corporis eos.
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="@/static/images/cleaning-wiping.png"
                  alt="Avatar"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </b-col>
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="@/static/images/cleaning-mop.jpg"
                  alt="Avatar"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="@/static/images/cleaning-dusting.jpg"
                  alt="Avatar"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </b-row>

      <b-row>
        <b-col>
          <h1 style="text-align: center; margin-top: 15px">Areas Serviced</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul class="home-list">
            <li class="home-list-item">Salt Lake City</li>
            <li class="home-list-item">North Salt Lake</li>
            <li class="home-list-item">Woodscross</li>
            <li class="home-list-item">Bountiful</li>
          </ul>
        </b-col>
        <b-col>
          <ul class="home-list">
            <li class="home-list-item">Salt Lake City</li>
            <li class="home-list-item">North Salt Lake</li>
            <li class="home-list-item">Woodscross</li>
            <li class="home-list-item">Bountiful</li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1>Aurora's Cleaning</h1>
          <p>North Salt Lake, Utah, 84054</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </b-col>
        <b-col cols="2">
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-3:00</p>
          <p>Closed</p>
        </b-col>
        <b-col cols="8">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.163210632271!2d-111.94409738493127!3d40.846340337323475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f72f0c94efb1%3A0x5af0d1e5121aff96!2s241%20Buckingham%20Dr%2C%20North%20Salt%20Lake%2C%20UT%2084054!5e0!3m2!1sen!2sus!4v1676484546855!5m2!1sen!2sus" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </b-col>
      </b-row>
    </b-container>
    <footer-nav />
  </section>
</template>

<script>
import HeaderNav from '@/components/Nav/HeaderNav.vue'
import FooterNav from '@/components/Nav/FooterNav.vue'

export default {
  components: {
    HeaderNav,
    FooterNav,
  },
  data() {
    return {
      name: 'Auroras Cleaning',
    }
  },
}
</script>

<style scoped>
.intro-section {
  max-width: 550px;
  float: right;
  margin-top: 100px;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  margin: 15px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

.home-list {
  padding: 35px;
  font-size: 22pt;
  font-weight: bold;
  text-align: left;
  background-color: #3c3744;
}

.home-list-item {
  margin-left: 25px;
  color: white;
}


#home-img, #home-img2 {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}
 
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
