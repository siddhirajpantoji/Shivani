public class Loop{
    public static void main(String args[]){
        for(int i = 0 ; i<10 ; i++){
            try{
                System.out.println(i);
                Thread.sleep(1000);
            }
            catch(Exception e){
                System.out.println(e);
            }
        }
    }
}