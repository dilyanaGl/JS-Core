function solve() {
let str = document.getElementById('str').value;

    let message = flight(str);
    document.getElementById('result').textContent = message;
    
    function flight(str){

    let parts = str.split(", ");
    let text = parts[0];
    let criteria = parts[1];
let message = '';

switch(criteria){
    case "name":
    message = `Mr/Ms, ${extractName(text)}, have a nice flight!`;
    break;
    case "flight":
    let airports = extractAirport(text);
    message = `Your flight number ${extractFlight(text)} is from ${airports[0]} to ${airports[1]}.`;
    break;
    case "company":
    message = `Have a nice flight with ${extractCompany(text)}.`;
    break; 
    case "all":
    message = `${extractAll(text)}`;
    break;
}

return message;

function extractAirport(text){
    let airportPattern = /\s[A-Z]{3}\/[A-Z]{3}\s/gm;
    let airport = airportPattern.exec(text);
    return airport[0].trim().split('/');
}

function extractCompany(text){
    let companyPattern = /-\s[A-Z]{1}[A-Za-z]*\*[A-Z]{1}[A-Za-z]*\s/gm;
    let company = companyPattern.exec(text);
    let companyName = company[0].replace('- ', '').replace('*', ' ').trim();
    return companyName;
}

function extractFlight(text){
    let flightPattern = /\s[A-Z]{1,3}[0-9]{1,5}\s/gm;
    let flight = flightPattern.exec(text);
    return flight[0].replace('- ', '').replace('*', ' ').trim();
}

function extractName(text){
    let namePattern = /\s([A-Z]{1}[A-Za-z]*)(-|\s)([A-Z]{1}[A-Za-z]*\.)?(-|\s)?([A-Z]{1}[A-Za-z]*)\s/;
    let name = namePattern.exec(text);
    return name[0].trim().split('-').join(' ');
}

function extractAll(text){
let name = extractName(text);
let company = extractCompany(text);
let airport = extractAirport(text);
let flight = extractFlight(text);

return `Mr/Ms, ${name}, your flight number ${flight} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`;

}
}

}

function flight(str){

    let parts = str.split(" , ");
    let text = parts[0];
    let criteria = parts[1];
let message = '';

switch(criteria){
    case "name":
    message = `Mr/Ms, ${extractName(text)}, have a nice flight!`;
    break;
    case "flight":
    let airports = extractAirport(text);
    message = `Your flight number ${extractFlight(text)} is from ${airports[0]} to ${airports[1]}.`;
    break;
    case "company":
    message = `Have a nice flight with ${extractCompany(text)}.`;
    break; 
    case "all":
    message = `${extractAll(text)}`;
    break;
}

console.log(message);

function extractAirport(text){
    let airportPattern = /\s[A-Z]{3}\/[A-Z]{3}\s/gm;
    let airport = airportPattern.exec(text);
    return airport[0].trim().split('/');
}

function extractCompany(text){
    let companyPattern = /-\s[A-Z]{1}[A-Za-z]*\*[A-Z]{1}[A-Za-z]*\s/gm;
    let company = companyPattern.exec(text);
    let companyName = company[0].replace('- ', '').replace('*', ' ').trim();
    return companyName;
}

function extractFlight(text){
    let flightPattern = /\s[A-Z]{1,3}[0-9]{1,5}\s/gm;
    let flight = flightPattern.exec(text);
    return flight[0].replace('- ', '').replace('*', ' ').trim();
}

function extractName(text){
    let namePattern = /\s([A-Z]{1}[A-Za-z]*)(-|\s)([A-Z]{1}[A-Za-z]*\.)?(-|\s)?([A-Z]{1}[A-Za-z]*)\s/;
    let name = namePattern.exec(text);
    
    return name[0].trim().split('-').join(' ');
}

function extractAll(text){
let name = extractName(text);
let company = extractCompany(text);
let airport = extractAirport(text);
let flight = extractFlight(text);

return `Mr/Ms, ${name}, your flight number ${flight} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`;

}
}



flight("ahah Valid-V.-Name )*))&&ba SOF/AIR ela**  F2  - X*Y -op pa- SOF/AIR //_-  T12G12   STD08:45  STA09:35 , name");

