const track = (artist_, album_, noOfTracks_) => {
    obj = {
        artist: artist_,
        album: album_,
    }

    if (noOfTracks_) {
        obj.noOfTracks = noOfTracks_
    }

    return obj
}


const firstObj = track('Wahaj', 'Web3 is good')
console.log(firstObj)

const secondObj = track('Arham', 'Web2 is goof', 10)
console.log(secondObj)
