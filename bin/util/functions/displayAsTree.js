"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayAsTree(title, children, color) {
    console.log("" + title + ((children.length > 1
        ? "\n├─ " +
            children
                .slice(0, -1)
                .map(function (s) { return (color ? color(s) : s); })
                .join("\n├─ ")
        : "") +
        "\n╰─ " +
        (color ? color(children.slice(-1)[0]) : children.slice(-1)[0])));
}
exports.default = displayAsTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheUFzVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9mdW5jdGlvbnMvZGlzcGxheUFzVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLFNBQXdCLGFBQWEsQ0FDcEMsS0FBYSxFQUNiLFFBQWtCLEVBQ2xCLEtBQW1CO0lBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQ1YsS0FBRyxLQUFLLElBQ1AsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDbkIsQ0FBQyxDQUFDLE9BQU87WUFDUCxRQUFRO2lCQUNQLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ1osR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNOLE9BQU87UUFDUCxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDN0QsQ0FDRixDQUFDO0FBQ0gsQ0FBQztBQWxCRCxnQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHRpdGxlIFRoZSB0aXRsZS9oZWFkZXIgb2YgdGhlIHRyZWVcclxuICogQHBhcmFtIGNoaWxkcmVuIEFsbCB0aGUgYXJndW1lbnRzIGluIHRoZSB0cmVlXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciBvZiB0aGUgY2hpbGRyZW4gKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUFzVHJlZShcclxuXHR0aXRsZTogc3RyaW5nLFxyXG5cdGNoaWxkcmVuOiBzdHJpbmdbXSxcclxuXHRjb2xvcj86IGNoYWxrLkNoYWxrXHJcbikge1xyXG5cdGNvbnNvbGUubG9nKFxyXG5cdFx0YCR7dGl0bGV9JHtcclxuXHRcdFx0KGNoaWxkcmVuLmxlbmd0aCA+IDFcclxuXHRcdFx0XHQ/IFwiXFxu4pSc4pSAIFwiICtcclxuXHRcdFx0XHQgIGNoaWxkcmVuXHJcblx0XHRcdFx0XHRcdC5zbGljZSgwLCAtMSlcclxuXHRcdFx0XHRcdFx0Lm1hcCgocykgPT4gKGNvbG9yID8gY29sb3IocykgOiBzKSlcclxuXHRcdFx0XHRcdFx0LmpvaW4oXCJcXG7ilJzilIAgXCIpXHJcblx0XHRcdFx0OiBcIlwiKSArXHJcblx0XHRcdFwiXFxu4pWw4pSAIFwiICtcclxuXHRcdFx0KGNvbG9yID8gY29sb3IoY2hpbGRyZW4uc2xpY2UoLTEpWzBdKSA6IGNoaWxkcmVuLnNsaWNlKC0xKVswXSlcclxuXHRcdH1gXHJcblx0KTtcclxufVxyXG4iXX0=