/* ------------------------------------------ *
 |  Crime In Thessaloniki Javascript Library  |
 * ------------------------------------------ */

/**
 * Returns an array with all the available years.
 */

function get_years() {
    return Object.keys(data.groupBy("year"));
}

/**
 * Returns a double array with all crime categories sorted alphabetically
 * by name and matched with their crimeid value.
 *
 * e.g. [ ["Rape, "4"], [ ... ], ... ]
 */
function get_crime_types() {
    crimes = Array();
    label = "";
    crime_types = data.findAll({year: "2014"}).sortBy("level0");
    crime_types.forEach(function(item) {
        label = item["level0"];
        if(item["level1"] != "-")
            label = label + " / " + item["level1"];
        if(item["level2"] != "-")
            label = label + " / " + item["level2"];
        crimes.push([label.trim(),item["crimeid"]]);
    });
    return crimes;
}

function get_max_year_for_crime(crimeid) {

}


/** crime, max_year, min_year, avg */
function print_crime_table() {

}
















function get_years_menu() {
    years = get_years();
    count = 1;
    menu = "";
    years.forEach(function(item) {
        if(count != years.length) {
            menu = menu + '<a href="#">' + item + '</a> | ';
        } else {
            menu = menu + '<a href="#">' + item + '</a>';
        }
        count++;
    });
    document.write(menu);
}

function crime_by_year_headers() {
    headers = Object.keys(data[0]);
    htext = "<th>";
    headers.forEach(function(item) {
        htext = htext + '<td>' + item + '</td>'
    });
    htext = htext + "</th>";
    return htext;
}

function crime_by_year_body(year) {
    results = data.findAll({year: year});
    btext = "<tr>";
    headers.forEach(function(item) {
        btext = btext + '<td>' + item + '</td>'
    });
    htext = btext + "/tr>";
    return btext;
}

function html_output_crime_by_year(year) {
    document.write("<table>");
    document.write(crime_by_year_headers);
    document.write(crime_by_year_body(year));
    socument.write("</table>");
}
