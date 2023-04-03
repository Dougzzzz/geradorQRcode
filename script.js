function gerarQRCode() {
  // Coletar as informações do contato
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var endereco = document.getElementById("endereco").value;
  
  // Formatar as informações do contato em um arquivo vCard
  var vcard = "BEGIN:VCARD\n" +
              "VERSION:3.0\n" +
              "N:" + nome + "\n" +
              "TEL;TYPE=CELL:" + telefone + "\n" +
              "ADR;TYPE=HOME:" + endereco + "\n" +
              "END:VCARD";
  
  // Codificar o arquivo vCard em base64
  var encoded = btoa(vcard);
  
  // Gerar o código QR
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "data:text/vcard;base64," + encoded,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}
