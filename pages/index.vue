<template>
  <section>
    <header-nav />
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <div class="intro-section">
          <h1 class="title-tag">Your Commercial Cleaning Solution</h1>
          <p class="intro-text">
            With over 20 years of cleaning experience, you can have comfort knowing that the job will be done quickly and
            correctly. Don't hesitate to call now, or get free estimate today! 
          </p>
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <img id="home-img" src="@/static/images/commercial-b-home.jpg" alt="cleaning home page building"
          style="width: 100%; height: 100%" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <img id="home-img2" src="@/static/images/commercial-b-inside.jpg" alt="inside of commercial building"
          style="width: 100%; height: 100%" />
      </div>
      <div class="col-sm-12 col-lg-6">
        <div class="intro-section" style="margin-right: 100px;">
          <h1 class="title-tag">Peace of Mind Results</h1>
          <p class="intro-text">
            Using the most up to date cleaning techniques, worry not, we will get every nook and cranny cleaned. We pride ourseleves
            in doing the best work and never disappoint. Because of this we diligently check our work, and make sure your corporate space is
            clean and welcoming for all your clients and employees. Check out our reviews if you don't believe us! Get a free estimate now! 
          </p>
          <button class="btn-success"><nuxt-link to="/contact" style="font-size: 42px;text-decoration:none;color:white;">Free Estimate</nuxt-link></button>
        </div>
      </div>
    </div>

    <b-container>
      <b-row>
        <b-col>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="@/static/images/cleaning-wiping.png" alt="Avatar" style="width: 300px; height: 300px" />
              </div>
              <div class="flip-card-back">
                <h1>Bathrooms, Kitchens, & More!</h1>
                <p>We clean bathrooms, kitchens, and recreation areas</p>
              </div>
            </div>
          </div>
        </b-col>
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="@/static/images/cleaning-mop.jpg" alt="Avatar" style="width: 300px; height: 300px" />
              </div>
              <div class="flip-card-back">
                <h1>Efficient & Effective Cleaning</h1>
                <p>Our cleaning results are sure to impress!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="@/static/images/cleaning-dusting.jpg" alt="Avatar" style="width: 300px; height: 300px" />
              </div>
              <div class="flip-card-back">
                <h1>20+ Years of Experience</h1>
                <p>With our years of experience, we know what to look for to keep your work area clean and functional</p>
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
            <li class="home-list-item">North Salt Lake</li>
            <li class="home-list-item">Salt Lake City</li>
            <li class="home-list-item">Woodscross</li>
            <li class="home-list-item">Bountiful</li>
          </ul>
        </b-col>
        <b-col>
          <ul class="home-list">
            <li class="home-list-item">Murray</li>
            <li class="home-list-item">Sugarhouse</li>
            <li class="home-list-item">Centerville</li>
            <li class="home-list-item">Farmington</li>
          </ul>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h1>Aurora's Cleaning</h1>
          <p>North Salt Lake, Utah, 84054</p>
        </b-col>
      </b-row>

      <div class="row" style="margin-bottom: 20px;">
        <div class="col-sm-6 col-lg-2 times">
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </div>
        <div class="col-sm-6 col-lg-2 times">
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-5:00</p>
          <p>8:30-3:00</p>
          <p>Closed</p>
        </div>
        <div class="col-sm-12 col-lg-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48292.02589930805!2d-111.95499247837375!3d40.8443991362183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f71d7f60bc5b%3A0x72295629e1a2a90!2sNorth%20Salt%20Lake%2C%20UT!5e0!3m2!1sen!2sus!4v1677803340496!5m2!1sen!2sus" 
          width="100%" height="100%" style="border:0;margin-bottom:15px;" allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
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
  perspective: 1000px;
  /* Remove this if you don't want the 3D effect */
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
  -webkit-backface-visibility: hidden;
  /* Safari */
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
  padding: 25px;
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

#home-img,
#home-img2 {
  -webkit-animation: fadein 3s;
  /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 3s;
  /* Firefox < 16 */
  -ms-animation: fadein 3s;
  /* Internet Explorer */
  -o-animation: fadein 3s;
  /* Opera < 12.1 */
  animation: fadein 3s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 595px) {
  .times {
    width: 50%;
  }
}
</style>
