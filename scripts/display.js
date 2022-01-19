const display = (() => {

    const renderMobs = function (mobArr) {
        removeMobs()
        let container = document.getElementById('gameboardContainer')
        let host =
            // console.log(host, 'this is the children')
            mobArr.forEach(mob => {
                let mobDiv = document.createElement('div')
                mobDiv.classList.add(mob.type, 'mobs')
                mobDiv.id = mob.uniqId
                let host = document.getElementById(mob.position.join('-'))

                host.appendChild(mobDiv)
                // container.appendChild(mobDiv)
            });
    }

    const removeMobs = function () {
        let container = document.getElementById('gameboardContainer')
        let mobDivs = container.querySelectorAll('.mobs')
        mobDivs.forEach(mob => mob.remove())
    }



    const render = function (board) {
        let parent = document.getElementById('gameboardContainer')
        board.forEach((arr) => {
            let row = document.createElement('div')
            row.classList.add('flexRow')
            arr.forEach((itm) => {
                // console.log(itm)
                terrainDiv(row, 'terra', itm.type, `${itm.yPos}-${itm.xPos}`)

            })
            parent.appendChild(row)
        })
    }

    const renderText = (str) => {
        let container = document.getElementById('activity')
        let newText = document.createElement('p')
        newText.innerText = `${str}`
        container.prepend(newText)
    }

    const terrainDiv = (rowParent, size, type, id) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add(size, type)
        newDiv.id = id
        rowParent.appendChild(newDiv)

    }


    return { render, renderMobs, renderText }
})();

