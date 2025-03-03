<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <img src="/images/mch.webp" alt="Logo" class="logo" />
      <router-link to="/" class="brand-link">梅竹黑客松 開發部面試專案</router-link>
    </div>

    <button class="navbar-toggler" @click="toggleMenu">
      <!-- 這裡的 v-if 跟 v-else 要相鄰才可以 ! 兩行一定要連載一起 !-->
      <span v-if="!isMenuOpen" key="open">☰</span>
      <span v-else key="close">✖</span>
    </button>

    <ul class="navbar-nav" v-if="isMenuOpen || isLargeScreen">
      <li class="nav-item">
        <router-link to="/" class="nav-link">自我介紹</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/historical-websites" class="nav-link">歷年網站</router-link>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    // data => 在 Vue 的 script 中擔任初始化的 method
    return {
      isMenuOpen: false,
      isLargeScreen: window.innerWidth > 600,
    };
  },
  methods: {
    // 可以用於修改數值 !
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth > 600;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  mounted() 
  {
    window.addEventListener("resize", this.updateScreenSize);
    this.$router.afterEach(() => {
      console.log("Route changed, closing menu...");
      this.closeMenu(); // if switch router => CLOSE MENU !!!
    });
  },
  beforeUnmount()
  {
    window.removeEventListener("resize", this.updateScreenSize);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  /* border: coral solid 4px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #232323;
  padding: 1rem 5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-brand {
  display: flex;
  align-items: center;
  flex-grow: 1;
  /* border: 3px green solid; */
  z-index: 1001;
}

.logo {
  height: 24px;
  width: 24px;
  margin-right: 10px;
  display: flex;
}

.brand-link {
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  /* border: blue solid 3px; */
  text-decoration: none;
}

.navbar-toggler {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none; /* 預設隱藏 */
}

.navbar-nav {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navbar-nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.nav-item {
  display: flex;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ddd;
}

nav{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}



@media screen and (max-width: 600px) 
{
  /* .navbar-brand {
    justify-content: center;
    width: 100%;
  } */

  .navbar-brand .logo {
    width: 5vw;
    height: 5vw;
  }

  .navbar{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .navbar-toggler {
    /* align-items: center; */
    /* border: red solid 3px; */
    margin-left: 0;
    transition: all 0.2s ease;
    cursor: pointer;
    display: flex;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .nav-item {
    text-align: center;
    display:block;
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .nav-link {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
