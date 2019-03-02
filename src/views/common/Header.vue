<template>
  <header>
    <label for="mobileHamburger" class="mobileHamburgerIcon">Меню</label>
    <nav>
      <a href="/anime">Аниме</a>
      <a href="/dorama">Дорамы</a>
      <a href="/news">Новости</a>
      <a
        href="https://drive.google.com/drive/folders/0B8t03WgYV96bcGtyck5veko1M0E"
        target="_blank"
      >Софтсаб</a>
    </nav>
    <a
      href="http://oauth.vk.com/authorize?client_id=5492280&amp;redirect_uri=https://sovetromantica.com&amp;response_type=code&amp;state=vk"
      class="user--login button--default"
    >
      <img src="/assets/images/vk.png" height="40px/">
    </a>
    <a
      href="https://accounts.google.com/o/oauth2/v2/auth?client_id=499956843023-ls56nrld8e0d5hg3id84uc64n6jut7qu.apps.googleusercontent.com&amp;response_type=code&amp;scope=openid%20email&amp;redirect_uri=https://sovetromantica.com&amp;state=google"
      class="user--login button--default"
    >
      <img src="/assets/images/google.png" height="40px/">
    </a>
    <a href="#" class="user--login button--default">Войти</a>
  </header>
</template>
