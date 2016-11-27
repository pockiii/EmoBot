import java.util.Arrays;
import java.util.Scanner;

public class Retriever {
	
	int x;
	int y;
	int intGoodCount;
	int intBadCount;
	String GetOut;
	String[] Reviews = new String[100]; 
	
	public Retriever(){ 
		Scanner Review = new Scanner(System.in);
		Scanner Exit = new Scanner(System.in);
		x = 0;
		do {
		System.out.println("Please type in your review: ");
		Reviews[x] = Review.nextLine();
		x++;
		System.out.println("Reviews left to Input: " + (100 - x));
		System.out.println("Thank you for your response!");
		System.out.println("Would you like to print a Report or enter a new review?");		
		System.out.println("Please type in 'Print' or 'New'.");		
		GetOut = Exit.nextLine();
		} while (!"Print".equals(GetOut));
	}
	
	public int ScanGood(int x){
		String[] GoodWords = { "Good", "of high quality", "of a high standard", "quality", "superior", "satisfactory", "acceptable", "adequate", "in order", "up to scratch", 
				"excellent", "superb", "outstanding", "magnificent", "first-rate", "first-class",  "splendid", "admirable", "worthy"};
		 String[] Parts = Reviews[x].split(" ");
		 intGoodCount = 0;
		 if (Arrays.asList(Parts).contains("Good")){
			 intGoodCount++;
		 }
		 return intGoodCount;
	}
	
	public int ScanBad(int x){
		String[] BadWords = {"bad", "substandard", "poor", "inferior", "second-rate", "unsatisfactory", "inadequate", "unacceptable", "not up to par", "deficient", "imperfect", "defective", "faulty", "shoddy", "amateurish", "careless", "negligent", "dreadful", "awful", "terrible"};
		 String[] Parts = Reviews[x].split(" ");
		 intBadCount = 0;
		 if (Arrays.asList(Parts).contains("Bad")){
			 intBadCount++;
		 }
		 return intBadCount;
	}
	
	public int GetX(){
		return x;
	}
}

