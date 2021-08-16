const darkableElems = {
    id: ['trlBox'],
    class: [
        'ctrlBox',
        'rotPlus',
        'rotMinus',
        'rotAxis',
        'zAxis',
        'yAxis',
        'xAxis'
    ],
    now: false
}

function toggleDarkMode() {
    if(darkableElems.now) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }

    darkableElems.id.forEach((elem) => {
        var found = document.getElementById(elem);
        if(darkableElems.now) {
            found.classList.remove('dark');
        } else {
            found.classList.add('dark');
        }
    })

    darkableElems.class.forEach((cls) =>  {
        var elems = document.getElementsByClassName(cls)
        for(let elem of elems) {
            if(darkableElems.now) {
                elem.classList.remove('dark');
            } else {
                elem.classList.add('dark');
            }
        }
    })

    darkableElems.now = !darkableElems.now;
}



window.onload = function() {
    document.getElementById('darkBox').onclick = toggleDarkMode;
}