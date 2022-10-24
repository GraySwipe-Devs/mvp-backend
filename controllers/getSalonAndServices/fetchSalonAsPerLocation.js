const Booking = require('../../models/booking.model');
var Heap = require('heap');

function calcDistance(location) {
    var dis = Math.pow(location[0],2) + Math.pow(location[1],2);
    return Math.sqrt(dis);
  }

function nearestResturantsWithHeap(totralRes,allLocations,toReturn) {
    let locs = allLocations.map(location => {
        return {loc: location, distance: calcDistance(location)};
    });
    return Heap.nsmallest(locs, toReturn, function(a, b) { return a.distance - b.distance; });
}
const fetchBookingRelatveToLocation = async(req,res) => {

}