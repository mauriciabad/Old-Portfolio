<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M12.7894 3.78963H11.2106V5.36839H12.7894V3.78963Z"
    />
    <path
      fill="currentColor"
      d="M12.7894 18.6306H11.2106V20.2094H12.7894V18.6306Z"
    />
    <path
      fill="currentColor"
      d="M20.2094 11.2106H18.6306V12.7894H20.2094V11.2106Z"
    />
    <path
      fill="currentColor"
      d="M5.36839 11.2106H3.78963V12.7894H5.36839V11.2106Z"
    />
    <path
      fill="currentColor"
      d="M12 0C5.3723 0 0 5.37279 0 12C0 18.6272 5.3723 24 12 24C18.6277 24 24 18.6272 24 12C24 5.37279 18.6277 0 12 0ZM12 21.7891C6.60181 21.7891 2.21086 17.3977 2.21086 12C2.21086 6.6023 6.6023 2.21086 12 2.21086C17.3977 2.21086 21.7891 6.6023 21.7891 12C21.7891 17.3977 17.3977 21.7891 12 21.7891Z"
    />
    <path
      id="icon-compass-needle"
      fill="currentColor"
      d="M9.15462 9.09696L6.25158 17.8056L14.9602 14.9025L17.8627 6.19442L9.15462 9.09696ZM13.1738 13.1162C12.5579 13.7331 11.5579 13.7326 10.942 13.1162C10.325 12.4992 10.325 11.5003 10.942 10.8838C11.5579 10.2669 12.5579 10.2669 13.1738 10.8838C13.7908 11.5003 13.7908 12.4997 13.1738 13.1162Z"
    />
  </svg>
</template>

<style lang="stylus">
#icon-compass-needle
  transform-origin center center;
  animation compass-animation 8s infinite

@keyframes compass-animation {
  0.000%  { transform: rotate( 1.0000 * -0.25turn); }
  0.500%  { transform: rotate( 0.9861 * -0.25turn); }
  1.000%  { transform: rotate( 0.9444 * -0.25turn); }
  1.500%  { transform: rotate( 0.8750 * -0.25turn); }
  2.000%  { transform: rotate( 0.7778 * -0.25turn); }
  2.500%  { transform: rotate( 0.6582 * -0.25turn); }
  3.000%  { transform: rotate( 0.5000 * -0.25turn); }
  3.500%  { transform: rotate( 0.3194 * -0.25turn); }
  4.000%  { transform: rotate( 0.1111 * -0.25turn); }
  4.242%  { transform: rotate( 0.0000 * -0.25turn); }
  4.742%  { transform: rotate(-0.2013 * -0.25turn); }
  5.302%  { transform: rotate(-0.2653 * -0.25turn); }
  5.642%  { transform: rotate(-0.2440 * -0.25turn); }
  6.790%  { transform: rotate( 0.0000 * -0.25turn); }
  7.910%  { transform: rotate( 0.1316 * -0.25turn); }
  9.448%  { transform: rotate( 0.0000 * -0.25turn); }
  10.526% { transform: rotate(-0.0548 * -0.25turn); }
  12.104% { transform: rotate( 0.0000 * -0.25turn); }
  13.146% { transform: rotate( 0.0195 * -0.25turn); }
  14.760% { transform: rotate( 0.0000 * -0.25turn); }
  15.770% { transform: rotate(-0.0060 * -0.25turn); }
  17.416% { transform: rotate( 0.0000 * -0.25turn); }
  20.000% { transform: rotate( 0.0000 * -0.25turn); }

  50.000% { transform: rotate(0.0000 * -0.25turn); }
  50.500% { transform: rotate(0.0139 * -0.25turn); }
  51.000% { transform: rotate(0.0556 * -0.25turn); }
  51.500% { transform: rotate(0.1250 * -0.25turn); }
  52.000% { transform: rotate(0.2222 * -0.25turn); }
  52.500% { transform: rotate(0.3418 * -0.25turn); }
  53.000% { transform: rotate(0.5000 * -0.25turn); }
  53.500% { transform: rotate(0.6806 * -0.25turn); }
  54.000% { transform: rotate(0.8889 * -0.25turn); }
  54.242% { transform: rotate(1.0000 * -0.25turn); }
  54.742% { transform: rotate(1.2013 * -0.25turn); }
  55.302% { transform: rotate(1.2653 * -0.25turn); }
  55.642% { transform: rotate(1.2440 * -0.25turn); }
  56.790% { transform: rotate(1.0000 * -0.25turn); }
  57.910% { transform: rotate(0.8684 * -0.25turn); }
  59.448% { transform: rotate(1.0000 * -0.25turn); }
  60.526% { transform: rotate(1.0548 * -0.25turn); }
  62.104% { transform: rotate(1.0000 * -0.25turn); }
  63.146% { transform: rotate(0.9805 * -0.25turn); }
  64.760% { transform: rotate(1.0000 * -0.25turn); }
  65.770% { transform: rotate(1.0060 * -0.25turn); }
  67.416% { transform: rotate(1.0000 * -0.25turn); }
  70.000% { transform: rotate(1.0000 * -0.25turn); }

  100.00% { transform: rotate(1.0000 * -0.25turn); }
}

// Paravola + wave fading points
// where 0 < x < 1
//    x       y   y(reversed)
// 0.0000  1.0000   0.0000
// 0.0250  0.9861   0.0139
// 0.0500  0.9444   0.0556
// 0.0750  0.8750   0.1250
// 0.1000  0.7778   0.2222
// 0.1250  0.6582   0.3418
// 0.1500  0.5000   0.5000
// 0.1750  0.3194   0.6806
// 0.2000  0.1111   0.8889
// 0.2121  0.0000   1.0000
// 0.2371 -0.2013   1.2013
// 0.2651 -0.2653   1.2653
// 0.2821 -0.2440   1.2440
// 0.3395  0.0000   1.0000
// 0.3955  0.1316   0.8684
// 0.4724  0.0000   1.0000
// 0.5263 -0.0548   1.0548
// 0.6052  0.0000   1.0000
// 0.6573  0.0195   0.9805
// 0.7380  0.0000   1.0000
// 0.7885 -0.0060   1.0060
// 0.8708  0.0000   1.0000
// 1.0000  0.0000   1.0000
</style>
