/*Write a function that takes in the string and the list of dog names, loops through 
        the list and checks that the current name is in the string passed in. The output should be:
        "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
        
        let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
        let dog_names = ["Max","HAS","PuRple","dog"]
// */

    
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
    let dog_names = ["Max", "HAS", "PuRple", "dog"];
    
    findDogNames(dog_string, dog_names);

    function findDogNames(dog_string, dog_names) {
        let found = false;
        for (let i = 0; i < dog_names.length; i++) {
            if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
                console.log("Matched " + dog_names[i]);
                found = true;
        if (!found) {
                        console.log("No Matches");
                }
        }       
        }
}

/*Write a fucntion that takes in an array and removes every even index with a splice, and replaces it with the string "even index" */ 
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"] function replaceEvens(arr){ //code goes here } 
//Expected output 
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function replaceEvens(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                arr.splice(i, 1, "even index");
            }
        }
        return arr;
    }
    
    let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
    console.log("Given arr =", arr);
    arr = replaceEvens(arr);
    console.log("Output arr =", arr);