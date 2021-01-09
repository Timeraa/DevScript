"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function outline(stringArray, splitter) {
    var highestLength = 0;
    stringArray.forEach(function (message) {
        if (message.split(splitter)[0].length > highestLength)
            highestLength = message.split(splitter)[0].length;
    });
    stringArray.forEach(function (message, index) {
        if (message.split(splitter)[0].length !== highestLength) {
            var difference = highestLength - message.split(splitter)[0].length;
            var newMessage = message.split(splitter)[0];
            for (var i = 0; i < difference; i++) {
                newMessage += " ";
            }
            newMessage += splitter + message.split(splitter)[1];
            stringArray[index] = newMessage;
        }
    });
}
exports.default = outline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGluZVN0cmluZ3MuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInV0aWwvZnVuY3Rpb25zL291dGxpbmVTdHJpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsU0FBd0IsT0FBTyxDQUFDLFdBQXFCLEVBQUUsUUFBZ0I7SUFDdEUsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBRXRCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1FBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBYTtZQUNwRCxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7UUFDbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxhQUFhLEVBQUU7WUFDeEQsSUFBTSxVQUFVLEdBQUcsYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JFLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsVUFBVSxJQUFJLEdBQUcsQ0FBQzthQUNsQjtZQUNELFVBQVUsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBbkJELDBCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcGFyYW0gc3RyaW5nQXJyYXkgVGhlIGFycmF5IG9mIHN0cmluZ3MgeW91IHdhbnQgdG8gb3V0bGluZVxyXG4gKiBAcGFyYW0gc3BsaXR0ZXIgVGhlIGtleSBvZiB3aGVyZSBpdCBuZWVkcyB0byBvdXRsaW5lIHRvXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvdXRsaW5lKHN0cmluZ0FycmF5OiBzdHJpbmdbXSwgc3BsaXR0ZXI6IHN0cmluZykge1xyXG5cdGxldCBoaWdoZXN0TGVuZ3RoID0gMDtcclxuXHQvLyogQ2hlY2sgaWYgbWVzc2FnZSBsZW5ndGggaXMgaGlnaGVyIHRoZW4gaGlnaGVzdExlbmd0aCwgaWYgc28gc2V0LlxyXG5cdHN0cmluZ0FycmF5LmZvckVhY2goKG1lc3NhZ2UpID0+IHtcclxuXHRcdGlmIChtZXNzYWdlLnNwbGl0KHNwbGl0dGVyKVswXS5sZW5ndGggPiBoaWdoZXN0TGVuZ3RoKVxyXG5cdFx0XHRoaWdoZXN0TGVuZ3RoID0gbWVzc2FnZS5zcGxpdChzcGxpdHRlcilbMF0ubGVuZ3RoO1xyXG5cdH0pO1xyXG5cdC8vKiBBZGQgc3BhY2VzIHRvIHRoZSBlcnJvciBtZXNzYWdlcyB0byB0aGV5IG1hdGNoIHRoZSBoaWdoZXN0TGVuZ3RoLlxyXG5cdHN0cmluZ0FycmF5LmZvckVhY2goKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcblx0XHRpZiAobWVzc2FnZS5zcGxpdChzcGxpdHRlcilbMF0ubGVuZ3RoICE9PSBoaWdoZXN0TGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGRpZmZlcmVuY2UgPSBoaWdoZXN0TGVuZ3RoIC0gbWVzc2FnZS5zcGxpdChzcGxpdHRlcilbMF0ubGVuZ3RoO1xyXG5cdFx0XHRsZXQgbmV3TWVzc2FnZSA9IG1lc3NhZ2Uuc3BsaXQoc3BsaXR0ZXIpWzBdO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZlcmVuY2U7IGkrKykge1xyXG5cdFx0XHRcdG5ld01lc3NhZ2UgKz0gXCIgXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0bmV3TWVzc2FnZSArPSBzcGxpdHRlciArIG1lc3NhZ2Uuc3BsaXQoc3BsaXR0ZXIpWzFdO1xyXG5cdFx0XHRzdHJpbmdBcnJheVtpbmRleF0gPSBuZXdNZXNzYWdlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbiJdfQ==