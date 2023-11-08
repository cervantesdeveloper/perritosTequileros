import StatsCarousel from "./StatsCarousel";

export default function Stats(){
    let mobile = {
        Android: function() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
          return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows() || ["Desktop"]);
        }
      };

    let isMobil;

    if(mobile.any()[0] == "Android" || mobile.any()[0] == "iPhone"){
        isMobil = true
    
    } else {
        isMobil = false
    }
    return (
      isMobil ? <StatsCarousel /> : null
    )
}