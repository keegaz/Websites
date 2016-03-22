/* The programs tells the user their wages for the week*/

var hourly_Rate,oT_Rate;
var hours, overtime,weekly_rate, oT;


hourly_Rate = 2.40;
overtime = 3.60;

hours = prompt("How many hours did you work?");


weekly_rate = hours * hourly_Rate;
document.write("Hours Worked: ",hours);

document.write(" £",weekly_rate ," Is your weekly wage. ");

        if(hours >40)
        {
            document.write("You have overtime ");
            var oT;
            oT = (hours - 40);
            document.write(oT, " Hours worked over");            
            var oT_Rate = oT * overtime;
            document.write("Your overtime wage is: £ ", oT_Rate);

             
        }

      
        else 
        {
            document.write("You have no overtime! ");
        }

      
         var wage_Total;
        wage_Total = oT_Rate + weekly_rate;
        document.write("Your total wages is: £",wage_Total);
 