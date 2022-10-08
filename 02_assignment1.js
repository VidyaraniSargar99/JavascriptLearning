
    console.log("===========QUESTION:01=============");
    console.log("I am learning Angular.");
    console.log("I am learning Java Script.");
    console.log("=============QUESTION:02============");
    console.log("Vidyarani Sargar");
    console.log("============QUESTION:03==============");
    //swap the two number or string
    function swap_values(arg1,arg2){
        console.log("============Before swap===============");
        console.log(arg1,arg2);
        var temp=arg1;
        arg1=arg2;
        arg2=temp;
        console.log("=============After swap===================");
        console.log(arg1,arg2);
    }
    swap_values("Virat","Anushka");
    swap_values("1000","2000");
    // add the three number or string and return
    console.log("=============QUESTION:04=================");
    function add_three_number(arg3,arg4,arg5){
        console.log("==========================");
        var add= arg3+arg4+arg5;
        console.log("Addition of three numbers is = "+add);
        return add;
    }
    add_three_number(10.23,600,40);
    console.log("================================");
    function add_three_word(arg6,arg7,arg8){
        var add=arg6+arg7+arg8;
        console.log("Addition of three words is = "+add);
        return add;
    }
    add_three_word("Hello", "Good", "Morning");




    
    
    





