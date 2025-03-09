function difference() {
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var message = document.getElementById('message');

    if (!startDate || !endDate) {
        message.textContent = "Please select from both dates.";
        return;
    }

    var start = new Date(startDate);
    var end = new Date(endDate);
    var differenceInMillis = Math.abs(end - start); 

    var differenceInDays = differenceInMillis / (1000 * 3600 * 24);
    message.textContent = `The difference is ${differenceInDays} days.`;
}
