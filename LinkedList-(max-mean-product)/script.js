class LinkedList {
    head;
    constructor() {
        this.head = null;
    };

    insert_node = (data) => {
        if(this.head === null) {
            this.head = new LinkedListNode(data);
            return;
        }
        let current_head = this.head;
        while(current_head.next) {
            current_head = current_head.next;
        }
        current_head.next = new LinkedListNode(data);
    }

    max_node = () => {
        if(this.head === null) {
            console.log('List is empty.');
            return;
        }
        let max = 0;
        let current_head = this.head;
        while(current_head) {
            if(current_head.data > max) {
                max = current_head.data;
            }
            current_head = current_head.next;
        }
        console.log('Max value is:', max);
    }

    mean = () => {
        if(this.head === null) {
            console.log('List is empty.');
            return;
        }
        let total = 0;
        let sum = 0;
        let current_head = this.head;
        while(current_head) {
            sum += current_head.data;
            total++;
            current_head = current_head.next;
        }
        console.log('Mean is:', sum/total);
    }

    product = () => {
        if(this.head === null) {
            console.log('List is empty.');
            return;
        }
        let product = 1;
        let current_head = this.head;
        while(current_head) {
            product *= current_head.data;
            current_head = current_head.next;
        }
        console.log('Product is:', product);
    }
};

class LinkedListNode {
    data;
    next;
    constructor (data) {
        this.data = data;
        this.next = null;
    }
};

const my_linked_list = new LinkedList();
my_linked_list.max_node();
my_linked_list.insert_node(10);
my_linked_list.insert_node(80);
my_linked_list.insert_node(50);
my_linked_list.insert_node(30);
my_linked_list.max_node();
my_linked_list.mean();
my_linked_list.product();

console.log("MY LIST >> ",JSON.stringify(my_linked_list.head));