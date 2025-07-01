package com.gabriel;

public class Vowels {
    public static int getCount(String vocal){

        int cont = 0;
        for (char c : vocal.toCharArray()){
            if("aeiou".indexOf(c) != -1){
                cont ++;
            }
        }
        return cont;
    }
}
