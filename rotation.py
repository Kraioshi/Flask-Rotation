class Reaper:

    def __init__(self):
        self.stage = 0
        self.soul_gauge = 0

    def slice(self):
        self.stage = 1
        if self.soul_gauge <= 90:
            self.soul_gauge += 10
        elif self.soul_gauge > 90:
            self.soul_gauge = 100

    def waxing_slice(self):
        if self.stage == 1:
            self.stage = 2
            if self.soul_gauge <= 90:
                self.soul_gauge += 10
            elif self.soul_gauge > 90:
                self.soul_gauge = 100
        else:
            self.stage = 0

    def infernal_slice(self):
        if self.stage == 2:
            self.stage = 0
            if self.soul_gauge <= 90:
                self.soul_gauge += 10
            elif self.soul_gauge > 90:
                self.soul_gauge = 100
        else:
            self.stage = 0

    def gallows(self):
        if self.soul_gauge >= 50:
            self.soul_gauge -= 50
        else:
            print("Not enough Soul gauge to use Gallows")
