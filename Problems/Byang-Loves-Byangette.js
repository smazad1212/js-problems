function whoLoves (str) {
  let name = str.split(' ')[2];
  switch(name) {
    case "Byang?":
      return "Byangette"
    case "Byangette?":
      return "Byang"

  }
}

whoLoves("Who loves Byangette?")
