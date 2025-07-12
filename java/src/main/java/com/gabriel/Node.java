package com.gabriel;

public class Node {
    private Node next;

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public static Node creatingChain(int danling, int loop){
        
        Node head = new Node();
        Node current = head;
        
        for (int i = 1; i < danling; i++) {
            Node nextNode = new Node();
            current.setNext(nextNode);
            current = nextNode;
        }

        Node loopStart = new Node();
        current.setNext(loopStart);
        current = loopStart;

        for (int i = 1; i < loop; i++) {
            Node nextNode = new Node();
            current.setNext(nextNode);
            current = nextNode;
        }

        current.setNext(loopStart);

        return head;
    }
}
