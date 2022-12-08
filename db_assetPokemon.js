const dbSearch = [
    {
        nama: 'Bulbasur',
        element: ['Daun', 'Racun'],
        gambar: "./assetPokemon/001.png"
    },
    {
        nama: 'Ivysaur',
        element: ['Daun', 'Racun'],
        gambar: "./assetPokemon/002.png"
    },
    {
        nama: 'Venusaur',
        element: ['Daun', 'Racun'],
        gambar: "./assetPokemon/003.png"
    },
    {
        nama: 'Charmender',
        element: ['Fire'],
        gambar: "./assetPokemon/004.png"
    },
    {
        nama: 'Charmeleon',
        element: ['Fire'],
        gambar: "./assetPokemon/005.png"
    },
    {
        nama: 'Charizard',
        element: ['Fire'],
        gambar: "./assetPokemon/006.png"
    },
    {
        nama: 'Squirtel',
        element: ['Water'],
        gambar: "./assetPokemon/007.png"
    },
    {
        nama: 'Wartortle',
        element: ['Water'],
        gambar: "./assetPokemon/008.png"
    },
    {
        nama: 'Blastoise',
        element: ['Water'],
        gambar: "./assetPokemon/009.png"
    },
    {
        nama: 'Mega Absol',
        element: ['Dark'],
        gambar: "./asset/359.png"
    },
    {
        nama: 'Regigigas',
        element: ['Normal'],
        gambar: "./asset/489.png"
    },

    {
        nama: 'Glaceon',
        element: ['Ice'],
        gambar: "./asset/471.png"
    },

    {
        nama: 'Moltress',
        element: ['Fire'],
        gambar: "./asset/146.png"
    },

    {
        nama: 'Articuno',
        element: ['Ice'],
        gambar: "./asset/144.png"
    },
    {
        nama: 'Zapdos',
        element: ['Electric'],
        gambar: "./asset/145.png"
    },

    {
        nama: 'Lugia',
        element: ['Flying', 'Pyschic'],
        gambar: "./asset/249.png"
    },

    {
        nama: 'Primal Reversion Groundon',
        element: ['Ground', 'Fire'],
        gambar: "./asset/383.png"
    },

    {
        nama: 'Primal Reversion Kyogre',
        element: ['Water'],
        gambar: "./asset/382.png"
    },

    {
        nama: 'Mewtwo X',
        element: ['Psychic', 'Fighiting'],
        gambar: "./asset/150_x.png"
    },

    {
        nama: 'Eternatus',
        element: ['Poison', 'Dragon'],
        gambar: "./asset/890.png"
    },

    {
        nama: 'Zacian',
        element: ['Fairy', 'Steel'],
        gambar: "./asset/888.png"
    },

    {
        nama: 'Zamazenta',
        element: ['Steel'],
        gambar: "./asset/889.png"
    },

    {
        nama: 'Resolute  Form',
        element: ['Water', 'Fighting'],
        gambar: "./asset/647.png"
    },
    {
        nama: 'Quaxly',
        element: ['Water'],
        gambar: "./asset/quaxly.png"
    },
    {
        nama: 'Fuecoco',
        element: ['fire'],
        gambar: "./asset/fuecoco.png"
    },
    {
        nama: 'Sprigatito',
        element: ['grass'],
        gambar: "./asset/sprigatito.png"
    }
]


const db_home = [
    {
        nama: 'Resolute  Form',
        element: ['Water', 'Fighting'],
        gambar: "./asset/647.svg"
    },
    {
        nama: 'Mega Absol',
        element: ['Dark'],
        gambar: "./asset/359.svg"
    },
    {
        nama: 'Regigigas',
        element: ['Normal'],
        gambar: "./asset/489.svg"
    },

    {
        nama: 'Glaceon',
        element: ['Ice'],
        gambar: "./asset/471.svg"
    },

    {
        nama: 'Moltress',
        element: ['Fire'],
        gambar: "./asset/146.svg"
    },
    {
        nama: 'Articuno',
        element: ['Ice'],
        gambar: "./asset/144.svg"
    },
    {
        nama: 'Mewtwo X',
        element: ['Psychic', 'Fighiting'],
        gambar: "./asset/150_x.svg"
    },

    {
        nama: 'Zapdos',
        element: ['Electric'],
        gambar: "./asset/145.svg"
    },

    {
        nama: 'Lugia',
        element: ['Flying', 'Pyschic'],
        gambar: "./asset/249.svg"
    },

    {
        nama: 'Primal Reversion Groundon',
        element: ['Ground', 'Fire'],
        gambar: "./asset/383.svg"
    },

    {
        nama: 'Primal Reversion Kyogre',
        element: ['Water'],
        gambar: "./asset/382.svg"
    },

    {
        nama: 'Eternatus',
        element: ['Poison', 'Dragon'],
        gambar: "./asset/890.svg"
    },

    {
        nama: 'Zacian',
        element: ['Fairy', 'Steel'],
        gambar: "./asset/888.svg"
    },

    {
        nama: 'Zamazenta',
        element: ['Steel'],
        gambar: "./asset/889.svg"
    }


]
console.log(dbSearch.length)
for (let i=0; i < dbSearch.length; i++) {
    // console.log(dbSearch[i].nama);
    document.getElementById('gambar').setAttribute('src',dbSearch[i].gambar)
    console.log(document.getElementById('gambar'));
}



