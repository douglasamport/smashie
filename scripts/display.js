const display = (() => {

    const renderMobs = function (mobArr) {
        removeMobs()
        let container = document.getElementById('gameboardContainer')
        let rowNodes = container.children
        let rowsArr = [...rowNodes]
        mobArr.forEach(mob => {
            let hostTerra = [...(rowsArr[mob.position[0]].children)][mob.position[1]]
            let mobDiv = document.createElement('div')
            mobDiv.classList.add(mob.type, 'mobs')
            hostTerra.appendChild(mobDiv)
        });
    }

    const removeMobs = function() {
        let container = document.getElementById('gameboardContainer')
        let mobDivs = container.querySelectorAll('.mobs')
        mobDivs.forEach(mob => mob.remove())
    }



    
    const render = function (board) {
        let parent = document.getElementById('gameboardContainer')
        board.forEach(arr => {
            let row = document.createElement('div')
            row.classList.add('flexRow')
            arr.forEach(itm => {
                // console.log(itm)
                terrainDiv(row, 'terra', itm.type)
            })
            parent.appendChild(row)
        })
    }

    const terrainDiv = (rowParent, size, type) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add(size, type)
        rowParent.appendChild(newDiv)

    }


    return { render, renderMobs }
})();

