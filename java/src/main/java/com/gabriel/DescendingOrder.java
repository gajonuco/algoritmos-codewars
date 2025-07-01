package com.gabriel;

import java.util.Arrays;
import java.util.Collections;

public class DescendingOrder{
    public static int sortDesc(final int num){

        String digits [] = String.valueOf(num).split("");

        Arrays.sort(digits, Collections.reverseOrder());

        String numeros_ordenados = String.join("", digits);

        Integer numeros_ordenados_2 = Integer.parseInt(numeros_ordenados);

        return numeros_ordenados_2;
    }

}


