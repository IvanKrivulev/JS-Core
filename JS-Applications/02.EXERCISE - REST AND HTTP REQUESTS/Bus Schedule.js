function solve() {

    let nextStopId = "depot";
    let currentStopName;

    function depart() {
        $('#depart').attr("disabled", true);

        $.get("https://judgetests.firebaseio.com/schedule/" + nextStopId + ".json")
            .then(nextStop)
            .catch(displayError);
    }
    
    function nextStop(res) {
        $("#info").text(`Next stop is: ${res.name}`);
        currentStopName = res.name;
        nextStopId = res.next;
        $("#arrive").attr('disabled', false);
    }
    
    function arrive() {
        $('#arrive').attr("disabled", true);
        $('#info').text(`Arriving at ${currentStopName}`);
        $('#depart').attr('disabled', false);
    }
    
    function displayError() {
        $("#info").text('Error!');
        $("#depart").attr('disabled', true);
        $("#arrive").attr('disabled', true);
    }


    return {
        depart,
        arrive
    };
}
let result = solve();