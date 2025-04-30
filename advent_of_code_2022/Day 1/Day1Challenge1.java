package AdventChallenges.Day1;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

public class Day1Challenge1 
{
 
    public static void main(String [] args ) throws IOException  //static method  
    {  
        
        System.out.println(answer());
    }  

    public static int answer() throws IOException
    {
        String fileName = "C:/Users/sween/OneDrive - Carroll University/Documents/CodeProjects/AdventChallenges/Day1/input.txt";

        BufferedReader reader = new BufferedReader ( new FileReader ( fileName ) );
        int topValue = 0;
        int sum = 0;
        String line;
        ArrayList<Integer> calories = new ArrayList<>();

        while ((line = reader.readLine()) != null)
        {
            if (!line.equals(""))
            {
                int currentelfValue = Integer.parseInt(line);
                sum += currentelfValue;
            }
            else
            {
                calories.add(sum);
                sum = 0;
            }
        }

        topValue = Collections.max(calories);
        System.out.println("Highest Value: ");
        System.out.println(topValue);
        System.out.println("Top 3:");
        System.out.println("1: " + Collections.max(calories));
        calories.remove(Collections.max(calories));
        System.out.println("2: " + Collections.max(calories));
        calories.remove(Collections.max(calories));
        System.out.println("3: " + Collections.max(calories));


        //System.out.println(topValue);
        return topValue;
    }
}
