//*Email related
function sendEmail(email_form_class_name) {
  // Get the form elements by class name
  const emailForm = document.getElementsByClassName(email_form_class_name)[0];

  // Gather values from the form using `name` attributes
  const from_name = emailForm.querySelector("[name='pname']").value.trim();
  const from_email = emailForm.querySelector("[name='email']").value.trim();
  const message = emailForm.querySelector("[name='info']").value.trim();

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form validation
  if (!from_name) {
    alert("Please enter your name.");
    return;
  }
  if (!from_email || !emailRegex.test(from_email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (!message) {
    alert("Please enter your message.");
    return;
  }


  console.log( {
    "from_name": from_name,
    "from_email": from_email,
    "message": message,
  })
  // Send email using EmailJS
  emailjs
    .send("service_t574omc", "template_0y8o9y3", {
      from_name: from_name,
      from_email: from_email,
      message: message,
    })
    .then(
      function (response) {
        alert("Email sent successfully!");
      },
      function (error) {
        alert("Error sending email: " + JSON.stringify(error));
      }
    );
}





function openProductDetails(card) {
  // Get elements from the clicked product card
  const name = card.querySelector(".product-name").innerText;
  const imageSrc = card.querySelector(".product-image img").src;
  const description = card.querySelector(".product-desc").innerText;
  const price = card.querySelector(".product-price").innerText;
  const minOrder = card.querySelector(".min-order").innerText;
  const bannerSrc = card.querySelector(".product-banner img").src;

  // Set the popup elements with the retrieved values
  document.getElementById("popup-product-name").innerText = name;
  document.getElementById("popup-product-image").src = imageSrc;
  document.getElementById("popup-product-desc").innerText = description;
  document.getElementById("popup-product-price").innerText = price;
  document.getElementById("popup-min-order").src = minOrder;
  document.getElementById("popup-product-banner").src = bannerSrc;


  // Display the popup
  document.getElementById("product-details-screen").style.display = "flex";
}

function closeProductDetails(event) {
  if (event.target.id === "product-details-screen" || event.target.classList.contains("close-btn")) {
    document.getElementById("product-details-screen").style.display = "none";
  }
}





















TouchSlide({
  slideCell: "#slides",
  titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
  mainCell: ".bd ul",
  effect: "leftLoop",
  autoPage: true, //自动分页
  autoPlay: true, //自动播放
});





 //返回顶部js
 var timer = null;
 box2.onclick = function () {
   cancelAnimationFrame(timer);
   //获取当前毫秒数
   var startTime = +new Date();
   //获取当前页面的滚动高度
   var b = document.body.scrollTop || document.documentElement.scrollTop;
   var d = 500;
   var c = b;
   timer = requestAnimationFrame(function func() {
     var t = d - Math.max(0, startTime - +new Date() + d);
     document.documentElement.scrollTop = document.body.scrollTop = (t * -c) / d + b;
     timer = requestAnimationFrame(func);
     if (t == d) {
       cancelAnimationFrame(timer);
     }
   });
 };



 $(function () {
  //滚动超过一屏幕应该显示，否则消失
  var pagelookheight = document.documentElement.clientHeight;
  var topTimer = null;
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > pagelookheight) {
        $("#box2").fadeIn(500);
        //$("#backToTop").style.display = "block";
      } else {
        $("#box2").fadeOut(500);
      }
    });
  });
});




window.onload = function () {
  var oDiv1 = document.getElementById("div1");
  var oDiv2 = document.getElementById("div2");
  var oDiv3 = document.getElementById("div3");
  var oDiv4 = document.getElementById("div4");
  var oDiv6 = document.getElementById("div6");
  var oDiv7 = document.getElementById("div7");
  var oDiv8 = document.getElementById("div8");
  var timer = null; //定义定时器变量
  //鼠标移入div1或div2都把定时器关闭了，不让他消失
  oDiv1.onmouseover = oDiv2.onmouseover = function () {
    oDiv2.style.display = "block";
    oDiv4.style.display = "none";
    clearTimeout(timer);
  };

  //鼠标移出div1或div2都重新开定时器，让他延时消失
  oDiv1.onmouseout = oDiv2.onmouseout = function () {
    //开定时器
    timer = setTimeout(function () {
      oDiv2.style.display = "none";
      oDiv4.style.display = "none";
    }, 100);
  };
  oDiv3.onmouseover = oDiv4.onmouseover = function () {
    oDiv4.style.display = "block";
    oDiv2.style.display = "none";
    clearTimeout(timer);
  };
  oDiv3.onmouseout = oDiv4.onmouseout = function () {
    //开定时器
    timer = setTimeout(function () {
      oDiv2.style.display = "none";
      oDiv4.style.display = "none";
    }, 100);
  };
  oDiv6.onclick = oDiv7.onmouseover = function () {
    clearTimeout(timer);
    oDiv7.style.display = "block";
    oDiv7.style.position = "absolute";
  };
  oDiv8.onclick = oDiv7.onmouseout = function () {
    //开定时器

    oDiv7.style.display = "none";
  };
};