function makeAlbum(artist: string, title: string, tracks?: number): object {
    let album: object = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }

    return album;
}
let album1 = makeAlbum("Muhammad Iqbal", "Kulliyat-e-Iqbal", 10);
let album2 = makeAlbum("Mirza Asadullah Khan Ghalib", "Diwan e Ghalib", 12);
let album3 = makeAlbum("Parveen Shakir", "Khushbu");
console.log(album1);
console.log(album2);
console.log(album3);
