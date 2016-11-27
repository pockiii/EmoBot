

public class Driver {

	public static void main(String[] args) {
		int intGood = 0;
		int intBad = 0;
		int intticker = 0;
		Retriever Retriever = new Retriever();
		do {
			intGood = intGood + Retriever.ScanGood(intticker);
			intBad = intBad + Retriever.ScanBad(intticker);
			intticker++;
		} while (intticker != Retriever.GetX());
		if (intGood > intBad)
		{
			System.out.println("The cafe is good overall");
		}
		if (intGood <= intBad)
		{
			System.out.println("The cafe is actually shite");
		}
		System.out.println(intGood);
		System.out.println(intBad);
	}
}
