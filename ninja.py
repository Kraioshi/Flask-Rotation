class Ninja:

    def __init__(self):
        self.gauge = 0
        self.huton = 0

    def spinning_edge(self):
        self.gauge += 5

    def gust_slash(self):
        self.gauge += 5

    def aeolian_edge(self):
        self.gauge += 15

    def armor_crush(self):
        self.gauge += 15

    def huraijin(self):
        self.huton = 60

    def bhavachakra(self):
        self.gauge -= 50
