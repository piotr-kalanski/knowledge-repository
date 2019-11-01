import threading
import time
import logging
import random
import queue

logging.basicConfig(level=logging.DEBUG,
                    format='(%(threadName)-9s) %(message)s',)

BUF_SIZE = 10
q = queue.Queue(BUF_SIZE)

class ProducerThread(threading.Thread):
    def __init__(self, name=None):
        super(ProducerThread,self).__init__()
        self.name = name

    def run(self):
        while True:
            if not q.full():
                item = {
                    "number": random.randint(1,10)
                }
                q.put(item)
                logging.debug('Putting ' + str(item)  
                              + ' : ' + str(q.qsize()) + ' items in queue')
                time.sleep(random.random())
        return

class ConsumerThread(threading.Thread):
    def __init__(self, name=None):
        super(ConsumerThread,self).__init__()
        self.name = name
        return

    def run(self):
        while True:
            if not q.empty():
                item = q.get()
                logging.debug('Getting ' + str(item) 
                              + ' : ' + str(q.qsize()) + ' items in queue')
                time.sleep(random.random())
        return

if __name__ == '__main__':
    
    p1 = ProducerThread(name='producer1')
    p2 = ProducerThread(name='producer2')
    c1 = ConsumerThread(name='consumer1')
    c2 = ConsumerThread(name='consumer2')

    p1.start()
    p2.start()
    time.sleep(2)
    c1.start()
    c2.start()
    time.sleep(2)
