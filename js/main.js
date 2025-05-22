jQuery(function ($) {
  $("#owl-clients").owlCarousel({
    center: false,
    items: 6,
    loop: false,
    margin: 0,
    responsiveClass: true,
    nav: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 900,
    navText: [
      "<img src='../icons/previous-arrow.svg' alt='Previous' width='12' /> Previous",
      " Next <img src='../icons/next-arrow.svg' alt='Next' width='12' />",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false,
        stagePadding: 0,
        loop: true,
        autoplay: false,
      },
      600: {
        items: 2,
        nav: false,
        loop: true,
        autoplay: false,
      },
      1000: {
        nav: false,
        dots: false,
        loop: true,
        items: 6,
      },
    },
  });

  $("#owl-reviews").owlCarousel({
    center: false,
    items: 1,
    loop: false,
    margin: 0,
    responsiveClass: true,
    nav: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 800,
    autoplay: false,
    autoplayTimeout: 8000,
    autoplaySpeed: 900,
    navText: [
      "<img src='../icons/previous-arrow.svg' alt='Previous' width='12' /> Previous",
      " Next <img src='../icons/next-arrow.svg' alt='Next' width='12' />",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
        stagePadding: 0,
        loop: true,
        center: false,
        autoplay: false,
      },
      600: {
        items: 1,
        nav: false,
        loop: true,
        autoplay: false,
      },
      1000: {
        nav: true,
        dots: false,
        loop: true,
        items: 1,
      },
    },
  });

  window.onscroll = function () {
    myFunction();
  };
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      $("#hambr").attr("src", "../icons/hamburger.svg");
    } else {
      header.classList.remove("sticky");
      $("#hambr").attr("src", "../icons/hamburger.svg");
    }
  }

  $(".hamburger").click(function () {
    $(".primary-nav").animate({
      width: "toggle",
    });
    var src = $(".hamburger img").attr("src");
    var newsrc =
      src == "../icons/close.svg"
        ? "../icons/hamburger.svg"
        : "../icons/close.svg";
    $(".hamburger img").attr("src", newsrc);
    $("#body").toggleClass("hidden-body");
  });

  $(document).ready(function () {
    function alignModal() {
      var modalDialog = $(this).find(".modal-dialog");
      /* Applying the top margin on modal dialog to align it vertically center */
      modalDialog.css(
        "margin-top",
        Math.max(0, ($(window).height() - modalDialog.height()) / 2)
      );
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);

    // Align modal when user resize the window
    $(window).on("resize", function () {
      $(".modal:visible").each(alignModal);
    });
  });
});

function trackingListener() {
  var capterra_vkey = "116a8e25097e6517cb232d28645832f0",
    capterra_vid = "2154483",
    ct = document.createElement("img");
  ct.src =
    "https://ct.capterra.com/capterra_tracker.gif?vid=" +
    capterra_vid +
    "&vkey=" +
    capterra_vkey;
  document.body.appendChild(ct);
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    "send_to": "AW-613564663/0oOOCKS1rYQYEPeByaQC",
    "event_callback": callback,
  });
  return false;
}

function showThankYou() {
  jQuery(function ($) {
    if ($("#thankYouModal").length == 0) {
      $("body").append(
        '<div class="modal" id="thankYouModal" tabindex="-1" role="dialog">' +
          '<div class="modal-dialog modal-dialog-centered">' +
          '<div class="modal-content" style="text-align: center;">' +
          '<div class="modal-body">' +
          '<svg xmlns="http://www.w3.org/2000/svg" class="text-success" width="75" height="75" fill="green" class="bi bi-check-circle-fill"' +
          'viewBox="0 0 16 16">' +
          "<path " +
          'd="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />' +
          "</svg>" +
          '<button type="button" class="close close-md" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
          "</button>" +
          "</br>" +
          "<h1>Thank You !</h1>" +
          "<p>Our team will reach out to you soon.</p>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>"
      );
    }
    $("#thankYouModal").modal("show");
  });
}



  // === Utility: Set & Get Cookies ===
  function setCookie(name, value, minutes) {
    const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  }

    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmCampaign = params.get("utm_campaign");

    if (utmSource) setCookie("utm_source", utmSource, 30);
    if (utmCampaign) setCookie("utm_campaign", utmCampaign, 30);


function submitForm(formId, formData, formToken) {
  jQuery(function ($) {
    $(`#${formId}-btn`).prop("disabled", true);

    const utmSource = getCookie("utm_source");
    const utmCampaign = getCookie("utm_campaign");

    formData["custom_source"] = "Website Enquiry- IB";
    formData["custom_status"] = "Api Allocation";
    if (utmSource) formData["custom_utm source"] = utmSource;
    if (utmCampaign) formData["custom_utm campaign"] = utmCampaign;

    // ✅ Print final form data to console
    console.log(`Submitting form: ${formId}`);
    console.log("Form Data Sent to API:", formData);

    $.ajax({
      type: "POST",
      url: `https://api-call-crm.runo.in/integration/webhook/wb/5d70a2816082af4daf1e377e/${formToken}`,
      data: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      contentType: "application/json",
    })
      .done(function (data) {
        console.log("✅ Success:", data);
        $(`#${formId}`)[0].reset();
        $(`#${formId}-btn`).prop("disabled", false);
        $("#modal").modal("hide");
        showThankYou();
        trackingListener();
      })
      .fail(function (a, b) {
        console.log("❌ Error:", a, b);
        $(`#${formId}`)[0].reset();
        $(`#${formId}-btn`).prop("disabled", false);
      });
  });
}


