

const source = $('#apart-template').html();
const template = Handlebars.compile(source)


$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $('#park-y').is(":checked")
    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate,parking)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty();
    const newHTML = template({data: apartments});
    $('#results').append(newHTML);
    if(apartments=="") alert('No Matching Results')
}

renderApts(apartments) //renders apartments when page loads