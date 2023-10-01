class Reaper:

    def __init__(self):
        self.stage = 0
        self.gauge = 0

    def slice(self):
        self.stage = 1
        if self.gauge <= 90:
            self.gauge += 10
        elif self.gauge > 90:
            self.gauge = 100

    def waxing_slice(self):
        if self.stage == 1:
            self.stage = 2
            if self.gauge <= 90:
                self.gauge += 10
            elif self.gauge > 90:
                self.gauge = 100
        else:
            self.stage = 0

    def infernal_slice(self):
        if self.stage == 2:
            self.stage = 0
            if self.gauge <= 90:
                self.gauge += 10
            elif self.gauge > 90:
                self.gauge = 100
        else:
            self.stage = 0

    def gallows(self):
        if self.gauge >= 50:
            self.gauge -= 50
        else:
            print("Not enough gauge to use Gallows")
