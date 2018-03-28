$(document).ready(function() {
  $('#makeMeScrollable').smoothDivScroll({
    hotSpotScrolling: true,
    hotSpotScrollingStep: 5,
    // visibleHotSpotBackgrounds: "hover",
    visibleHotSpotBackgrounds: "always",
    easingAfterMouseWheelScrolling: false,
    touchScrolling: true
  });

  if ($(window).width() < 768) {
    $('#makeMeScrollable').smoothDivScroll({
      visibleHotSpotBackgrounds: "always"
    });
  }
});
