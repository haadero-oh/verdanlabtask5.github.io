function darkMode(){
    var body = document.body;
    var header = document.getElementById("header");
    body.classList.toggle("darkmode");
    header.classList.toggle("darkmode-header");
    darkmode2();
}
function darkmode2(){
    var grid1 = document.getElementById("grid1")
    var grid2 = document.getElementById("grid2")
    var grid3 = document.getElementById("grid3")
    var grid4 = document.getElementById("grid4")
    grid1.classList.toggle("darkmode-gridcontents");
    grid2.classList.toggle("darkmode-gridcontents");
    grid3.classList.toggle("darkmode-gridcontents");
    grid4.classList.toggle("darkmode-gridcontents");
}