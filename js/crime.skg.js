/**
 *  Crime In Thessaloniki Javascript Library
 */

function get_years() {
    return Object.keys(data.groupBy("year"));
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

/**
 * Other Code
 */

