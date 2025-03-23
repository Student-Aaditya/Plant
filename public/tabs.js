document.addEventListener("DOMContentLoaded", function() {
  var triggerTabList = document.querySelectorAll('#workTabs button');
  triggerTabList.forEach(function(tab) {
    tab.addEventListener('click', function(event) {
      event.preventDefault();
      var tabElement = new bootstrap.Tab(tab);
      tabElement.show();
    });
  });
});
