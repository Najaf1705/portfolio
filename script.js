const menu=document.getElementById("icons");
menu.addEventListener("click",()=>{
  document.getElementById("imen").classList.toggle("fa-xmark")
  document.getElementById("imen").classList.toggle("fa-bars")
})

const tablinks=document.getElementsByClassName("tablinks")
const tabcontents=document.getElementsByClassName("tab-content")
const imageSources = ['cer.gif', 'skills.gif', 'soft.gif'];
function opentab(tab){
  const img = tab == 'qual' ? 0 : tab == 'skills' ? 1 : 2;
  for(i of tablinks){
    i.classList.remove("active-link")
  }
  for(j of tabcontents){
    j.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tab).classList.add("active-tab")
  document.getElementById("changeimage").src=imageSources[img]
}

imgdiv.addEventListener("click",()=>{
  imgdiv.classList.toggle("flip")
});

const prjs=document.getElementsByClassName("prjs");
const pinfo=document.getElementsByClassName("pinfo");
for(prj of prjs){
  prj.addEventListener("click",(e)=>{
    // console.log(e.currentTarget)
    event.currentTarget.children[1].classList.toggle("binfo")
  });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyT7cSkcaz5uqknfCiR5DLH6IZESMrSaVqm_rUWDT4Ma2TOKMtBfeO700ansQu-14EFNg/exec'
const form = document.forms['submit-to-google-sheet']
const mes=document.getElementById("messent");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      mes.innerHTML="Message sent successfully."
      setTimeout(()=>{
        mes.innerHTML=""
      },3000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})