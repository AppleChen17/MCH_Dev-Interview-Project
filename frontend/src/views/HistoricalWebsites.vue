<template>
  <div class="historical-websites">
    <h2>歷年梅竹黑客松網站</h2>
    <div class="websites-grid">
      <div v-for="website in websites" :key="website.id" class="website-card">
        <img
          :src="website.image_url"
          :alt="website.name"
          class="website-image"
        />
        <div class="website-info">
          <h3>{{ website.name }}</h3>
          <p>{{ website.description }}</p>
          <a :href="website.link" target="_blank" class="view-button"
            >查看網站</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script> -->
<!-- // // TODO: Fetch websites data from API -->
<script setup> 

  // Vue3 可以用的宣告方式 !
  import { ref, onMounted } from "vue";

  const websites = ref([]); // get the "websites" value

  async function fetchAPI() 
  {
    try 
    {
      const response = await fetch("https://mch-dev.userwei.com/api/websites/");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      websites.value = await response.json(); // update websites Array value !
      console.log("API:", websites.value);
    } 
    catch (error) 
    {
      console.error("GET data fail:", error);
    }
  }

  onMounted(fetchAPI);
</script>

<style scoped>
.historical-websites {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.historical-websites h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: #333;
}

.websites-grid {
  /* TODO: Add styles for a responsive grid layout */
  /* responsive grid layout 可以透過 flex-box 或 CSS grid 來達成 ! */
  display: grid;
  /* border-color: blue solid 10px; */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.website-card {
  /* 不想讓文字一起對齊所以最後不用 flex-box */
  /* sol : 用 margin:auto; display:block 的方式來讓他強制置中 ! */
  /* display: flex; */
  /* flex-direction: column; */
  /* border: blue 3px solid; */
  /* align-items: center; */
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin: auto 0;
}

.website-card:hover {
  transform: translateY(-5px);
}

.website-image {
  /* border: 3px solid red; */
  /* width: 80%; */
  width: 300px;
  height: 200px;
  margin: auto;
  display: block;
  object-fit: contain;
}

.website-info {
  /* border: 3px solid green; */
  padding: 20px;
}

.website-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  color: #333;
}

.website-info p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

.view-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #656d73;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}

.view-button:hover {
  background-color: #36383a;
}
</style>
