// Creates a song name string variable, and then prompts the user for a play count integer variable.
// Depending on the number of plays inputted, the console outputs a different statement. This could have been done in a cleaner way but ehhhhhhhhhhh
let currentSong="With Hope Crossed On Our Hearts - Toby Fox"
let songPlays=Number(prompt("How many times has the song been played?"))
if (songPlays >= 50){
    let songPlaysString = "a lot"
    console.log(currentSong.concat("\nYou've played this song ", songPlaysString))
}
else if (songPlays >= 15) {
    let songPlaysString = "a bit"
    console.log(currentSong.concat("\nYou've played this song ", songPlaysString))
}
else {
    let songPlaysString = "a little"
    console.log(currentSong.concat("\nYou've played this song ", songPlaysString))
}


// Prompts their user on their opinion of a non-existent playlist, then uses strict operators to determine a response.
let isPlaylistGood = prompt("Is the playlist good? [y/n]") 
if (isPlaylistGood === "y") {
    console.log("The playlist is awesomesauce")
}
else {
    console.log("The playlist sucks bad")
}

// Prompts a user for song names, then creates a list from the given data and outputs the variable into the console.
let favSongs = []
let enterSong = prompt("Would you like to add a favorite song? [y/n]")
if (enterSong === "y"){
    while (favSongs.length < 10) {
        let songToAdd = prompt("Name the song, or enter 'q' to quit")
    if (songToAdd === "q") {
        break
    }
    else {
        favSongs.push(songToAdd)
    }}
}
console.log(favSongs)