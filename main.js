const source = $('#apart-template').html();
const template = Handlebars.compile(source);


$("button").on("click", function () {
    const address = $("#addr-input").val()
    const minPrice = $("#min-p-input").val()
    const maxPrice = $("#max-p-input").val()
    const minRooms = $("#min-r-input").val()
    const maxRooms = $("#max-r-input").val()
    const immediate = $("#immed-y")
    const parking = $('#park-y').is(":checked")
    const relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})



const renderApts = function (apartments) {
    $("#results").empty();
    const newHTML = template({ data: apartments });
    $('#results').append(newHTML);
    if (apartments == "") alert('No Matching Results') //If there are no apartments
}


renderApts(apartments) //Renders apartments when page loads for first time!