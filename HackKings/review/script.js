var product = document.getElementById("Prod")[0].value;
var company = document.getElementsById("Comp")[0].value;

var jcontent = {
  polarity: 5,
  positivity: 5,
  negativity: 0,
  positive: ['happy', 'positive', 'good'],
  negative: []
}
var output = document.getElementById('output');
 
var report = "";
 
for (var i = 0; i < 3; i++) {
	report += "Report for " + company;
    report += "  This was " + jcontent.positive[i] + ".";
}
 
output.innerHTML = report;