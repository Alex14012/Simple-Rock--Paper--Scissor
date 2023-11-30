var mulai = confirm("Apakah Anda mau memulai permainan");

if(mulai == false){
    document.write("Terima kasih sudah mengunjungi")
}
    
else {

do{
    let Musuh = Math.floor(Math.random()*30) + 1;
    console.log(Musuh)

    let Peserta = prompt("Tulislah Batu, Gunting, Kertas (case sensitive)")

    if (Musuh <= 10)
        {
        Musuh = "Gunting";
        }

        else if (Musuh <= 20)
        {
        Musuh = "Batu";
        }
    
        else if (Musuh <= 30)
        {
        Musuh = "Kertas";
        }
    console.log(Musuh)

    if (Peserta == "Batu" && Musuh == "Gunting"){
        alert(`Selamat anda menang, musuh memilih ${Musuh}`);
    }

    else if (Peserta == "Gunting" && Musuh == "Kertas"){
        alert(`Selamat anda menang, musuh memilih ${Musuh}`);
    }

    else if (Peserta == "Kertas" && Musuh == "Batu"){
        alert(`Selamat anda menang, musuh memilih ${Musuh}`);
    }

    else if (Peserta == Musuh){
        alert(`Anda seri, musuh memilih ${Musuh}`);
    }

    else{
        alert(`Anda kalah, musuh memilih ${Musuh} atau anda mengetik ${Peserta}, maka tidak terdeteksi`)
    }

    var Mengulang = confirm("Apakah anda mau mengulang permainan?")

    if (Mengulang == false){
        document.write("Terima kasih sudah memainkan permainan ini!")
      }

} while (Mengulang == true)


 }
