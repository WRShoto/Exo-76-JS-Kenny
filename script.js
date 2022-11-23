let compteMort = document.getElementById('compteur');
let x = 1;
let redZone = document.createElement('div')
redZone.style.backgroundColor = 'red'
redZone.style.width = '50px'
redZone.style.height = '100%'
document.getElementById('viewport').append(redZone)


document.body.addEventListener('keydown', function (event) {


    console.log(event.key)

    //right
    if (event.key === "q") {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
        if (t < 40) {
            alert("au mon dieux ils ont tuer kenny")
            document.getElementById("kenny").style.left = "200px";
            document.getElementById("kenny").style.top = "200px";
            console.log(x)
            ++x
            compteMort.innerHTML = x.toString()
        }
    }



    //left
    else if (event.key === "d") {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
        if (t > 470) {

        } else {
            document.getElementById('kenny').style.left = t + 'px';
        }
    }


    //down
    else if (event.key === "s") {

        let t = parseInt(document.getElementById('kenny').style.top);
        t = t + 10;
        if (t > 470) {

        } else {
            document.getElementById('kenny').style.top = t + 'px';
        }
    }

    //up
    else if (event.key === "z") {
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t - 10;
        if (t < 0) {

        } else {
            document.getElementById('kenny').style.top = t + 'px';
        }
    }
});


//let kenny = document.getElementById('kenny');
//let up = document.getElementById('up');
//let right = document.getElementById('right');
//let down= document.getElementById('down');
//let left = document.getElementById('left');

