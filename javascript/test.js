function showContent(contentId){
//Hiding all Content Sections

document.querySelectorAll('.content').forEach(function(section){
  section.style.display='none';
});


//show the selected content section
document.getElementById(contentId).style.display='block';
};

function submission(){
  let firstname=document.getElementById('firstname').value;
  let lastname=document.getElementById('lastname').value;
  let fullname= firstname + " " + lastname;
  alert(`Thank ${fullname} for reaching out.I'll get back to you as soon as possible!`);
}
//  $('body').scrollspy({ target: '#navbar', offset: 70 });