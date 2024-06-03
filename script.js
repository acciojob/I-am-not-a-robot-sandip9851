//your code here
const imageContainer = document.querySelector("#imageConatiner")
imageContainer.className = "flex"
const buttonContainer = document.querySelector("#btnConatiner")
const imagesArr = ["img1","img2","img3","img4","img5"]


let ramdonImge = imagesArr[parseInt(Math.random()*imagesArr.length)]

imagesArr.push(ramdonImge);



//console.log(imagesArr)
let suffleArr = [];
while(suffleArr.length < 6){
  let randomINdex = parseInt(Math.random()*imagesArr.length)
  let randomImg = imagesArr[randomINdex];
  //console.log(randomImg)
  if(imagesArr[randomINdex] == -1){
    continue;
  }
 
  suffleArr.push(randomImg);
  imagesArr[randomINdex] = -1;
}

let id = 1;
for(let valu of suffleArr){
  let imageTag = document.createElement("img");
  imageTag.className = valu;
  imageTag.id = `pic${id++}`
  imageContainer.append(imageTag)

  imageTag.addEventListener("click",checkImg)
}
/*let h3 = document.createElement("h3");
h3.id = "h"
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
imageContainer.append(h3)*/


let count = 0;


function checkImg (eventDetails){

  let selectedImage = eventDetails.target;
  
  if( !selectedImage.classList.contains("selected")){
    count++;
   // console.log(count)
   selectedImage.classList.add("selected")
   

  }


  
/*if(preClassName!==selectedImage.className){

}*/
console.log(count)

  if(count === 1 && !document.querySelector("#reset")){
    let btn = document.createElement("button");
    btn.id = "reset";
    btn.innerText = "reset"
    buttonContainer.append(btn);
    btn.addEventListener("click", ()=>{
      let clickedImg = document.querySelectorAll(".selected")

      for(let t of clickedImg){
        t.classList.remove("selected")
      }
      let reset  = document.getElementById("reset");
      let verify = document.getElementById("verify")
      reset.remove();
      if(verify != null){
        verify.remove();
      }

      count = 0

    })
  }

  if(count === 2 && !document.querySelector("#verify")){
   let btn = document.createElement("button");
    btn.id = "verify";
    btn.innerText = "verify"
    buttonContainer.append(btn);


    btn.addEventListener("click",()=>{
      let para = document.createElement("p");
      para.id = para
      let selectedImage = document.querySelectorAll(".selected")
      let image1 = selectedImage[0].className.replace("selected","").trim();
      let image2 = selectedImage[1].className.replace("selected","").trim();
      if(image1 == image2){
        para.innerText = "You are a human. Congratulations!"
      }else{
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles"
      }
      buttonContainer.append(para);
      let verify = document.getElementById("verify");
      verify.remove();

    })
  }
  
  if(count > 2){
    let verify = document.getElementById("verify");
    verify.remove();
  }
}

/*let reset  = document.getElementById("reset");
reset.addEventListener("click",()=>{
  window.location.reload
})*/



