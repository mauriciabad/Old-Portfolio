var trendingScreen=document.getElementById("trendingScreen"),searchScreen=document.getElementById("searchScreen"),dateScreen=document.getElementById("dateScreen"),notificationsScreen=document.getElementById("notificationsScreen"),accountScreen=document.getElementById("accountScreen"),currentScreen=document.getElementById("trendingScreen"),currentSectionTrending=document.getElementById("trendsSection"),currentSectionTrendingNav=document.getElementById("trendingScreen").children[0].children[0],currentSalon=document.getElementById("salonMap"),wigCounter=document.getElementById("wig-counter");wigCounter.innerHTML=Math.floor(5e3*Math.random())+500,updateWigCounter();var video=document.getElementById("camera"),constraints=window.constraints={audio:!1,video:!0};function startCamera(e){e.getVideoTracks();window.stream=e,video.srcObject=e}function updateWigCounter(){setTimeout(function(){wigCounter.innerHTML=parseInt(wigCounter.innerHTML)+1,updateWigCounter()},Math.floor(8e3*Math.random())+100)}function initMap(){var e=new google.maps.Map(document.getElementById("map"),{zoom:15,center:{lat:48.8645,lng:2.323},disableDefaultUI:!0}),n=new google.maps.Marker({position:{lat:48.869191,lng:2.320148},map:e}),t=new google.maps.Marker({position:{lat:48.864191,lng:2.323148},map:e}),o=new google.maps.Marker({position:{lat:48.869191,lng:2.328148},map:e});n.addListener("click",function(){showSalon("salon1")}),t.addListener("click",function(){showSalon("salon2")}),o.addListener("click",function(){showSalon("salon3")})}function showSalon(e){currentSalon.style.display="none",(currentSalon=document.getElementById(e)).style.display="block"}function changeScreen(e){currentScreen.style.display="none",currentScreen=document.getElementById(e),window.scrollTo(0,0),currentScreen.style.display="block",showSalon("salonMap"),"cameraScreen"==e?navigator.mediaDevices.getUserMedia(constraints).then(startCamera):stream.getTracks()[0].stop()}function changeSectionTrending(e,n){currentSectionTrending.style.display="none",currentSectionTrendingNav.style.fontWeight="normal",currentSectionTrendingNav.style.borderBottom="none",currentSectionTrending=document.getElementById(e),currentSectionTrendingNav=document.getElementById("trendingScreen").children[0].children[n],window.scrollTo(0,0),currentSectionTrendingNav.style.fontWeight="bold",currentSectionTrendingNav.style.borderBottom="solid 0.1em #333",currentSectionTrending.style.display="block"}
