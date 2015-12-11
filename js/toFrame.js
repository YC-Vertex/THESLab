if (document.title == "简介 - THESLab") {
  parent.window.frames["topFrame"].location = "about:blank";
  parent.document.getElementById("frameSet").rows = "0,*"
}

else {
  parent.window.frames["topFrame"].location = "top.html";
  parent.document.getElementById("frameSet").rows = "64,*"
}
