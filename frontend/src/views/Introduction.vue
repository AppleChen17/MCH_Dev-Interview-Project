<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Noto+Serif+TC:wght@200..900&display=swap" 
        rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Sigmar&display=swap" rel="stylesheet">
  <div class="introduction">
    <header class="intro-header">
      <section class="personal-photo">
        <img src="/images/personal_photo_square.jpg" alt="個人照片">
      </section>
      <section class="intro-text">
        <h2 class="sigmar-regular"># include &lt; Appleple &gt;</h2>
        <p class="noto-serif-tc">
          <!-- 簡單自我介紹+本人圖片 -->
          早安 :D ! 我是目前就讀於清大資工大二的陳品卉 &#x1F34E;
          <br>
          透過線上課程自學了基礎的網頁開發知識與HTML、CSS與JavaScript等。雖然目前為止接觸比較多的是競技程式解題，但也希望有機會更深入的學習開發，親手創造出具體的作品。
          <br>
        </p>
        <p class="noto-serif-tc">
          個性中最大的特點大概是樂觀，即便遇到困難也會試圖用<strong>「享受」</strong>的方式克服，畢竟就經驗而言，所有很花時間且當時辛苦的事之後都會變成很好且珍貴的回憶 ! 
        </p>
        <p class="noto-serif-tc">
          希望能加入開發組，遇見很多厲害的人並跟組員一起創造令人自豪的成品 !
        </p>

        <button class="contact-button">
          <a data-auto-recognition="true" href="mailto:appleacdes@gapp.nthu.edu.tw">Email me</a>
        </button>
      </section>

    </header>
    <section class="about-section noto-serif-tc">
      <h3>個人網頁 ( <a target="_blank" href="https://applechen17.github.io/" style="color: blue;">網頁連結</a> )</h3>
      <ul>
        <li>
          用自學的 HTML, CSS 和 JavaScript 製作出的個人網頁 
        </li>
      </ul>

      <h3>做過的 project ( <a target="_blank" href="https://github.com/AppleChen17" style="color: blue;">github</a> )</h3>
      <ul>
        <li>
          Pacman Game ( <a target="_blank" href="https://github.com/AppleChen17/I2P1_Pacman" style="color: blue;">repo</a> ) : 用 C 寫的 Pacman 遊戲，有著流暢的動畫。設計並實作了鬼行走的演算法(距三個格子內會走最小路徑，反之則 random 方向)。
        </li>
        <li>
          Monopoly Game ( <a target="_blank" href="https://applechen17.github.io/project_intro/monopoly.html" style="color: blue;">project introduction link</a> ): 用 C++ 和組員一起完成一個具有高互動性的大富翁遊戲。在大富翁的規則基礎上，我們設計了角色與角色技能，增加玩家在遊玩時的遊戲體驗。
          除此之外，我們更增加了新賽制 -- 賭博遊戲(是一個塔防遊戲)，讓走到此格的玩家可以使用本金試圖換取翻倍的價錢或是輸掉遊戲並賠償，增加遊戲的變化性。
        </li>
        <li>
          論文搜尋系統 ( <a target="_blank" href="https://github.com/AppleChen17/DS_essay_search" style="color: blue;">repo</a> ) : 使用 C++ 與資料結構 Trie 完成的論文搜尋系統，支援 exact, prefix, suffix, postfix 和 wildcard 搜尋。可以在 0.623s 內處理數個 query 和 10000 筆論文資料。
        </li>
      </ul>

      <h3>個人特質</h3>
      <ul>
          <li>享受挑戰、樂觀積極 : 可以正向的看待與面對挑戰</li>
          <li>樂於學習 : 喜對新事物充滿好奇，積極學習不同的技術與知識</li>
          <li>換位思考 : 在團體中可以換位思考並理解別人的需求</li>
          <li>負責任 : 對被指派的工作全力以赴，並確保得以保持聯繫</li>
          <li>熱心助人 : 很樂意提供任何別人需要的協助，在事情做完之餘也願意主動分擔其他工作</li>
          <li>堅持有毅力 : 遇到問題不會輕言放棄，會想盡各種方法解決</li>
      </ul>
      
      <h3>其他經驗</h3>
      <ul>
          <li>2024 IONCamp 清大暑期程式競賽集訓營 助教兼隊輔</li>
          <li>大一第一學期書卷獎</li>
          <li>大學課堂 ToastMaster 活動 - 主動接任 ToastMaster、Speaker、Evaluator</li>
          <li>北一女中 資訊能力競賽 三等獎</li>
      </ul>
    </section>
  </div>
</template>


<style scoped>
.sigmar-regular {
  font-family: "Sigmar", serif;
  font-weight: 400;
  font-style: normal;
}

.noto-serif-tc {
  font-family: "Noto Serif TC", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}


.introduction {
  padding: 40px 20px;
  max-width: 1200px;
  /* 置中! */
  margin: 0 auto; 
}

.intro-header {
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 10px;
  /* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.4);
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  /* 擠壓的原因是因為沒有 align-items，所以沒有對齊容器的中間 */
  align-items: center;
}


.intro-text {
  flex: 0 1 700px;
  /* border: red solid 3px; */
  padding: 2rem 1rem;
}

.intro-text h2 {
  padding-left: 0.5rem;
  font-size: 2.2rem;
  margin-bottom: 20px;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  border-right: 0.05em solid; /* 打字時的光標 */
  width: 17ch; /* 初始寬度為 0，使用 `ch` 單位確保寬度與字元匹配 */
  animation: typing 3s steps(17) forwards,
              caret 1s steps(1) 3s 2 forwards;
  border-bottom: solid 4px coral;
}

.intro-text p {
  font-size: 1.1rem;
  margin-bottom: 20px;
  padding-left: 0.5rem;
}

.personal-photo {
  padding: 0.5rem 0.5rem;
  /* border: 3px solid blue; */
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 0 1 350px;
  animation: leftIn 1s;
}

.personal-photo img
{
  padding: 0.3rem;
  border-radius: 50%;
  width: 80%;
  &:hover{
    border: #36383a solid 3px;
    transition: all 0.1s ease;
    width: 82%;
  }
}

.contact-button {
  padding: 10px 20px;
  background-color: #656d73;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.contact-button a{
  font-size: 1.02rem;
}

.contact-button:hover {
  background-color: #36383a;
}

.about-section {
  margin-top: 40px;
  padding: 0 40px;
}

.about-section h3 {
  font-size: 1.6rem;
  margin-top: 20px;
  margin-bottom: 10px;
}

.about-section p {
  font-size: 1rem;
  line-height: 1.6;
}

.about-section li {
  font-size: 1rem;
  margin-top: 0.6rem;
}

/* reference : https://codepen.io/gn757541/pen/rNNpQgy */
@keyframes typing {
  from { width: 0ch; }
  to { width: 18ch; } /* 確保寬度與字元數相符 => 雖然有22ch但因為換字體所以寬度不太一樣 !*/
}

@keyframes caret {
  50% { border-right-color: transparent; }
  100% { border-right: none; }
}

/* reference: https://www.great-good.tw/articles/css-animation/ */
@keyframes leftIn {
    from {
        transform: translate3d(-5%, 0, 0);
    }

    to {
        transform: none;
    }
}
</style>


<!-- js -->
<script>
</script>