function sidebar(){
let navbar_code_str = `
<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-black w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:220px;font-weight:bold;" id="mySidebar"><br>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft w3-hover-white" style="width:100%;font-size:22px">Close Menu</a>
  <div class="w3-container">
    <h3 class="w3-padding-64"><b>Kanomwan's<br>World</b></h3>
  </div>
  <div class="w3-bar-block">
    <a href="../index.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</a> 
    <a href="TOU.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Character</a> 
    <a href="UST.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">UST</a> 
    <a href="Contact.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Contact</a>
  </div>
</nav>

<!-- Top menu on small screens -->
<header class="w3-container w3-top w3-hide-large w3-black w3-xlarge w3-padding">
  <a href="javascript:void(0)" class="w3-button w3-black w3-margin-right w3-hover-white" onclick="w3_open()">☰</a>
  <span>Kanomwan's World</span>
</header>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large " onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
`
$('body').append(navbar_code_str);

}