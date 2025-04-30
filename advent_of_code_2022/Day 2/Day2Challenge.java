package AdventChallenges.Day2;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Day2Challenge 
{
    public static void main(String [] args ) throws IOException
    {  
        System.out.println("Score1: " + score());
        System.out.println("Score2: " + score2());
    }  

    public static int score() throws IOException
    {
        String fileName = "C:/Users/sween/OneDrive - Carroll University/Documents/CodeProjects/AdventChallenges/Day2/input.txt";

        BufferedReader reader = new BufferedReader ( new FileReader ( fileName ) );
        String line;

        int sum = 0;
        int X = 1;
        int Y = 2;
        int Z = 3;
        int win = 6;
        int draw = 3;
        int loss = 0;

        while ((line = reader.readLine()) != null)
        {
            //System.out.println(line);

            if (line.equals("A X")) //1
            {
                sum += X + draw;
            }
            if(line.equals("A Y")) //2
            {
                sum += Y + win;
            }
            if (line.equals("A Z"))//3
            {
                sum += Z + loss;
            }
            if (line.equals("B X")) //4
            {
                sum += X + loss;
            }
            if (line.equals("B Y")) //5
            {
                sum += Y + draw;
            }
            if (line.equals("B Z")) //6
            {
                sum += Z + win;
            }
            if (line.equals("C X")) //7
            {
                sum += X + win;
            }
            if (line.equals("C Y")) //8
            {
                sum += Y + loss;
            }
            if (line.equals("C Z")) //9 
            {
                sum += Z + draw;
            }
        }

        return sum;
    }

    public static int score2 () throws IOException
    {

        String fileName = "C:/Users/sween/OneDrive - Carroll University/Documents/CodeProjects/AdventChallenges/Day2/input.txt";

        BufferedReader reader = new BufferedReader ( new FileReader ( fileName ) );
        String line;

        int sum = 0;
        int X = 1;
        int Y = 2;
        int Z = 3;
        int win = 6;
        int draw = 3;
        int loss = 0;

        while ((line = reader.readLine()) != null)
        {
            //System.out.println(line);

            if (line.equals("A X")) //1
            {
                sum += Z + loss;
            }
            if(line.equals("A Y")) //2
            {
                sum += X + draw;
            }
            if (line.equals("A Z"))//3
            {
                sum += Y + win;
            }
            if (line.equals("B X")) //4
            {
                sum += X + loss;
            }
            if (line.equals("B Y")) //5
            {
                sum += Y + draw;
            }
            if (line.equals("B Z")) //6
            {
                sum += Z + win;
            }
            if (line.equals("C X")) //7
            {
                sum += Y + loss;
            }
            if (line.equals("C Y")) //8
            {
                sum += Z + draw;
            }
            if (line.equals("C Z")) //9 
            {
                sum += X + win;
            }
        }
        
        return sum;
        
    }

}
