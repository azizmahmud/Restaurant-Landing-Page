$(document).ready(function () {
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
