function userChoice () {
    // const rock looks for .rock and sets user choice 
    // when the button is clicked. same process is used
    // for the other two choices in RPS.
    const rock = document.querySelector('.rock');
    rock.addEventListener('click', function(e) {
        user="rock";    
        // comment these lines out when done
        console.log(user);
        return user;
    });

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', function(e) {
        user="paper";    
        // comment these lines out when done
        console.log(user);
        return user;
    });

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', function(e) {
        user="scissors";    
        // comment these lines out when done
        console.log(user);
        return user;
        
    });

}

userChoice();