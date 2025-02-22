function showContent(contentId){
//Hiding all Content Sections

document.querySelectorAll('.content').forEach(function(section){
  section.style.display='none';
});



//show the selected content section
document.getElementById(contentId).style.display='block';
}