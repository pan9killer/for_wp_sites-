let hairPrice = 200;
const step = 10;
let capsulePrice = 13;
let capsulePrice1 = 27;
let capsulePrice2 = 24;
let capsuleCountWork = 95;
document.getElementById("hairCount").innerHTML = 100;
document.getElementById("hairCount1").innerHTML = 100;
document.getElementById("hairCount2").innerHTML = 100;


document.addEventListener("DOMContentLoaded",()=>document.getElementById("hairWorkPrice").innerHTML = `${(10 * capsulePrice) + capsuleCountWork} $`);
document.addEventListener("DOMContentLoaded",()=>document.getElementById("hairWorkPrice1").innerHTML = `${(10 * capsulePrice1) + capsuleCountWork} $`);
document.addEventListener("DOMContentLoaded",()=>document.getElementById("hairWorkPrice2").innerHTML = `${(10 * capsulePrice2) + capsuleCountWork} $`);



function hairCountLess(totalId, countId)
{
    let currentCount = Number(document.getElementById(countId).innerHTML);
    if(currentCount <= 50){
        return
    }
    const hairCount = currentCount - step;
    document.getElementById(countId).innerHTML = hairCount;
    if(hairCount <= 90 && hairCount >= 50){
        capsuleCountWork = 70;
    }
    if(hairCount <= 140 && hairCount >= 100){
        capsuleCountWork = 95;
    }
    if(hairCount <= 190 && hairCount >= 150){
        capsuleCountWork = 120;
    }
    if(hairCount <= 240 && hairCount >= 200){
        capsuleCountWork = 145;
    }
    document.getElementById(totalId).innerHTML = `${((hairCount / 10) * capsulePrice) + capsuleCountWork} $`;
}
function hairCountMore(totalId, countId)
{
    let currentCount = Number(document.getElementById(countId).innerHTML);
    if(currentCount >= 300){
        return
    }
    const hairCount = currentCount + step;
    document.getElementById(countId).innerHTML = hairCount;
    if(hairCount <= 90 && hairCount >= 50){
        capsuleCountWork = 70;
    }
    if(hairCount <= 140 && hairCount >= 100){
        capsuleCountWork = 95;
    }
    if(hairCount <= 190 && hairCount >= 150){
        capsuleCountWork = 120;
    }
    if(hairCount <= 240 && hairCount >= 200){
        capsuleCountWork = 145;
    }
    document.getElementById(totalId).innerHTML = `$${((hairCount / 10) * capsulePrice) + capsuleCountWork} $`;
}



function hairCountLess1(totalId1, countId1)
{
    let currentCount = Number(document.getElementById(countId1).innerHTML);
    if(currentCount <= 50){
        return
    }
    const hairCount = currentCount - step;
    document.getElementById(countId1).innerHTML = hairCount;
    if(hairCount <= 90 && hairCount >= 50){
        capsuleCountWork = 70;
    }
    if(hairCount <= 140 && hairCount >= 100){
        capsuleCountWork = 95;
    }
    if(hairCount <= 190 && hairCount >= 150){
        capsuleCountWork = 120;
    }
    if(hairCount <= 240 && hairCount >= 200){
        capsuleCountWork = 145;
    }
    document.getElementById(totalId1).innerHTML = `${((hairCount / 10) * capsulePrice1) + capsuleCountWork} $`;
}
function hairCountMore1(totalId1, countId1)
{
    let currentCount = Number(document.getElementById(countId1).innerHTML);
    if(currentCount >= 300){
        return
    }
    const hairCount = currentCount + step;
    document.getElementById(countId1).innerHTML = hairCount;
    if(hairCount <= 90 && hairCount >= 50){
        capsuleCountWork = 70;
    }
    if(hairCount <= 140 && hairCount >= 100){
        capsuleCountWork = 95;
    }
    if(hairCount <= 190 && hairCount >= 150){
        capsuleCountWork = 120;
    }
    if(hairCount <= 240 && hairCount >= 200){
        capsuleCountWork = 145;
    }
    document.getElementById(totalId1).innerHTML = `$${((hairCount / 10) * capsulePrice1) + capsuleCountWork} $`;
}




function hairCountLess2(totalId, countId)
{
    let currentCount = Number(document.getElementById(countId).innerHTML);
    if(currentCount <= 50){
        return
    }
    const hairCount = currentCount - step;
    document.getElementById(countId).innerHTML = hairCount;
    if(hairCount <= 90 && hairCount >= 50){
        capsuleCountWork = 70;
    }
    if(hairCount <= 140 && hairCount >= 100){
        capsuleCountWork = 95;
    }
    if(hairCount <= 190 && hairCount >= 150){
        capsuleCountWork = 120;
    }
    if(hairCount <= 240 && hairCount >= 200){
        capsuleCountWork = 145;
    }
    document.getElementById(totalId).innerHTML = `${((hairCount / 10) * capsulePrice2) + capsuleCountWork} $`;
}
function hairCountMore2(totalId, countId)
{
    let currentCount = Number(document.getElementById(countId).innerHTML);
    if(currentCount >= 300){
        return
    }
    const hairCount = currentCount + step;
    document.getElementById(countId).innerHTML = hairCount;
    if(hairCount <= 90 && hairCount >= 50){
        capsuleCountWork = 70;
    }
    if(hairCount <= 140 && hairCount >= 100){
        capsuleCountWork = 95;
    }
    if(hairCount <= 190 && hairCount >= 150){
        capsuleCountWork = 120;
    }
    if(hairCount <= 240 && hairCount >= 200){
        capsuleCountWork = 145;
    }
    document.getElementById(totalId).innerHTML = `$${((hairCount / 10) * capsulePrice2) + capsuleCountWork} $`;
}

