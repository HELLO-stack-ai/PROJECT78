var images=[
"https://images-na.ssl-images-amazon.com/images/I/51KNpAKei-L.jpg",
"WhatsApp Image 2021-02-28 at 3.19.40 PM.jpeg",
"NANA PHOTO.jpg",
"NANI PHOTO.jpg",
"TASLIM MAMA PHOTO.png",
"BADI MAMI PHOTO.png",
"ANUM PHOTO.jpg",
"WhatsApp Image 2021-02-28 at 3.00.53 PM.jpeg",
"CHOTI MAMI PHOTO.webp",
"MUMMY PHOTO.png",
"PAPA PHOTO.png"];

var word=[
  "FAMILY BOOK",
  "MOHAMMAD AAYAN",
  "NANA",
  "NANI",
  "TASLIM MAMA",
  "BADI MAMI",
  "ANUM",
  "JAWED MAMA",
  "CHOTI MAMI",
  "MUMMY",
  "PAPA"]
 var i=0;
function start(){
  i++;
var family_members=10;
if(i>family_members){
  i=0;
}
var updated_image=images[i];
document.getElementById("img1").src=updated_image;
var updated_names=word[i];
document.getElementById("display_name").innerHTML=updated_names;
} 




