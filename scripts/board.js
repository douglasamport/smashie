class Board {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.boardArr = this.#buildArray(this.width, this.height)
    }
    #buildArray(width, height) {  
        let arr = new Array(height).fill(new Array(width).fill(null))
        arr = arr.map(array => array.map(itm => this.#terrainGenerator()))
        return arr
    }
    
    #terrainGenerator() {
        const terra = { 
            plains: { type: 'grass', color: '#90EE90'}, 
            water: { type: 'dirt', color: '#987654'} 
        }
        let keys = Object.keys(terra)
        let max = keys.length
        let rand = Math.floor(Math.random() * max)
        let key = keys[rand]
        return new Terrain(terra[key].type, terra[key].color)
    }
}