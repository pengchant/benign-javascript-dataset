
      <p class="name theme-text">{town}</p>
      <a id="weather-change">[切换]</a>
      <a href="{link}&src=hao_weather" target="weather{code}" class="weather-detail">
          <span style="background:url(https://hao1.qhimg.com/d/inn/52059c57ec88/weather/{todayCode=weather.today.icoCode}.png) 50% no-repeat;_background-image:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://hao1.qhimg.com/d/inn/52059c57ec88/weather/{todayCode}.png',sizingMethod='image');display:inline-block;width:25px;height:25px;background-size:16px auto;" class="weather-icon"></span>
          <span>今 {weather.today.weather}</span>
          <span lang="en-US">{weather.today.c}&deg;C</span>
      </a>
      <ul class="extend-list"></ul>
      <span class="splitter">|</span>
      <a href="{link}&src=hao_weather" target="weather{code}" class="weather-detail">
          <span style="background:url(https://hao1.qhimg.com/d/inn/52059c57ec88/weather/{tomorrowCode=weather.tomorrow.icoCode}.png) 50% no-repeat;_background-image:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://hao1.qhimg.com/d/inn/52059c57ec88/weather/{tomorrowCode}.png',sizingMethod='image');display:inline-block;width:25px;height:25px;background-size:16px auto;" class="weather-icon"></span>
          <span>明 {weather.tomorrow.weather}</span>
          <span lang="en-US">{weather.tomorrow.c}&deg;C</span>
      </a>
      <a title="点击查看一周天气" target="weather{code}" href="{link}&src=hao_weather_mob" class="weather-more">
          查看本周天气 &gt;
      </a>
  