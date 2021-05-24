const traitLst = ["", "Read a Morning Mantra", "Stretch",
                        "Drink Water", "Get Some Sun", "Go for a Walk", 
                        "Visualize Your Day", "Pray and Read the Bible/Quran", 
                        "Meditate", "Read an Inspirational Quote", "Smile", "Read a Morning Mantra", "Stretch",
                        "Drink Water", "Get Some Sun", "Go for a Walk", 
                        "Visualize Your Day", "Pray and Read the Bible/Quran", 
                        "Meditate", "Read an Inspirational Quote", "Smile", "Read a Morning Mantra", "Stretch",
                        "Drink Water", "Get Some Sun", "Go for a Walk", 
                        "Visualize Your Day", "Pray and Read the Bible/Quran", 
                        "Meditate", "Read an Inspirational Quote", "Smile", "smile"];

let today =  new Date();
let day = today.getDate();
let trait = "";
const traitOfTheDay = () => { 
    if (day) {
        trait = `You should ${traitLst[day].toLowerCase()}, to become more active for the day!`;
    } else {
        trait = `Be what you can!`;
    }
    document.getElementById("load").innerHTML = trait;
}
