/**
 * PhantomJS script. All APIs provided by PhantomJS.
 * http://phantomjs.org/api/
 */

var system = require("system"),
    page = require("webpage").create(),
    fs = require("fs");

page.open("index.html", function (status) {

    if (status == "fail") {
        page.close();
        phantom.exit(1);
        return;
    }
    // Set the PDF paper size
    page.paperSize = {width: '1650px', height: '2000px', border: '35px'};

    // Render the page
    page.render("dconnolly.pdf");
    page.close();
    phantom.exit(0);
});
