function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    return album;
}
var album1 = makeAlbum("Muhammad Iqbal", "Kulliyat-e-Iqbal", 10);
var album2 = makeAlbum("Mirza Asadullah Khan Ghalib", "Diwan e Ghalib", 12);
var album3 = makeAlbum("Parveen Shakir", "Khushbu");
console.log(album1);
console.log(album2);
console.log(album3);
