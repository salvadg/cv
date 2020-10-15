function displayBody(evt, tabName, fileName) {
  // Declare all variables
  var i, tabcontent, sidelinks, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="sidebar-links" and remove the class "active"
  sidelinks = document.getElementsByClassName("sidebar-links");
  for (i = 0; i < sidelinks.length; i++) {
    sidelinks[i].className = sidelinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).style.display = "block";
  document.getElementById("file-text").innerText = fileName;
  evt.currentTarget.className += " active";

  var tablinks = document.getElementsByClassName("tablinks");
  if (tabName == "projects-content") {
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.display = "block";
    }
  } else {
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.display = "none";
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tablinks[0].style.display = "block";
    tablinks[0].className += " active";
  }
}

function displayTab(evt, tabName, fileName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  console.log(fileName);

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Get all elements with class="description" and remove the class "active"
  proj_tabs = document.getElementsByClassName("description");
  for (i = 0; i < proj_tabs.length; i++) {
    proj_tabs[i].className = proj_tabs[i].className.replace(" active", "");
    proj_tabs[i].style.display = "none";
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  document.getElementById(fileName).style.display = "block";

  evt.currentTarget.className += " active";
}
