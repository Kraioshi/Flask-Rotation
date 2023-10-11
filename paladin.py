class Paladin:

    def __init__(self) -> None:
        self.gcd = 2.5
        self.combo = 0
        self.atonement_stacks = 0

        self.fight_or_flight_buff = 0
        self.requiescat_buff = 0
        self.requiescat_stacks = 0

        self.confetior_ready = False
        self.blade_of_faith_ready = False
        self.blade_of_truth_ready = False
        self.blade_of_valor_ready = False

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
        if self.confetior_ready:
            self.requiescat_stacks -= 1
            self.confetior_ready = False
            self.blade_of_faith_ready = True

    def blade_of_faith(self):
        if self.blade_of_faith_ready:
            self.requiescat_stacks -= 1
            self.blade_of_faith_ready = False
            self.blade_of_truth_ready = True

    def blade_of_truth(self):
        if self.blade_of_truth_ready:
            self.requiescat_stacks -= 1
            self.blade_of_truth_ready = False
            self.blade_of_valor_ready = True

    def blade_of_valor(self):
        if self.blade_of_valor_ready:
            self.requiescat_stacks -= 1
            self.blade_of_valor_ready = False

    def requiescat(self):
        self.requiescat_buff = 30
        self.requiescat_stacks = 4
        self.confetior_ready = True

    def fight_or_flight(self):
        self.fight_or_flight_buff = 20

