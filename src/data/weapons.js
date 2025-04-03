const weapons = [
    { 
      id: 1, 
      image: `${process.env.PUBLIC_URL}/assets/images/Net.png`, 
      name: "Net", 
      description: "Fast, agile, relies on trapping opponents. Best against those with heavy armor." 
    },
    { 
      id: 2, 
      image: `${process.env.PUBLIC_URL}/assets/images/pugio.png`, 
      name: "Pugio", 
      description: "A small weapon, used typically as a backup. Best against shields."
    },
    { 
      id: 3, 
      image: `${process.env.PUBLIC_URL}/assets/images/trident.png`, 
      name: "Trident", 
      description: "Long, three-pronged trident used for stabbing. Best against Scutum."
    },
    { 
      id: 4, 
      image: `${process.env.PUBLIC_URL}/assets/images/spartha.png`, 
      name: "Spartha", 
      description: "A brutal weapon used to crush bones and armor with sheer force. Best against those with light armor." 
    },
  ];
  
  export default weapons;
  