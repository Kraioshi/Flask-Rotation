class DarkKnight:

    def __init__(self):
        self.combo = 0
        self.gauge = 0
        self.mana = 10000

    def hard_slash(self):
        self.combo = 1

    def syphon_strike(self):
        if self.combo == 1:
            self.combo = 2
            self.mana += 600
        else:
            self.combo = 0

    def souleater(self):
        if self.combo == 2:
            self.combo = 0

            if self.gauge < 80:
                self.gauge += 20
            else:
                self.gauge = 100
        else:
            self.combo = 0

    def bloodspiller(self):
        if self.gauge >= 50:
            self.gauge -= 50

