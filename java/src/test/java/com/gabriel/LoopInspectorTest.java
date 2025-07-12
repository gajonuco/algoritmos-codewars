package com.gabriel;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class LoopInspectorTest {
    
    @Test
    public void test_01(){
        Node list = Node.creatingChain(3904, 1087);
        int result = new LoopInspector().loopSize(list);

        assertEquals(1087,result,"Incorrect loop size");
    }

    @Test 
    public void test_02(){
        Node list = Node.creatingChain(1, 3);
        int result = new LoopInspector().loopSize(list);

        assertEquals(3, result , "incorrect loop sixze");
    }

    @Test 
    public void test_03(){
        Node list = Node.creatingChain(21, 29);
        int result = new LoopInspector().loopSize(list);

        assertEquals(29, result , "incorrect loop sixze");
    }
}
