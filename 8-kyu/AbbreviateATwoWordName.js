//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//Solution
function abbrevName(name){
    name=name.split(" ")
      return `${(name[0].charAt(0).toUpperCase())}.${name[1].charAt(0).toUpperCase()}`
      
    }