$(document).ready(function () {
  $(".video-play-btn").magnificPopup({
    type: "iframe",

    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: "v=", // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: "//www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
        },

        // you may add here more sources
      },

      srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
  });

  $(".client-reviews").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `     <button class="prev-btn">
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.941406 6.9996H15.0591M0.941406 6.9996L6.58847 1.35254M0.941406 6.9996L6.58847 12.6467"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>`,
    nextArrow: `  <button class="next-btn">
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0586 6.9996H0.940946M15.0586 6.9996L9.41153 1.35254M15.0586 6.9996L9.41153 12.6467"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</button>`,
  });
});
