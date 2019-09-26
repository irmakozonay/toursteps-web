<template>
  <header id="header-page">
    <div class="header-page__inner">
      <div class="container">
        <div class="logo">
          <a href="/">
            <img src="../assets/logo.png" alt>
          </a>
        </div>

        <!--<div class="search-box">-->
        <!--<span class="search-toggle">🔍</span>-->
        <!--<form class="form-search" [formGroup]="searchForm">-->
        <!--<div class="form-group form-item">-->
        <!--<input type="text" class="form-control" formControlName="tripId" value="Search &amp; hit enter">-->
        <!--</div>-->
        <!--</form>-->
        <!--</div>-->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$color: #0a5e6b !default;

#header-page {
  position: relative;
  height: 60px;
  z-index: 99999;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  .container {
    height: 100%;
  }
  .header-page__inner {
    width: 100%;
    height: 60px;
    background-color: #fff;
  }
  .logo {
    height: 100%;
    padding-top: 10px;
    text-align: center;
    filter: hue-rotate(150deg);
  }
}

#header-page .logo {
  + .search-box {
    right: 75px;
  }
}
.search-box {
  position: absolute;
  top: 0; right: 15px;
  white-space: nowrap;
  display: inline-block;
  z-index: 9;
  .search-toggle {
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    color: #67728A;
    text-align: center;
    border-left: 1px solid #D4D4D4;
    border-right: 1px solid #D4D4D4;
    cursor: pointer;
    &:hover {
      color: $color;
    }
  }
  .form-search {
    position: absolute;
    width: 200px;
    right: 0;
    top: 110%;
    opacity: 0;
    visibility: hidden;
    .form-item {
      input {
        width: 100%;
        height: 80px;
        line-height: 80px;
        font-size: 20px;
        font-weight: 700;
        padding: 0 50px;
      }
    }
  }
}
</style>
