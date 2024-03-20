public class Solution {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int diffPossible(final int[] A, int B) {
    int n = A.length; 
    HashSet <Integer> set  = new HashSet<>();
    for(int i =0; i<n;i++){
       int k = A[i]-B;
      // Check if either A[i] - B or A[i] + B exists in the set
        if(set.contains(k)||set.contains(A[i]+B)){
            return 1 ;
        }
        else{
            set.add(A[i]);
        }
    }
    return 0 ;
    }
}
