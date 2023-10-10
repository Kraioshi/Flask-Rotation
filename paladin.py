class Paladin:

    def __init__(self) -> None:
        self.combo = 0
        self.atonement_stacks = 0

    def fast_blade(self):
        self.combo = 1

    def riot_blade(self):
        if self.combo == 1:
            self.combo = 2
        else:
            self.combo = 0

    def royal_authority(self):
        if self.combo == 2:
            self.atonement_stacks = 3
        
        self.combo = 0

    def holy_spirit(self):
        pass

    def atonement(self):
        if self.atonement_stacks > 0:
            self.atonement_stacks -= 1

    def goring_blade(self):
        pass

    def circle_of_scorn(self):
        pass

    def expiacion(self):
        pass

    def intervene(self):
        pass

    def confetior(self):
        pass

    def blade_of_faith(self):
        pass

    def blade_of_truth(self):
        pass

    def blade_of_valor(self):
        pass

    def requiescat(self):
        pass

    def fight_or_flight(self):
        pass

