function timer() {
    let seconds = 0, intervaId, isRunning = false;

    $('#start-timer').click(function () {
        if (!isRunning){
            isRunning = true;
            intervaId = setInterval(incrementTime, 1000);
        }
    });

    $('#stop-timer').click(function () {
        isRunning = false;
        clearInterval(intervaId);
    });
    
    function incrementTime() {
        seconds++;
        $('#hours').text(('0' + Math.trunc(seconds / 3600)).slice(-2));
        $('#minutes').text(('0' + Math.trunc((seconds / 60)) % 60).slice(-2));
        $('#seconds').text(('0' + Math.trunc(seconds % 60)).slice(-2));
    }
}
