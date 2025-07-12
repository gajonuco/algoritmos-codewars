package com.gabriel;

public class LoopInspector {

    public int loopSize(Node startLoop){
        Node slow = startLoop;
        Node fast = startLoop;

        while (fast != null && fast.getNext() != null) {
           slow = slow.getNext();
           fast = fast.getNext().getNext();

            if (slow == fast) {
                return countCycleLength(slow);
            }

            
        }
        return 0;
    }

    private int countCycleLength(Node nodeInCylcle){
        
        Node current= nodeInCylcle;
        int count = 1;
        
        while (current.getNext() != nodeInCylcle) {
            current = current.getNext();
            count ++;
            
        }

        return count;
    }
    
}
