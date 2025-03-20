function studentGrade (Marks) {
    if (Marks > 79 ) {
        return "A";
    }
        
    else if (Marks >= 60 && Marks <= 79) {
        return  "B";
    
    }

    else if (Marks >= 59 && Marks <= 60) {
        return "c-";
    }



    else if (Marks >= 40 && Marks <= 49) {
        return "D-";
    
    }


    else if (Marks < 40 ) {
        return "E";
    }
}
