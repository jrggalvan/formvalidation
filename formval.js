function save() {
    var eventtype = document.getElementById('eventypeselected').value;
    var eventtitle = document.getElementById('eventtilegiven').value;
    var datefrom = document.getElementById('datefrom').value;
    var dateto = document.getElementById('dateto').value;
    var postingdate = document.getElementById('postingdateselected').value;

    if (eventtype == "0") {
        alert('Please Select an Event Type.');
    }
    else if (eventtitle == "") {
        alert('Please fill out the Event Title.');
    }
    else if (dateto < datefrom) {
        alert('Invalid Date. Date From should be before Date To');
    }
    else if (datefrom == "" || dateto == "" || postingdate == "") {
        alert('Error. Empty Date/s');
    }
    else if (postingdate > datefrom) {
        alert('Invalid Date. Posting Date should be before Date From');
    }
    else {
        alert("Your data has been saved");
        alert("Event Description \nEvent Type: " + eventtype + "\nEvent Title: " + eventtitle + "\nDate From: "
            + datefrom + "\nDate To: " + dateto + "\nPosting Date: " + postingdate);
    }
}

function cancel() {
    alert("Your data has been cancelled");
}